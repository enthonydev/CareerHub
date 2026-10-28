# CareerHub

> Plataforma local-first de currículos, LinkedIn e análise de vagas, criada como projeto de aprendizado **100% vibe coded, com desenvolvimento assistido por IA e aceite humano**.

**Estado:** Sprint 0, fundação inicial. Recursos de currículo, matching, LinkedIn e OpenAI estão planejados, não implementados.

## Visão do produto

- Perfil profissional mestre, currículos e versões.
- Nota 0–10 com rubrica transparente, matching de vagas e simulação antes/depois sem inventar competências.
- Editor e exportação DOCX/PDF, análise LinkedIn PT/EN e histórico de candidaturas.
- Motor de regras offline; OpenAI API opcional, com consentimento e controle de custos.

## Arquitetura

Frontend React + TypeScript + Vite; backend Python + FastAPI; dados pessoais em JSON/documentos locais, nunca versionados. Sem banco de dados, Docker, Ollama ou SSD obrigatório. Planejado para Windows com Core i3-7020U, 8 GB RAM e HDD.

## Executar (Sprint 0)

Requisitos: Python 3.11+, Node.js 20.19+ ou 22.12+ e npm.

Backend, em PowerShell:

```powershell
cd backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

Frontend, em outro terminal:

```powershell
cd frontend
npm install
npm run dev
```

Acesse http://localhost:5173. Teste do backend: `cd backend; python -m pytest`. Os comandos ainda carecem de validação no Windows do usuário.

## Documentação viva

- [Arquitetura](docs/architecture.md)
- [Processo de desenvolvimento](docs/process.md)
- [Roadmap](docs/roadmap.md)
- [Diário de IA](docs/ai-log.md)

## Vibe coding com responsabilidade

Decisões, critérios de aceite, revisão e autorização de merge pertencem ao responsável humano. IA auxilia no planejamento, código, testes e documentação. O processo inclui branches, pull requests, testes verificáveis e registro de limitações. Não afirmar testes não executados.

**Privacidade:** nunca publicar currículos, dados pessoais, tokens, chaves ou arquivos locais no GitHub. API externa somente mediante consentimento; a assinatura ChatGPT não cobre uso da OpenAI API.

## Licença

A definir antes de distribuição pública de versões executáveis.

## Prévia web (GitHub Pages)

Após ativar **Settings > Pages > Source: GitHub Actions** e integrar o workflow de deploy, a prévia estática estará em https://enthonydev.github.io/CareerHub/. Ela mostra a interface, mas não executa o backend Python. [Guia de publicação](docs/deploy.md).
