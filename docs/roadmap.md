# Roadmap do CareerHub

| Marco | Entrega | Estado |
|---|---|---|
| S0 | Fundação frontend/backend, GitHub Pages, CI | Integrado; validação local pendente |
| S1a | Perfil editável e importação/exportação JSON no Pages | Validado pelo usuário |
| S1b | Salvamento opt-in no navegador e editor textual com prévia | Validado pelo usuário |
| S1c | Configurações: temas claro/escuro, transição e preferência local | Em revisão |
| S1d | Persistência local segura no backend, upload e backup | Planejado |
| S2 | Templates avançados, versões e exportação DOCX | Planejado |
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

## Critérios S1b

- Salvamento opcional no navegador e restauração após recarregar.
- Desativação apaga cópia armazenada, preservando o formulário aberto.
- Editor de currículo com prévia e impressão/PDF pelo navegador.
- Nenhum envio de dados a servidor; backup JSON disponível.
- Build, fluxo manual e layout responsivo verificados.

## Critérios de aceite S1c

- Aba Configurações navegável no Pages.
- Seleção clara/escura persistente após recarregar.
- Transição suave e leve, sem bloqueio do navegador, com redução de movimento respeitada.
- Navegação por teclado com foco visível, visual mobile e tipografia consistente.
- Prévia de currículo para impressão permanece branca em ambos os temas.
- README atualizado e verificações de build e responsividade.
