# Processo de direção de arte e revisão UX

Esta metodologia é uma adaptação própria para o CareerHub, informada pela [Frontend Design Skill da Anthropic](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md). Não é uma cópia nem uma instalação da skill do Claude.

## Princípio

A interface deve expressar **trabalho com documentos e decisões de carreira**, não parecer um painel SaaS genérico. Informação útil primeiro; estilo para reforçar função. O usuário já rejeitou repetidamente layouts com cards idênticos, gradientes gratuitos e slogans vazios.

## Antes de implementar

1. Identificar a pessoa que usará a tela, sua tarefa principal, seus dados e suas decisões reais.
2. Propor pelo menos dois conceitos de layout distintos (wireframes curtos) e escolher conscientemente um.
3. Especificar 4–6 cores com papéis claros, escalas de tipo, espaçamento e comportamento responsivo.
4. Definir **um único elemento visual marcante**, justificado pelo domínio da tela. Remover ornamentos sem propósito.
5. Checar contra os anti-padrões abaixo; replanejar se parecer um template reaproveitado.

## Anti-padrões que não devem voltar

- Hero motivacional genérico com gradiente roxo ou azul só para preencher espaço.
- Grade de cards idênticos com mesma borda, sombra, raio e ícone para qualquer assunto.
- Eyebrows em caixa alta em todas as seções, números de etapas inventados, setas decorativas nos textos.
- Barras de progresso e scores sem significado real.
- Hover de elevação indiscriminado; animações sequenciais em tudo.
- Texto que anuncia IA, profissionalismo ou produtividade sem explicar o que o usuário consegue fazer.
- Acumular CSS de override sem refatoração: novas telas devem usar tokens e componentes com responsabilidades bem definidas.

## Critérios para o CareerHub

- Currículo: documento é o protagonista; editor e prévia ocupam espaço de trabalho real.
- Vagas: comparação de requisitos, evidências e decisões; não usar porcentagem como decoração.
- LinkedIn: edição por seção, comparação de versões e texto legível.
- Configurações: controles compactos, significado e consequência explícitos.
- Home: mostrar trabalho existente e próximos passos verdadeiros, não métricas inventadas.
- Conteúdo e UX em português natural, com verbos precisos e sem slogans artificiais.
- Foco visível, contraste adequado, layout mobile, estados vazios e mensagens de erro úteis.
- Movimento apenas para indicar transição, seleção, conclusão ou expansão; respeitar movimento reduzido.
- Performance compatível com Core i3 7ª geração, 8 GB RAM e HDD.

## Revisão obrigatória por PR visual

- [ ] Brief específico e conceito visual registrado.
- [ ] Wireframe ou descrição de hierarquia da tela.
- [ ] Análise de anti-padrões aplicada antes do código.
- [ ] Componentes e tokens consistentes, sem CSS em cascata de remendos.
- [ ] Build e testes passando.
- [ ] Teste manual de interações em claro e escuro.
- [ ] Conferência em mobile e desktop; screenshot real quando disponível.
- [ ] Estados de vazio, erro, carregamento, foco e movimento reduzido.
- [ ] README atualizado com o que realmente foi entregue.
- [ ] Registro honesto das limitações e aprovação de design.

Não declarar avaliação visual como concluída sem renderização e inspeção reais.

## Regra de decisão

Se a mudança só adiciona gradientes, cards, sombras, ícones e movimento sem melhorar uma tarefa real, **não entregar**. Voltar ao problema do usuário e redesenhar.
