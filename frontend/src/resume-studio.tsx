import './resume-studio.css';

export type ResumeData = {
  name:string; headline:string; goal:string; skills:string; resume:string;
  contact:string; education:string; experience:string; courses:string; languages:string;
};
export type ResumeStyle = 'classic' | 'modern';
type Props = {profile:ResumeData;onUpdate:(key:keyof ResumeData,value:string)=>void;style:ResumeStyle;onStyleChange:(style:ResumeStyle)=>void};
const sections = [
  {key:'goal',label:'Objetivo ou resumo',placeholder:'Texto de apresentação profissional.'},
  {key:'education',label:'Formação acadêmica',placeholder:'Instituição, curso e período.'},
  {key:'experience',label:'Experiência profissional',placeholder:'Cargo | empresa | período\n• Atividade e resultado\n\nPróximo cargo | empresa | período'},
  {key:'courses',label:'Cursos e certificações',placeholder:'Curso | instituição | ano'},
  {key:'skills',label:'Habilidades',placeholder:'Habilidades relevantes separadas por | ou linhas.'},
  {key:'languages',label:'Idiomas',placeholder:'Português (nativo) | Inglês (intermediário)'}
] as const;
function Block({title,value}:{title:string;value:string}) {
  return value.trim() ? <section className="cv-block"><h3>{title}</h3><div className="cv-body">{value}</div></section> : null;
}
export function ResumeStudio({profile,onUpdate,style,onStyleChange}:Props){
 const isBlue=style==='classic';
 return <section className="studio-shell">
  <div className="studio-heading"><div><p className="eyebrow">ESTÚDIO DE CURRÍCULO</p><h1>O documento é o protagonista.</h1><p>Dois layouts derivados dos currículos de referência. Sem fotos, gráficos ou elementos de enfeite.</p></div><button className="studio-export" onClick={()=>window.print()}>Imprimir / salvar PDF ↗</button></div>
  <div className="studio-toolbar" role="group" aria-label="Modelos de currículo"><span>Modelo</span><button className={isBlue?'studio-tab active':'studio-tab'} aria-pressed={isBlue} onClick={()=>onStyleChange('classic')}>TI · linhas azuis</button><button className={!isBlue?'studio-tab active':'studio-tab'} aria-pressed={!isBlue} onClick={()=>onStyleChange('modern')}>Recepcionista · preto</button><small>Layout de uma coluna · A4</small></div>
  <div className="studio-columns">
   <div className="studio-fields">
    <div className="studio-panel-title"><span>01</span><div><h2>Preencher o modelo</h2><p>Os campos vazios ficam ocultos na versão final. Os exemplos são apenas instruções, nunca dados inseridos.</p></div></div>
    <label><span>Nome completo</span><input value={profile.name} onChange={e=>onUpdate('name',e.target.value)} placeholder="Nome e sobrenome"/></label>
    <label><span>{isBlue?'Título / cargo desejado':'Cargo ou função'}</span><input value={profile.headline} onChange={e=>onUpdate('headline',e.target.value)} placeholder="Ex.: Recepcionista bilíngue"/></label>
    <label><span>Contato e links</span><textarea rows={3} value={profile.contact} onChange={e=>onUpdate('contact',e.target.value)} placeholder="Cidade • telefone • e-mail\nLinkedIn • GitHub"/></label>
    {sections.map(({key,label,placeholder})=><label key={key}><span>{label}</span><textarea rows={key==='experience'?10:4} value={profile[key]} onChange={e=>onUpdate(key,e.target.value)} placeholder={placeholder}/></label>)}
    <label><span>Outras informações (opcional)</span><textarea rows={5} value={profile.resume} onChange={e=>onUpdate('resume',e.target.value)} placeholder="Projetos, habilidades interpessoais ou informações adicionais."/></label>
    <p className="studio-help">Se você importou um JSON antigo, o texto livre original continua no campo “Outras informações”. Seus dados só são mantidos após atualizar a página quando o salvamento local está ativado.</p>
   </div>
   <div className="studio-preview"><div className="preview-top"><span>PRÉVIA A4</span><span>{isBlue?'TI · referência azul':'Recepcionista · referência preta'}</span></div>
    <article className={isBlue?'cv-sheet cv-blue':'cv-sheet cv-black'} aria-label="Prévia de currículo A4">
     <header className="cv-header"><h2>{profile.name.trim()||'SEU NOME COMPLETO'}</h2>{profile.headline.trim()&&<div className="cv-role">{profile.headline}</div>}{profile.contact.trim()&&<div className="cv-contact">{profile.contact}</div>}</header>
     {isBlue ? <>
      <Block title="Objetivo" value={profile.goal}/>
      <Block title="Formação acadêmica" value={profile.education}/>
      <Block title="Experiência profissional" value={profile.experience}/>
      <Block title="Cursos e certificações" value={profile.courses}/>
      <Block title="Habilidades técnicas" value={profile.skills}/>
      <Block title="Idiomas" value={profile.languages}/>
      <Block title="Outras informações" value={profile.resume}/>
     </> : <>
      <Block title="Resumo" value={profile.goal}/>
      <Block title="Experiência" value={profile.experience}/>
      <Block title="Cursos" value={profile.courses}/>
      <Block title="Formação" value={profile.education}/>
      <Block title="Habilidades" value={profile.skills}/>
      <Block title="Idiomas" value={profile.languages}/>
      <Block title="Outras informações" value={profile.resume}/>
     </>}
    </article><p className="preview-caption">Conferir quebra de página na janela de impressão. A quantidade de texto pode exigir mais de uma folha.</p>
   </div>
  </div>
 </section>;
}
