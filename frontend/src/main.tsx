import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

type Profile = { name: string; headline: string; goal: string; skills: string; resume: string; linkedin: string };
const initial: Profile = { name: '', headline: '', goal: '', skills: '', resume: '', linkedin: '' };
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
  return fields.every(({ key }) => typeof obj[key] === 'string' && obj[key].length <= 100000);
}
const STORAGE_KEY = 'careerhub-profile-v1';
function App() {
  const [profile, setProfile] = React.useState<Profile>(initial);
  const [message, setMessage] = React.useState('Nenhum dado é enviado a um servidor nesta prévia.');
  const [active, setActive] = React.useState<'perfil'|'curriculo'|'roadmap'>('perfil');
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [autoSave, setAutoSave] = React.useState(false);
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data: unknown = JSON.parse(saved);
        if (isProfile(data)) { setProfile(data); setAutoSave(true); setMessage('Perfil restaurado deste navegador.'); }
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
      setProfile(data.profile); setMessage('Perfil importado neste navegador. Salve novamente para manter alterações.');
    } catch { setMessage('Não foi possível importar. Use um arquivo exportado pelo CareerHub.'); }
    event.target.value = '';
  }
  const filled = fields.filter(({ key }) => profile[key].trim().length > 0).length;
  return <div className="app"><aside className="sidebar"><div className="brand"><span className="brandmark">C</span><div><strong>CareerHub</strong><small>Workspace pessoal</small></div></div>
    <nav aria-label="Navegação principal"><button className={active === 'perfil' ? 'selected' : ''} onClick={() => setActive('perfil')}>▤ <span>Meu perfil</span></button><button className={active === 'curriculo' ? 'selected' : ''} onClick={() => setActive('curriculo')}>▧ <span>Meu currículo</span></button><button className={active === 'roadmap' ? 'selected' : ''} onClick={() => setActive('roadmap')}>◫ <span>Próximas etapas</span></button></nav>
    <div className="sidebar-bottom"><span className="privacy-dot" /> Armazenamento no navegador<br /><small>Sem envio à nuvem</small></div>
  </aside><main className="main"><div className="topbar"><span>CAREERHUB / {active === 'perfil' ? 'MEU PERFIL' : active === 'curriculo' ? 'CURRÍCULO' : 'ROADMAP'}</span><span className="tag">Prévia pública · MVP</span></div>
    {active === 'perfil' ? <><section className="intro"><div><p className="eyebrow">CENTRAL DE CARREIRA</p><h1>Seu perfil, seu ponto de partida.</h1><p>Organize suas informações uma vez. Ative o salvamento local ou exporte um backup JSON.</p></div><div className="progress"><strong>{filled}<span>/{fields.length}</span></strong><small>campos preenchidos</small><div className="progressbar"><i style={{ width: (filled / fields.length * 100) + '%' }} /></div></div></section>
    <section className="notice"><strong>Privacidade primeiro.</strong> Nesta prévia, nada é enviado à OpenAI ou ao GitHub. O salvamento local é opcional e deve ser ativado apenas em dispositivo de confiança. Mantenha um backup JSON.</section>
    <div className="save-control"><label><input type="checkbox" checked={autoSave} onChange={e => toggleSave(e.target.checked)}/> Salvar automaticamente neste navegador</label><small>Desativar apaga a cópia salva. Evite computadores compartilhados.</small></div><section className="workspace"><div className="section-heading"><div><h2>Informações profissionais</h2><p>Preencha somente dados verdadeiros. Você pode importar ou exportar um perfil JSON.</p></div><div className="actions"><input ref={fileRef} type="file" accept=".json,application/json" className="hidden" onChange={importFile}/><button className="secondary" onClick={() => fileRef.current?.click()}>Importar JSON</button><button className="primary" onClick={download}>Exportar perfil</button></div></div>
    <div className="form-grid">{fields.map(({key,label,hint,multiline}) => <label key={key} className={multiline ? 'wide' : ''}><span>{label}</span><small>{hint}</small>{multiline ? <textarea value={profile[key]} onChange={e => update(key,e.target.value)} rows={key === 'resume' || key === 'linkedin' ? 6 : 3} maxLength={100000}/> : <input value={profile[key]} onChange={e => update(key,e.target.value)} maxLength={100000}/>}</label>)}</div><p className="feedback" role="status">{message}</p></section></> : active === 'curriculo' ? <><section className="intro"><div><p className="eyebrow">EDITOR DE CURRÍCULO</p><h1>Escreva. Confira. Ajuste.</h1><p>Edite o conteúdo e veja sua prévia. Para baixar em PDF, use a função de impressão do navegador.</p></div></section><section className="workspace"><div className="resume-tools"><span>Rascunho do currículo · sem IA</span><button className="primary" onClick={() => window.print()}>Imprimir / salvar PDF</button></div><div className="editor-grid"><label className="editor-input"><span>Texto do currículo</span><small>Separe blocos com linhas em branco.</small><textarea value={profile.resume} onChange={e=>update('resume',e.target.value)} rows={19} maxLength={100000}/></label><article className="resume-paper" aria-label="Prévia do currículo"><h2>{profile.name.trim() || 'Seu nome'}</h2><p className="resume-headline">{profile.headline.trim() || 'Título profissional'}</p>{profile.goal.trim() && <><h3>Objetivo</h3><p>{profile.goal}</p></>}{profile.skills.trim() && <><h3>Competências</h3><p>{profile.skills}</p></>}<h3>Experiência e formação</h3><p>{profile.resume.trim() || 'Escreva seu currículo para visualizar aqui.'}</p></article></div></section></> :
    <section className="intro roadmap"><p className="eyebrow">PLANEJAMENTO TRANSPARENTE</p><h1>O que vem a seguir</h1><p>Esta primeira versão já permite organizar e exportar seu perfil. O editor de currículo, as avaliações e a IA serão adicionados em entregas verificáveis.</p><div className="milestones">{[['01','Perfil local','Editor e importação/exportação JSON disponíveis nesta prévia.'],['02','Currículo','Versões, templates e exportação PDF/DOCX.'],['03','Avaliação e vagas','Nota explicável, comparação com vaga e sugestões.'],['04','LinkedIn e OpenAI','Métodos especializados, revisão humana e IA opcional.']].map(([n,t,d])=><div key={n}><b>{n}</b><span><strong>{t}</strong><small>{d}</small></span></div>)}</div></section>}
    <footer>CareerHub · Projeto independente · Desenvolvimento assistido por IA</footer>
  </main></div>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
