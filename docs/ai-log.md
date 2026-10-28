# Diário de vibe coding

## 2026-10-28 — Sprint 0

O produto foi especificado por direção humana. Um assistente de IA produziu scaffolding inicial, testes e documentação. A revisão e a aprovação do PR permanecem humanas.

**Evidências:** commits/PR registram o que foi criado. A execução em notebook Windows ainda precisa de validação; não afirmar que foi testado lá.

**Próximos registros:** defeitos encontrados, sugestões rejeitadas, decisões técnicas, testes com comando e resultado, aprendizados sobre IA assistida, engenharia de software e revisão de código.

## 2026-10-28 — S1a: perfil portátil no navegador

**Motivo:** permitir uso imediato do Pages sem depender do backend local nem solicitar instalação no notebook. Direcionamento humano: priorizar UX e README natural, atualizado a cada PR.

**Implementação gerada com IA:** interface responsiva, formulário, importação e exportação de JSON e validação básica. **Limite:** dados só existem em memória até a exportação; não há persistência, criptografia, IA ou edição de PDF/DOCX nesta fase.

**Revisão:** checar build no Actions e fluxo de importação/exportação no navegador após deploy. Não atribuir testes não executados. A IA pode apoiar revisão e merge conforme autorização expressa do responsável.

## 2026-10-28 — S1b: editor e salvamento opt-in

Implementação assistida por IA de salvamento opcional via localStorage e editor textual com prévia/print. Mantido o README atualizado no mesmo PR. Ainda requer validação visual e de persistência no navegador; localStorage não equivale a banco ou armazenamento seguro de longo prazo. O uso de computador compartilhado não é recomendado.

## 2026-10-28 — S1c: configurações e temas

Implementação com assistência de IA: aba Configurações, tema claro/escuro persistente via armazenamento local independente dos dados do perfil, transição CSS e opção `prefers-reduced-motion`. O currículo impresso mantém fundo branco. Critérios visuais dependem de conferência no navegador; build automatizado será verificado no PR.

**Refinamento visual solicitado:** elevar o frontend a padrão de produto profissional, com tipografia consistente, espaçamentos, tratamento de foco, responsividade, microinterações e movimento reduzido. Adicionado design system versionado, sem frameworks pesados de animação.

## 2026-10-28 — Correção do 404 no Pages

Diagnóstico por inspeção dos workflows na `main`: `pages.yml` publica a compilação React, mas `static.yml` também publicava, enviando a raiz do repositório. A IA identificou a colisão, removeu o workflow redundante e adicionou verificação do artefato antes do deploy. A publicação ainda exige verificação real após o merge. README e guia de deploy atualizados.

## 2026-10-28 — Identidade visual própria

O direcionamento humano pediu um produto que não tivesse aparência de UI genérica gerada por IA. Foi criado símbolo SVG original, um guia de marca, tipografia e nova linguagem editorial, com ajustes na navegação, alternância rápida de tema e hierarquia das telas. README atualizado no mesmo PR. A aprovação visual real depende de inspeção no browser após a publicação.

## 2026-10-28 — UX: home e Configurações

A pedido do responsável, o frontend deixou de usar o painel vazio e introduziu uma home com ações reais. Foi removido o grande seletor redundante de tema; Configurações concentra salvamento e portabilidade. Fonte Plus Jakarta Sans pesquisada, com licença OFL e instalada localmente. A IA gerou código e documentação, o CI verifica build e testes, e a revisão visual real ainda deve ser feita no navegador.
