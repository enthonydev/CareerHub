# Roadmap do CareerHub

| Marco | Entrega | Estado |
|---|---|---|
| S0 | Fundação frontend/backend, GitHub Pages, CI | Integrado; validação local pendente |
| S1a | Perfil editável em memória e importação/exportação JSON no Pages | Em implementação |
| S1b | Persistência local segura no backend, upload e backup | Planejado |
| S2 | Editor, templates e histórico de currículos | Planejado |
| S3 | Avaliação de currículo com rubrica 0–10 | Planejado |
| S4 | Vagas, requisitos e compatibilidade explicável | Planejado |
| S5 | Adaptação orientada à vaga e aprovação de alterações | Planejado |
| S6 | LinkedIn Strategist, português e inglês | Planejado |
| S7 | OpenAI API opcional, consentimento, custo e fallback | Planejado |
| S8 | Segurança, testes completos, instalação simplificada | Planejado |

## Critérios de aceite S1a

- Preencher dados profissionais e textos de currículo/LinkedIn no navegador.
- Exportar JSON válido e importar arquivo gerado pelo próprio CareerHub.
- Não enviar textos a servidor nem armazená-los automaticamente.
- Rejeitar JSON inválido e arquivos grandes.
- Ser utilizável em telas pequenas.
- Atualizar README no mesmo PR e manter histórico de desenvolvimento.

**Atenção:** o Pages é apenas uma prévia estática. Persistência e processamento seguro de PDF/DOCX serão feitos localmente na S1b.
