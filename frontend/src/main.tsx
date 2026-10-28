import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const modules = [
  ['Meu perfil', 'Informações profissionais e documentos'],
  ['Currículos', 'Editor, versões e análise'],
  ['Vagas', 'Compatibilidade e adaptações'],
  ['LinkedIn', 'Diagnóstico e melhoria de perfil'],
];
function App() {
  const [status, setStatus] = React.useState('Verificando API local...');
  React.useEffect(() => {
    fetch('/api/health').then(r => { if (!r.ok) throw Error('Offline'); return r.json(); })
      .then(d => setStatus(d.status === 'ok' ? 'API local conectada' : 'API com erro'))
      .catch(() => setStatus('API não está conectada'));
  }, []);
  return <main className="container"><header><div className="logo">CH</div><div><h1>CareerHub</h1><p>Sua central profissional, privada por padrão.</p></div></header><section className="hero"><span>SPRINT 0 · FUNDAÇÃO</span><h2>Sua carreira, em um só lugar.</h2><p>Currículos, LinkedIn e vagas com análises transparentes. Estamos construindo a fundação do aplicativo.</p><strong>{status}</strong></section><section className="grid">{modules.map(([title, desc]) => <article key={title}><h3>{title}</h3><p>{desc}</p><small>Em desenvolvimento</small></article>)}</section><footer>Local-first · Sem banco de dados · IA opcional</footer></main>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
