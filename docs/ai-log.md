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
