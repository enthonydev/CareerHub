# CareerHub Design System v1

> Direção: um workspace profissional, claro, rápido e discreto. Visual bem resolvido sem depender de animações pesadas, bibliotecas de UI extensas ou downloads de fontes externos.

## Identidade

- Tipografia: Inter quando disponível, com Segoe UI Variable, Segoe UI e system-ui como fallback. Não bloquear renderização aguardando fontes remotas.
- Claro: fundo neutro azulado, superfícies brancas, azul-violeta para ações e contraste forte em texto.
- Escuro: fundo azul-grafite, superfícies diferenciadas, destaques frios sem pretos absolutos em excesso.
- Componentes: raios consistentes, bordas delicadas, sombras contidas, ênfase em estrutura e hierarquia.
- Movimento: transições de 200–400ms com curvas suaves; a interface deve continuar utilizável durante a animação.

## Interações

- Indicar ação principal, estados ativos e foco visível.
- Não usar animação infinita ou efeitos custosos de blur em grandes áreas.
- Respeitar `prefers-reduced-motion`.
- Persistir preferência de tema no navegador, separadamente dos dados pessoais.
- Preservar contraste, legibilidade e o fundo branco do currículo exportado/imprimido.

## Layout

- Desktop: barra lateral fixa, área central confortável, formulários em colunas.
- Celular: navegação horizontal rolável, ações acessíveis e formulários em uma coluna.
- Impedir overflow horizontal em 320px; verificar em 375px, tablet e desktop.

## Critérios de revisão visual por PR

1. Claro e escuro sem conteúdo ilegível.
2. Desktop e mobile; componentes não podem se sobrepor.
3. Navegação com teclado e foco identificável.
4. Ações com feedback coerente e sem estados falsamente completos.
5. Sem assets pesados ou chamadas de rede não justificadas.
6. Capturas e testes visuais reais quando disponíveis. Nunca alegar screenshots não realizados.

## Evolução

Novos componentes devem reutilizar tokens e padrões existentes. Alterações estruturais na identidade visual devem atualizar este documento e o README no mesmo PR.

## Identidade da marca

A especificação de marca, cores e aplicações está em [brand.md](brand.md). O símbolo oficial é um SVG pequeno, independente de assets externos. Alterações futuras devem revisar ambos os documentos.
