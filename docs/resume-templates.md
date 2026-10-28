# Modelos de currículo — referências aprovadas

## Origem

Referências privadas da conversa Preparação profissional e entrevistas:
- `Enthony_Guilherme_Silva_CV_TI.pdf` (28/09/2026).
- `Enthony_Recepcionista_Bilingue_Modelo_Original.pdf` (26/10/2026).

Esses arquivos contêm informações pessoais. **Não copiá-los para o repositório, fixtures, exemplos ou assets públicos.** A implementação utiliza apenas os padrões visuais observáveis e é preenchida com dados do usuário.

## 1. Linha Azul · TI

- A4 vertical e uma coluna, fundo branco, visual compacto.
- Nome centralizado em cinza-escuro, contatos centralizados abaixo.
- Seções em caixa alta azul-acinzentado, com linha fina azul-clara sob o título.
- Cargos em negrito e datas alinhadas à direita nas experiências.
- Fonte sem serifa, texto preto/cinza, listas discretas.
- Preencher bem a folha, sem um vazio desproporcional no rodapé, sem superlotar.

## 2. Recepção · Clássico

- A4 vertical, fundo branco, uma coluna.
- Nome grande, condensado, preto, em maiúsculas; cargo e contatos centralizados.
- Traço preto grosso separando cabeçalho do corpo.
- Títulos de seções em maiúsculas com linhas horizontais pretas marcadas.
- Experiências com função e empresa em negrito e datas à direita; listas pontuadas.
- Ordem de referência: resumo, experiência, cursos, formação, habilidades e idiomas.

## Situação implementada

O seletor do editor oferece essas duas apresentações, com tipografia, bordas, hierarquia e ordem de campos possíveis no schema atual. A renderização permanece texto selecionável e exportável por impressão A4.

## Limitações conhecidas

O modelo de dados atual só tem nome, headline, objetivo, competências e campo livre de histórico; não contém contatos estruturados, experiência por item, datas, cursos, formação e idiomas separados. Por isso o template **ainda não é uma reprodução fiel**. Não fabricar contatos, datas ou seções. O próximo desenvolvimento deve criar um schema estruturado e prévia paginada, medir diferenças com documentos de teste fictícios e preservar a portabilidade do JSON v1.
