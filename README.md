# CareerHub

![Símbolo oficial do CareerHub](frontend/public/brand/careerhub-mark.svg)

**Um espaço para organizar sua trajetória e preparar o próximo passo.**

[Ver prévia online](https://enthonydev.github.io/CareerHub/) · [Roadmap](docs/roadmap.md) · [Arquitetura](docs/architecture.md) · [Como contribuir](CONTRIBUTING.md)

## Uma identidade própria

O CareerHub agora tem símbolo vetorial original, cores, tipografia e um conjunto de padrões para que a interface mantenha a mesma qualidade em todas as telas. Também há um atalho para alternar entre claro e escuro sem entrar em Configurações. [Conheça a identidade](docs/brand.md).

## O projeto

Comecei o CareerHub porque queria avaliar currículos, compará-los com vagas e melhorar meu LinkedIn sem depender de uma assinatura para cada etapa.

É também meu **primeiro projeto desenvolvido 100% por vibe coding**: eu defino o produto, reviso entregas e tomo as decisões; agentes de IA participam da implementação, dos testes e da documentação. O objetivo não é esconder esse processo, mas aprender a conduzi-lo com boas práticas de engenharia.

## Nesta versão

O CareerHub ganhou uma **home navegável**, com atalhos reais para Perfil, Currículo e Configurações. As configurações agora apresentam informações de tema, privacidade, importação e exportação sem duplicar o seletor grande: o botão pequeno no topo é o único controle de aparência.

A tipografia é **Plus Jakarta Sans**, disponível sob SIL Open Font License, instalada no pacote frontend e servida pelo próprio site. Assim a fonte não depende de chamadas à Google Fonts durante o uso.

## Experimente

A [prévia no GitHub Pages](https://enthonydev.github.io/CareerHub/) permite preencher seu perfil, importar/exportar JSON, usar um editor básico de currículo com prévia e impressão em PDF e escolher entre **modo claro e escuro** na aba Configurações.

**Privacidade:** você pode ativar o salvamento automático neste navegador. É opcional e não deve ser usado em computadores compartilhados. A limpeza dos dados do navegador pode apagar o perfil, portanto mantenha um backup JSON. Nenhum dado desses recursos é enviado ao GitHub ou à OpenAI.

O editor atual é textual e básico. Importação de PDF/DOCX, templates avançados, notas ATS, vagas, análise LinkedIn e OpenAI **ainda estão em desenvolvimento**.

## O que estou construindo

| Funcionalidade | Situação |
|---|---|
| Interface web e publicação automática | Disponível |
| Perfil e JSON portátil no navegador | Disponível |
| Salvamento automático opcional e editor textual com prévia/PDF | Disponível (básico) |
| Perfil persistente no computador | Próxima etapa |
| Configurações e tema claro/escuro | Disponível |
| Templates avançados e exportação DOCX | Planejado |
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

O tema escolhido fica salvo no navegador, mesmo sem ativar o salvamento do perfil. A interface usa uma paleta própria para claro e escuro, transições leves, navegação responsiva e respeita a preferência de movimento reduzido do sistema. O objetivo é manter boa experiência até em máquinas antigas.

## Como funciona

- **Frontend:** React + TypeScript + Vite.
- **Backend local:** Python + FastAPI.
- **Dados futuros:** JSON e documentos no computador, nunca no repositório.
- **IA futura:** OpenAI API opcional, mediante consentimento explícito e controle de gastos. O ChatGPT não inclui créditos de API.
- **Offline:** edição e regras devem continuar disponíveis sem IA.

## Publicação no GitHub Pages

A prévia é publicada por um **único workflow**: [Prévia do CareerHub no GitHub Pages](.github/workflows/pages.yml). Ele compila o React e publica somente `frontend/dist`, com o caminho `/CareerHub/`.

Se aparecer 404, confira a [aba Actions](https://github.com/enthonydev/CareerHub/actions/workflows/pages.yml) e o [guia de deploy](docs/deploy.md). Não use o template genérico “Deploy static content to Pages” para publicar a raiz do repositório: ela não contém o build do frontend.

## Qualidade de interface

Não queremos um painel genérico com gradientes e cartões repetidos. O processo de UI agora exige brief da tarefa, direção visual, revisão de anti-padrões, estados de interação e inspeção visual real antes de declarar a tela pronta. Veja o [processo de revisão de design](docs/design-review-process.md).

## Diário de desenvolvimento

As decisões e os aprendizados ficam públicos na [documentação de processo](docs/process.md) e no [diário de IA](docs/ai-log.md). Cada PR deve incluir uma atualização do README quando houver mudança perceptível no produto, além de testes, limitações e critérios de aceite.

**Status atual:** prévia com perfil e editor básico; validação do backend no Windows ainda pendente.

---
Feito com curiosidade, código gerado com IA e revisão contínua.

### Design e experiência

O frontend é parte do produto, não só uma vitrine: legibilidade, contraste, estados de foco, feedback de ações, navegação em telas pequenas, impressão limpa e movimentos discretos entram nos critérios de aceite. As decisões visuais estão registradas em [Design System](docs/design-system.md).

## Padrão de design

O processo de frontend agora segue um [método de direção e crítica visual](docs/frontend-design-method.md), adaptado de princípios da skill oficial Frontend Design da Anthropic. Novas telas precisam justificar suas escolhas e passar por revisão visual, evitando o estilo genérico de dashboards gerados por IA.
