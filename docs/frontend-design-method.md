# Método de design de frontend do CareerHub

## Referência e propósito

Inspirado nos princípios da skill oficial **Frontend Design**, da Anthropic: https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md. Este documento é uma adaptação de processo própria do CareerHub, **não** uma cópia ou instalação da skill.

**Problema identificado:** interfaces anteriores foram construídas com padrões genéricos de SaaS: grades de cards iguais, títulos com rótulos em caixa alta, gradientes decorativos, excesso de bordas e animações repetidas. O fato de compilar não significa que o design foi aprovado.

## Definição do produto antes do desenho

CareerHub é uma ferramenta pessoal para organizar trajetória profissional, construir currículos, comparar vagas e revisar LinkedIn. O usuário precisa trabalhar com documentos, evidências e decisões reais — não consumir um painel de métricas fictícias.

**Princípio central:** a tela precisa parecer um *estúdio de trabalho*, não um painel de administração.

## Processo obrigatório para cada nova tela

1. **Contexto:** registrar usuário, objetivo concreto e dados reais disponíveis.
2. **Direção:** propor layout, tipografia, 4–6 tokens de cor, densidade, navegação e uma única característica visual memorável.
3. **Crítica anti-template:** identificar e eliminar padrões que poderiam aparecer em qualquer dashboard. Justificar cards, gradientes, números grandes, rótulos e efeitos antes de usar.
4. **Wireframe:** desenhar estrutura simples, com prioridade informacional e hierarquia de ações.
5. **Implementação:** componentes reutilizáveis, CSS organizado, sem empilhar dezenas de regras contraditórias ou `!important`.
6. **Verificação:** build, testes, acessibilidade, responsividade, claro/escuro e performance.
7. **Crítica visual real:** inspecionar capturas desktop e mobile quando o ambiente permitir. Corrigir layout antes do merge; sem screenshots, sinalizar explicitamente pendência de revisão visual.
8. **Rastreabilidade:** PR atualiza README, Design System e registro de decisões impactadas.

## Antipadrões específicos a evitar

- Grade de três ou quatro cartões idênticos como resposta padrão a qualquer informação.
- *Eyebrow labels* em caixa alta sobre cada título.
- Gradientes e bolhas decorativas sem relação com currículo, trabalho ou informação.
- Efeito hover com translateY indiscriminadamente em todos os elementos.
- Grandes números inventados, porcentagens sem método ou ilustrações só para preencher vazios.
- Cópia promocional genérica: “Sua jornada começa aqui”, “Eleve seu potencial”, “Tudo em um só lugar” sem função objetiva.
- Ícones/emojis diferentes para a mesma ação em telas distintas.
- Repetição de cores, raios e sombras sem um sistema de hierarquia.
- Arquivo CSS acumulando overrides e `!important` em vez de componentes e tokens claros.

## Direção prioritária do redesign

- Editor de currículo como principal ferramenta, com espaço de edição e papel em destaque.
- Navegação discreta e informação contextual; home baseada em ações pendentes reais.
- Uso da tipografia como identidade, não como decoração.
- Microinterações orientadas a ações: confirmação de salvamento, abertura de menus, comparação antes/depois e transição entre modos.
- Uma única assinatura visual reconhecível por tela; demais elementos contidos.
- Light/dark mode consistente e impressão sempre legível.
- Leve para Intel i3 de 7ª geração, 8 GB RAM e HDD.

## Critérios mínimos de aceite de UX

- Clareza: ação principal reconhecível em até alguns segundos.
- Navegação por teclado e foco visível; labels associados.
- Telas pequenas sem transbordamento, alvos de toque confortáveis.
- Nenhum conteúdo importante escondido por animação; respeitar `prefers-reduced-motion`.
- Textos de interface humanos, específicos e objetivos.
- Teste de fluxos reais: importar, editar, salvar, restaurar, exportar.
- Regressões de design, contraste e conteúdo verificadas nos dois temas.
- Registro honesto de testes executados versus pendentes.

## Como aplicar ao trabalho assistido por IA

Antes de gerar código, o agente deve apresentar um **design brief de uma página**, incluindo justificativa de composição. Depois da implementação, executar uma **autocrítica com cinco perguntas**:

1. Esta tela poderia ser trocada pelo dashboard de outro SaaS sem parecer fora de lugar?
2. Cada borda, card, cor e animação ajuda o usuário a executar alguma ação?
3. O texto explica o que acontece ou apenas enfeita?
4. O design suporta os dados reais e também ausência de dados?
5. O que podemos remover para que a interface fique mais clara?

Se a resposta à primeira for sim, ou se houver elementos injustificados, **revisar antes de abrir o PR**.

## Fonte

Anthropic — Frontend Design skill: https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md
