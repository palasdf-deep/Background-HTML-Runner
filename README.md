# HTML Playground 🚀

Ambiente de desenvolvimento e playground web em tempo real (HTML, CSS e JavaScript), executado 100% no navegador em um arquivo autossuficiente, sem necessidade de servidores ou dependências externas.

## 🌟 Recursos

- **Execução em Tempo Real:** Renderização imediata via `srcdoc` em sandbox isolado.
- **Dois Modos de Código:**
  - **Modo 1:** Documento HTML completo (`<!DOCTYPE html>`, `<style>`, `<body>`, `<script>`).
  - **Modo 2:** Abas separadas para HTML, CSS e JavaScript que se combinam automaticamente.
- **Console Integrado:** Captura de `console.log`, `info`, `warn`, `error`, além de exceções não tratadas (`window.onerror` e `window.onunhandledrejection`).
- **Simulador de Dispositivos:** Pré-visualização com alternância de tamanhos:
  - Desktop (100%)
  - Tablet (768px)
  - Mobile (375px)
- **Preview em Nova Aba:** Botão para abrir o resultado em uma aba independente via Blob URL.
- **Persistência Local:** Salvamento contínuo no `localStorage` e gestor de múltiplos projetos recentes.
- **Importação e Exportação:** Importe arquivos `.html`, `.htm` ou `.txt`, ou exporte seu projeto final pronto para uso.
- **Ferramentas de IDE:**
  - Busca interna no código (`Ctrl + F`)
  - Formatação básica de indentação
  - Numeração de linhas sincronizada
  - Alternância de quebra de linha (*Word Wrap*)
  - Tema Claro (*Light*) e Escuro (*Dark*)

## ⌨️ Atalhos de Teclado

- `Ctrl + Enter` (ou `Cmd + Enter`) → Executar código
- `Ctrl + S` (ou `Cmd + S`) → Salvar localmente
- `Ctrl + L` (ou `Cmd + L`) → Limpar código do editor
- `Ctrl + F` (ou `Cmd + F`) → Abrir busca no código

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

1. Crie um repositório no seu [GitHub](https://github.com/new) (exemplo: `html-playground`).
2. Suba o arquivo `index.html` (e este `README.md`) para a raiz do repositório.
3. No repositório, clique em **Settings** (Configurações).
4. No menu lateral esquerdo, clique em **Pages**.
5. Em **Build and deployment** > **Branch**, selecione a branch `main` (ou `master`) e a pasta `/ (root)`.
6. Clique em **Save**.
7. Pronto! Em 1 a 2 minutos o GitHub gerará o link público do seu site:
   `https://seu-usuario.github.io/html-playground/`
