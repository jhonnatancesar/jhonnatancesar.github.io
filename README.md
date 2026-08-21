# AIShoppingAgent — site público

Este repositório contém **exclusivamente** o site institucional/público do
AIShoppingAgent, publicado via GitHub Pages a partir de `docs/` (MkDocs +
Material for MkDocs).

## O que este repositório é

- O código-fonte do site (páginas em Markdown, tema, workflow de publicação).

## O que este repositório **não** é

- **Não é o código-fonte do AIShoppingAgent.** O backend, o bot e toda a
  lógica da aplicação vivem em outro lugar.
- **Não contém banco de dados, infraestrutura, containers, migrations ou
  qualquer procedimento de operação.**
- O projeto principal do AIShoppingAgent é **privado**. Este repositório
  existe apenas para publicar o site público — ele não depende do projeto
  principal para funcionar, e o projeto principal não depende dele.

## Desenvolvimento local

```bash
pip install "mkdocs-material>=9" "mkdocs>=1.6"
mkdocs serve
```

## Publicação

Todo push em `main` publica automaticamente em GitHub Pages via
`.github/workflows/pages.yml`.
