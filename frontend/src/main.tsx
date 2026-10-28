import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { ResumeStudio } from './resume-studio';

type Profile = { name: string; headline: string; goal: string; skills: string; resume: string; linkedin: string; contact: string; education: string; experience: string; courses: string; languages: string };
const initial: Profile = { name: '', headline: '', goal: '', skills: '', resume: '', linkedin: '', contact: '', education: '', experience: '', courses: '', languages: '' };
const fields: { key: keyof Profile; label: string; hint: string; multiline?: boolean }[] = [
  { key: 'name', label: 'Nome profissional', hint: 'Como você deseja aparecer no currículo' },
  { key: 'headline', label: 'Área ou título profissional', hint: 'Ex.: estudante de Ciência da Computação' },
  { key: 'goal', label: 'Objetivo de carreira', hint: 'Área, cargo ou tipo de oportunidade', multiline: true },
  { key: 'skills', label: 'Competências', hint: 'Liste apenas habilidades que realmente possui', multiline: true },
  { key: 'resume', label: 'Texto do currículo', hint: 'Cole seu currículo aqui; PDF/DOCX terão importação em uma etapa futura', multiline: true },
  { key: 'linkedin', label: 'Informações do LinkedIn', hint: 'Cole seu Sobre, headline e experiências atuais', multiline: true },
];

function isProfile(value: unknown): value is Profile {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const obj = value as Record<string, unknown>;
  return fields.every(({ key }) => typeof obj[key] === 'string' && obj[key].length <= 100000) && ['contact','education','experience','courses','languages'].every(key => obj[key] === undefined || (typeof obj[key] === 'string' && obj[key].length <= 100000));
}
const STORAGE_KEY = 'careerhub-profile-v1';
const THEME_KEY = 'careerhub-theme-v1';
type Theme = 'light' | 'dark';
function App() {
  const [profile, setProfile] = React.useState<Profile>(initial);
  const [message, setMessage] = React.useState('Nenhum dado é enviado a um servidor nesta prévia.');
  const [active, setActive] = React.useState<'inicio'|'perfil'|'curriculo'|'config'|'roadmap'>('inicio');
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [autoSave, setAutoSave] = React.useState(false);
  const [resumeStyle, setResumeStyle] = React.useState<'classic' | 'modern'>('classic');
  const [theme, setTheme] = React.useState<Theme>(() => {
    try { return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light'; }
    catch { return 'light'; }
  });
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* preference storage unavailable */ }
  }, [theme]);
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data: unknown = JSON.parse(saved);
        if (isProfile(data)) { setProfile({ ...initial, ...data }); setAutoSave(true); setMessage('Perfil restaurado deste navegador.'); }
      }
    } catch { setMessage('Falha na restauração. Importe seu backup JSON.'); }
  }, []);
  React.useEffect(() => {
    if (!autoSave) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(profile)); }
    catch { setMessage('Armazenamento indisponível. Exporte um JSON para backup.'); }
  }, [autoSave, profile]);
  function toggleSave(checked: boolean) {
    if (!checked) {
      setAutoSave(false);
      try { localStorage.removeItem(STORAGE_KEY); } catch { /* storage disabled */ }
      setMessage('Cópia salva apagada. Seu formulário atual foi mantido.');
    } else {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(profile)); setAutoSave(true); setMessage('Salvamento neste navegador ativado.'); }
      catch { setMessage('Não foi possível salvar. Exporte seu JSON.'); }
    }
  }
  function update(key: keyof Profile, value: string) { setProfile(prev => ({ ...prev, [key]: value })); }
  function download() {
    const content = JSON.stringify({ format: 'careerhub-profile', version: 1, profile }, null, 2);
    const url = URL.createObjectURL(new Blob([content], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = 'careerhub-perfil.json'; link.click();
    URL.revokeObjectURL(url); setMessage('Arquivo exportado. Guarde-o em uma pasta privada.');
  }
  async function importFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]; if (!file) return;
    if (file.size > 512 * 1024 || !file.name.toLowerCase().endsWith('.json')) { setMessage('Escolha um JSON de até 512 KB.'); event.target.value = ''; return; }
    try {
      const input: unknown = JSON.parse(await file.text());
      const data = input as { format?: unknown; version?: unknown; profile?: unknown };
      if (data.format !== 'careerhub-profile' || data.version !== 1 || !isProfile(data.profile)) throw Error('Formato inválido');
      setProfile({ ...initial, ...data.profile }); setMessage('Perfil importado neste navegador. Salve novamente para manter alterações.');
    } catch { setMessage('Não foi possível importar. Use um arquivo exportado pelo CareerHub.'); }
    event.target.value = '';
  }
  const filled = fields.filter(({ key }) => profile[key].trim().length > 0).length;
  return <div className="app"><aside className="sidebar"><div className="brand"><img className="brandmark" src={`${import.meta.env.BASE_URL}brand/careerhub-mark.svg`} alt="Símbolo CareerHub" /><div><strong>Career<span className="brand-accent">Hub</span></strong><small>Seu espaço de carreira</small></div></div>
    <nav aria-label="Navegação principal"><button className={active === "inicio" ? "selected" : ""} onClick={() => setActive("inicio")}>⌂ <span>Início</span></button><button className={active === 'perfil' ? 'selected' : ''} onClick={() => setActive('perfil')}>▤ <span>Meu perfil</span></button><button className={active === 'curriculo' ? 'selected' : ''} onClick={() => setActive('curriculo')}>▧ <span>Meu currículo</span></button><button className={active === 'config' ? 'selected' : ''} onClick={() => setActive('config')}>⚙ <span>Configurações</span></button><button className={active === 'roadmap' ? 'selected' : ''} onClick={() => setActive('roadmap')}>◫ <span>Próximas etapas</span></button></nav>
    <div className="sidebar-bottom"><span className="privacy-dot" /> Armazenamento no navegador<br /><small>Sem envio à nuvem</small></div>
  </aside><main className="main"><div className="topbar"><span className="breadcrumb">WORKSPACE <span className="breadcrumb-slash">/</span> {active === 'inicio' ? 'INÍCIO' : active === 'perfil' ? 'MEU PERFIL' : active === 'curriculo' ? 'CURRÍCULO' : active === 'config' ? 'CONFIGURAÇÕES' : 'ROADMAP'}</span><button type="button" className="quick-theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"} title="Alternar aparência">{theme === "dark" ? "☀" : "☾"} <span>{theme === "dark" ? "Claro" : "Escuro"}</span></button></div>
    {active === 'inicio' ? <><section className="home-hero"><div><p className="eyebrow">SEU WORKSPACE</p><h1>{profile.name.trim() ? 'Bom te ver, ' + profile.name.trim().split(' ')[0] + '.' : 'Seu próximo passo começa aqui.'}</h1><p>Organize seu perfil, cuide do currículo e acompanhe o que vem por aí.</p><button className="primary home-cta" onClick={() => setActive('perfil')}>{filled === fields.length ? 'Revisar meu perfil' : 'Continuar meu perfil'} ↗</button></div><div className="home-decoration" aria-hidden="true"><div className="orbit-circle"/><span>CH</span></div></section><section className="home-section"><div><p className="eyebrow">SUAS FERRAMENTAS</p><h2>Escolha por onde começar.</h2></div><div className="home-cards"><button className="home-card" onClick={() => setActive('perfil')}><span className="home-icon">◈</span><strong>Meu perfil ↗</strong><small>Suas informações em um só lugar.</small><span className="home-meta">{filled} de {fields.length} campos preenchidos</span></button><button className="home-card" onClick={() => setActive('curriculo')}><span className="home-icon">▤</span><strong>Meu currículo ↗</strong><small>Edite e visualize seu currículo.</small><span className="home-meta">{profile.resume.trim() ? 'Rascunho iniciado' : 'Pronto para começar'}</span></button><button className="home-card" onClick={() => setActive('config')}><span className="home-icon">⚙</span><strong>Configurações ↗</strong><small>Controle a aparência e seus dados.</small><span className="home-meta">{theme === 'dark' ? 'Modo escuro' : 'Modo claro'}</span></button></div></section><section className="home-next"><div><p className="eyebrow">EM CONSTRUÇÃO</p><h2>A próxima evolução</h2><p>Estamos preparando a avaliação de currículos e o comparador de vagas. Sem porcentagens inventadas.</p></div><button className="secondary" onClick={() => setActive('roadmap')}>Ver roadmap ↗</button></section></> : active === 'perfil' ? <><section className="intro"><div><p className="eyebrow">SEU ESPAÇO, SEU RITMO</p><h1>Sua trajetória merece um bom lugar.</h1><p>Um espaço para organizar o que você já construiu e preparar o que vem depois.</p></div><div className="progress"><strong>{filled}<span>/{fields.length}</span></strong><small>campos preenchidos</small><div className="progressbar"><i style={{ width: (filled / fields.length * 100) + '%' }} /></div></div></section>
    <section className="notice"><strong>Privacidade primeiro.</strong> Nesta prévia, nada é enviado à OpenAI ou ao GitHub. O salvamento local é opcional e deve ser ativado apenas em dispositivo de confiança. Mantenha um backup JSON.</section>
    <div className="save-control"><label><input type="checkbox" checked={autoSave} onChange={e => toggleSave(e.target.checked)}/> Salvar automaticamente neste navegador</label><small>Desativar apaga a cópia salva. Evite computadores compartilhados.</small></div><section className="workspace"><div className="section-heading"><div><h2>Seu cartão de visita</h2><p>Comece pelo essencial. Você pode importar um perfil existente ou salvar uma cópia.</p></div><div className="actions"><input ref={fileRef} type="file" accept=".json,application/json" className="hidden" onChange={importFile}/><button className="secondary" onClick={() => fileRef.current?.click()}>Importar JSON</button><button className="primary" onClick={download}>Exportar perfil</button></div></div>
    <div className="form-grid">{fields.map(({key,label,hint,multiline}) => <label key={key} className={multiline ? 'wide' : ''}><span>{label}</span><small>{hint}</small>{multiline ? <textarea value={profile[key]} onChange={e => update(key,e.target.value)} rows={key === 'resume' || key === 'linkedin' ? 6 : 3} maxLength={100000}/> : <input value={profile[key]} onChange={e => update(key,e.target.value)} maxLength={100000}/>}</label>)}</div><p className="feedback" role="status">{message}</p></section></> : active === 'curriculo' ? <ResumeStudio profile={profile} onUpdate={update} style={resumeStyle} onStyleChange={setResumeStyle}/> :
    active === 'config' ? <><section className="intro roadmap"><div><p className="eyebrow">CONFIGURAÇÕES</p><h1>Seu espaço. Suas escolhas.</h1><p>Controle a experiência sem menus complicados.</p></div></section><section className="workspace compact-settings"><input ref={fileRef} type="file" accept=".json,application/json" className="hidden" onChange={importFile}/><div className="setting-line"><div><span className="eyebrow">APARÊNCIA</span><h2>Tema da interface</h2><p>Use o botão no canto superior direito para alternar o tema. A preferência fica salva no navegador.</p></div><span className="setting-status">{theme === 'dark' ? '☾ Escuro' : '☀ Claro'}</span></div><div className="setting-line"><div><span className="eyebrow">PRIVACIDADE</span><h2>Salvar neste dispositivo</h2><p>Ative somente em um dispositivo de confiança. Limpar dados do navegador apaga a cópia.</p></div><label className="setting-switch"><input type="checkbox" checked={autoSave} onChange={e => toggleSave(e.target.checked)}/><span>Salvamento local</span></label></div><div className="setting-line"><div><span className="eyebrow">SEUS ARQUIVOS</span><h2>Importar ou exportar</h2><p>Seu backup é um JSON portátil. Guarde-o em uma pasta privada.</p></div><div className="setting-actions"><button className="secondary" onClick={()=>fileRef.current?.click()}>Importar JSON</button><button className="primary" onClick={download}>Exportar JSON</button></div></div><p className="feedback" role="status">{message}</p></section></> :
    <section className="intro roadmap"><p className="eyebrow">A CAMINHO</p><h1>O que estamos construindo.</h1><p>Esta primeira versão já permite organizar e exportar seu perfil. O editor de currículo, as avaliações e a IA serão adicionados em entregas verificáveis.</p><div className="milestones">{[['01','Perfil local','Editor e importação/exportação JSON disponíveis nesta prévia.'],['02','Currículo','Versões, templates e exportação PDF/DOCX.'],['03','Avaliação e vagas','Nota explicável, comparação com vaga e sugestões.'],['04','LinkedIn e OpenAI','Métodos especializados, revisão humana e IA opcional.']].map(([n,t,d])=><div key={n}><b>{n}</b><span><strong>{t}</strong><small>{d}</small></span></div>)}</div></section>}
    <footer>CareerHub · Projeto independente · Desenvolvimento assistido por IA</footer>
  </main></div>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
