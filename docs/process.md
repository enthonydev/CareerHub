# Processo profissional de desenvolvimento

Kanban com sprints curtas, escopo proporcional à complexidade. Backlog: épico → história → tarefa → subtarefa. Fluxo: Refinamento → Pronto → Desenvolvimento → Revisão → Teste → Concluído.

## Passos obrigatórios

1. Ler arquitetura, contexto e demanda.
2. Definir critérios de aceite verificáveis, riscos e dependências.
3. Criar branch feat/, fix/, docs/ ou test/; nunca escrever diretamente em main.
4. Entregar incremento pequeno com validação de erros, testes e documentação.
5. Revisar o diff e as implicações de segurança/performance.
6. Abrir PR com evidências reais, limitações, checklist e pedido de aceite humano.
7. Só avançar de sprint após revisão e aprovação.

## Definition of Ready

Objetivo, contexto, dados fictícios, aceite, dependências e riscos claros.

## Definition of Done

Código compreensível, testes executados, documentação atualizada no mesmo PR, privacidade validada, erros tratados, evidência real, review e aceite humano. Não afirmar que stubs são funcionalidades prontas.

## Governança de IA

IA apoia especificação, implementação, testes e documentação, mas não substitui revisão humana. Registrar usos significativos em docs/ai-log.md; não expor credenciais nem dados reais nos prompts. Commits em português.
