# CareerHub

**Seu currículo, LinkedIn e próximas oportunidades. Em um único lugar, no seu controle.**

[Ver prévia online](https://enthonydev.github.io/CareerHub/) · [Roadmap](docs/roadmap.md) · [Arquitetura](docs/architecture.md) · [Como contribuir](CONTRIBUTING.md)

## O projeto

Comecei o CareerHub porque queria avaliar currículos, compará-los com vagas e melhorar meu LinkedIn sem depender de uma assinatura para cada etapa.

É também meu **primeiro projeto desenvolvido 100% por vibe coding**: eu defino o produto, reviso entregas e tomo as decisões; agentes de IA participam da implementação, dos testes e da documentação. O objetivo não é esconder esse processo, mas aprender a conduzi-lo com boas práticas de engenharia.

## Experimente

A [prévia no GitHub Pages](https://enthonydev.github.io/CareerHub/) já permite preencher um perfil profissional e **importar/exportar um JSON** com suas informações.

**Atenção:** a prévia não salva automaticamente seus dados. Baixe o JSON antes de atualizar ou fechar a aba. Não há upload para servidores; os dados ficam em memória enquanto a página está aberta. Trate o arquivo exportado como documento pessoal.

O editor de currículo completo, importação de PDF/DOCX, notas ATS, vagas, análise LinkedIn e OpenAI **ainda estão em desenvolvimento**.

## O que estou construindo

| Funcionalidade | Situação |
|---|---|
| Interface web e publicação automática | Disponível |
| Formulário profissional e JSON portátil no navegador | Disponível |
| Perfil persistente no computador | Próxima etapa |
| Editor e exportação de currículo | Planejado |
| Avaliação 0–10 e compatibilidade com vagas | Planejado |
| Adaptação de currículo, LinkedIn e OpenAI opcional | Planejado |

Compatibilidade significa **estimativa explicável de aderência documental**, nunca promessa de contratação. Nenhuma experiência profissional será inventada para aumentar notas.

## Rodando localmente

Requer Python 3.11+, Node.js 20.19+ (ou 22.12+) e npm.

```powershell
git clone https://github.com/enthonydev/CareerHub.git
cd CareerHub
cd backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --host 127.0.0.1 --port 8000
```

Em outro terminal:

```powershell
cd CareerHub/frontend
npm install
npm run dev
```

Acesse http://localhost:5173. Para testar: `python -m pytest` em `backend` e `npm run build` em `frontend`.

> O notebook-alvo tem Core i3-7020U, 8 GB e HDD. Por isso, priorizo uma experiência leve e sem Docker, banco de dados ou IA pesada local.

## Como funciona

- **Frontend:** React + TypeScript + Vite.
- **Backend local:** Python + FastAPI.
- **Dados futuros:** JSON e documentos no computador, nunca no repositório.
- **IA futura:** OpenAI API opcional, mediante consentimento explícito e controle de gastos. O ChatGPT não inclui créditos de API.
- **Offline:** edição e regras devem continuar disponíveis sem IA.

## Diário de desenvolvimento

As decisões e os aprendizados ficam públicos na [documentação de processo](docs/process.md) e no [diário de IA](docs/ai-log.md). Cada PR deve incluir uma atualização do README quando houver mudança perceptível no produto, além de testes, limitações e critérios de aceite.

**Status atual:** prévia funcional no navegador; validação do backend no Windows ainda pendente.

---
Feito com curiosidade, código gerado com IA e revisão contínua.
