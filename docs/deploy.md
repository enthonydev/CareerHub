# Prévia online e execução local

## O que é publicado?

O workflow `.github/workflows/pages.yml` publica **somente o frontend estático** em GitHub Pages após merge na branch main. Ele não hospeda FastAPI, arquivos pessoais ou integração OpenAI.

URL esperada após ativar Pages: https://enthonydev.github.io/CareerHub/

## Ativar no GitHub

1. Abra **Settings > Pages** no repositório.
2. Em **Build and deployment > Source**, selecione **GitHub Actions**.
3. Faça merge do PR de deploy na main e abra a aba **Actions**; procure **Prévia do CareerHub no GitHub Pages**.
4. Depois da execução bem-sucedida, abra o endereço listado no job ou em Settings > Pages.

Se Actions ou Pages estiverem desabilitados por configuração do repositório/conta, habilite em Settings > Actions e Settings > Pages. Confira permissões de Actions para deploy e restrições de ambiente.

## Limite da prévia

A mensagem de API indisponível é esperada em Pages. A aplicação completa requer o backend local. Nunca publicar documentos privados nem chave de API no Pages.

## Execução local

Siga os comandos do README para iniciar FastAPI e Vite separadamente no Windows.

## Incidente: deploy concorrente e 404 (2026-10-28)

Dois workflows estavam publicando no mesmo ambiente `github-pages`: o específico do React compilava `frontend/dist`, enquanto o template estático fazia upload de `.` (raiz do repositório). Uma publicação do template poderia substituir o frontend compilado por arquivos sem `index.html` na raiz e causar 404. O template foi removido; o workflow correto passou a verificar a existência de `dist/index.html` e `dist/assets` antes de publicar. O README foi atualizado no mesmo PR. Confirmar deploy e URL após merge.
