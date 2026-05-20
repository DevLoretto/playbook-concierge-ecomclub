# Playbook Concierge — Ecom Club

Base de conhecimento interna do time Concierge. Site estático com busca global, navegação por categorias e roteamento por hash. Funciona em qualquer hospedagem estática (Netlify, GitHub Pages, Vercel, HostGator, etc.).

## 📁 Arquivos

- `index.html` — a aplicação inteira (HTML + CSS + JS)
- `data.js` — todos os artigos do FAQ (editar aqui para adicionar/alterar conteúdo)

## 🚀 Como hospedar (3 opções)

### Opção 1 — Netlify Drop (mais rápido, sem cadastro complexo)

1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `playbook/` inteira para a janela
3. Pronto. Netlify gera uma URL pública na hora (algo como `nome-aleatorio.netlify.app`)
4. Você pode personalizar o subdomínio depois nas configurações

### Opção 2 — GitHub Pages (recomendado para o time)

1. Crie um repositório no GitHub (pode ser privado)
2. Suba os 2 arquivos
3. Em **Settings → Pages**, escolha branch `main` / pasta `/` (root)
4. URL fica `seuusuario.github.io/nome-do-repo/`

### Opção 3 — Subdomínio HostGator/Nuvemshop interna

1. Crie uma pasta no servidor (ex: `playbook.bottrel.com.br`)
2. Faça upload de `index.html` e `data.js` via cPanel ou FTP
3. Apontar o subdomínio para a pasta no painel HostGator

## ✏️ Como editar conteúdo

Toda a base de conhecimento está em `data.js`. Para adicionar um artigo novo:

```js
{
  id: "ns-novo-artigo",          // identificador único (usado na URL)
  area: "nuvemshop",             // ID da área (ver lista em DATA.areas)
  title: "Título do artigo",
  summary: "Resumo curto, 1-2 linhas.",
  tags: ["nuvemshop", "exemplo"],
  body: `
    <p>Conteúdo em HTML.</p>
    <h3>Subtítulo</h3>
    <ol><li>Passo 1</li><li>Passo 2</li></ol>
    <div class="callout">Caixa de destaque.</div>
    <div class="callout warning">Caixa de alerta.</div>
    <div class="example">Exemplo de mensagem ou copy.</div>
  `
}
```

Adicione o objeto ao array `articles` no `data.js`. Salve, atualize a página — pronto.

## 🔍 Funcionalidades

- **Busca global** com destacar termo (atalho: `/` ou `Ctrl/Cmd + K`)
- **Navegação por hash** — cada artigo tem URL própria (botão "Copiar link" no fim de cada artigo)
- **Mobile-friendly** — sidebar vira menu lateral
- **Filtro por área** — sidebar à esquerda
- **Tags** — para classificação cruzada

## 🎨 Personalização visual

As cores estão centralizadas no início do `<style>` em `index.html`, na seção `:root`. Para mudar a paleta inteira, ajuste as variáveis CSS lá.

## 🔄 Rotina recomendada de atualização

Conforme combinado no treinamento: **toda quarta-feira** o time se reúne para revisar perguntas novas que apareceram na semana. Cada concierge traz 1-2 perguntas que ainda não estão no Playbook. Quem está de plantão na semana publica os novos artigos no `data.js`.
