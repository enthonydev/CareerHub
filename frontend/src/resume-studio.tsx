import './resume-studio.css';

export type ResumeData = {
  name: string;
  headline: string;
  goal: string;
  skills: string;
  resume: string;
};

export type ResumeStyle = 'classic' | 'modern';

type Props = {
  profile: ResumeData;
  onUpdate: (key: keyof ResumeData, value: string) => void;
  style: ResumeStyle;
  onStyleChange: (style: ResumeStyle) => void;
};

export function ResumeStudio({ profile, onUpdate, style, onStyleChange }: Props) {
  return (
    <section className="studio-shell"><div className="studio-heading"><div><p className="eyebrow">CURRÍCULO / ESTÚDIO</p><h1>Um currículo que fala por você.</h1><p>Edite as informações à esquerda. O documento acompanha cada mudança em tempo real.</p></div><button className="studio-export" onClick={() => window.print()}>Exportar PDF <span aria-hidden="true">↗</span></button></div><div className="studio-toolbar" role="group" aria-label="Estilo do currículo"><span>Estilo do documento</span><button aria-pressed={style === 'classic'} className={style === 'classic' ? 'studio-tab active' : 'studio-tab'} onClick={() => onStyleChange('classic')}>Essencial</button><button aria-pressed={style === 'modern'} className={style === 'modern' ? 'studio-tab active' : 'studio-tab'} onClick={() => onStyleChange('modern')}>Contemporâneo</button><small>Ambos com impressão limpa</small></div><div className="studio-columns"><div className="studio-fields"><div className="studio-panel-title"><span>01</span><div><h2>Informações do documento</h2><p>Use apenas informações que correspondem à sua experiência.</p></div></div><label><span>Nome</span><input value={profile.name} onChange={e=>onUpdate('name',e.target.value)} placeholder="Seu nome completo"/></label><label><span>Título ou área</span><input value={profile.headline} onChange={e=>onUpdate('headline',e.target.value)} placeholder="Sua área profissional"/></label><label><span>Objetivo profissional</span><textarea value={profile.goal} onChange={e=>onUpdate('goal',e.target.value)} rows={4} placeholder="Em poucas linhas, a oportunidade que você procura."/></label><label><span>Competências</span><textarea value={profile.skills} onChange={e=>onUpdate('skills',e.target.value)} rows={4} placeholder="Uma habilidade por linha, se possível."/></label><label><span>Experiência, formação e projetos</span><textarea value={profile.resume} onChange={e=>onUpdate('resume',e.target.value)} rows={12} placeholder="Descreva sua trajetória; separe as seções com linhas em branco."/></label><p className="studio-help">Este editor ainda não interpreta PDF ou DOCX. Para não perder alterações, ative o salvamento local ou exporte seu perfil em JSON.</p></div><div className="studio-preview"><div className="preview-top"><span>PRÉVIA · A4</span><span>Atualização em tempo real</span></div><article className={style === 'modern' ? 'resume-document resume-modern' : 'resume-document resume-classic'} aria-label="Prévia do currículo"><header className="resume-document-header"><h2>{profile.name.trim() || 'Seu nome completo'}</h2><p>{profile.headline.trim() || 'Área ou título profissional'}</p></header>{profile.goal.trim() && <section><h3>Objetivo</h3><p>{profile.goal}</p></section>}{profile.skills.trim() && <section><h3>Competências</h3><p>{profile.skills}</p></section>}<section><h3>Experiência, formação e projetos</h3><p>{profile.resume.trim() || 'Seu histórico profissional e acadêmico aparecerá aqui.'}</p></section></article><div className="preview-caption">Prévia visual. Confira paginação, margens e texto na janela de impressão antes de salvar o PDF.</div></div></div></section>
  );
}
