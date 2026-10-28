# Roadmap do CareerHub

| Marco | Entrega | Estado |
|---|---|---|
| S0 | Fundação frontend/backend, GitHub Pages, CI | Integrado; validação local pendente |
| S1a | Perfil editável e importação/exportação JSON no Pages | Validado pelo usuário |
| S1b | Salvamento opt-in no navegador e editor textual com prévia | Validado pelo usuário |
| S1c | Configurações: temas claro/escuro, transição e preferência local | Em revisão |
| S1d | Persistência local segura no backend, upload e backup | Planejado |
| S2a | Estúdio documental, estilos Essencial/Contemporâneo e exportação pelo navegador | Em revisão |
| S2b | Versões, templates avançados e exportação DOCX | Planejado |
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

## Evolução de experiência: Dashboard e Configurações

- [x] Home com ações reais ligadas a Perfil, Currículo, Configurações e Roadmap.
- [x] Substituição do seletor grande de tema por indicador informativo em Configurações.
- [x] Controles de salvamento e importação/exportação nas Configurações.
- [x] Plus Jakarta Sans empacotada localmente; identidade refinada e adaptável.
- [ ] Validação visual e de navegação em dispositivos reais após deploy.

## Critérios de aceite S2a

- Editar nome, título, objetivo, competências e texto do currículo em um único estúdio.
- Prévia atualizar em tempo real e preservar o perfil importado.
- Alternar entre dois estilos de apresentação distintos.
- Imprimir em A4 sem controles da interface.
- Checar versão mobile e impressão, sem alegar revisão visual não realizada.

## Refatoração do estúdio

- [x] Extrair a tela do currículo para componente independente.
- [x] Isolar os estilos específicos do currículo.
- [ ] Validar compilação e verificar preservação do editor, alternância de estilos e PDF no navegador.
- [ ] Reduzir gradualmente o CSS legado restante, sem mudanças visuais não testadas.

## Modelos de referência

- [x] Estilos Linha Azul (TI) e Recepção Clássico implementados a partir de referências reais.
- [ ] Comparação visual de PDF exportado com os PDFs de referência.
- [ ] Campos estruturados de contato, cargos, datas, experiência, formação, cursos e idiomas.
- [ ] Ajuste automático da distribuição vertical sem estourar páginas ou deixar lacuna inferior excessiva.

## Correção de rumo: fidelidade dos templates

- [x] Remover opções estilizadas incorretamente como se fossem os PDFs aprovados.
- [ ] Reproduzir fielmente as páginas originais, sem dados pessoais nas referências públicas.
- [ ] Criar campos de conteúdo mantendo posições, tamanhos, linhas, espaçamento e estrutura editorial.
- [ ] Validar lado a lado com os originais e PDF impresso antes de afirmar conclusão.

## Reprodução dos dois modelos

- [x] Estrutura de campos editáveis e sem dados pessoais pré-preenchidos.
- [x] Diagramação de uma coluna, títulos, linhas divisórias e ordem de seções conforme referências.
- [x] Compatibilidade com JSON v1; novos campos opcionais em importações antigas.
- [ ] Confrontar PDF gerado e original lado a lado em A4 e ajustar métricas finas.
- [ ] Teste visual real no navegador; impressão multipágina para conteúdo extenso.
