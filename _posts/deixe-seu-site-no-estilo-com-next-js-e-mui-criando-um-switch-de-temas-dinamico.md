---
title: "Deixe Seu Site no Estilo com Next.js e MUI: Criando um Switch de Temas Dinâmico"
excerpt: "
Explore como implementar um switch de temas dinâmico usando Next.js e Material-UI neste tutorial prático. Aprenda a configurar temas claros e escuros, enriquecendo a interatividade e o design do seu site. Ideal para desenvolvedores que buscam aprimorar a experiência do usuário com funcionalidades modernas."
coverImage: '/assets/img/posts/material-theme.png'
tags: ['Frontend', 'ReactJs']
date: '2024-04-18T05:35:07.322Z'
ogImage:
  url: '/assets/img/posts/material-theme.png'
twitter_text: "
Explore como implementar um switch de temas dinâmico usando Next.js e Material-UI neste tutorial prático. Aprenda a configurar temas claros e escuros, enriquecendo a interatividade e o design do seu site. Ideal para desenvolvedores que buscam aprimorar a experiência do usuário com funcionalidades modernas."
published: true
---

[🇺🇸 Post in English click here](https://dev.to/douglasporto/styling-your-site-with-nextjs-and-mui-creating-a-dynamic-theme-switcher-20c0)

Salve, devs! ✌🏾

Como prometi, estou de volta postando com mais frequência. Hoje, vamos começar uma série sobre como usar o Material-UI com Next.js para criar um switch simples entre temas claros e escuros.

### Iniciando um Projeto com Next.js

Para começar, o processo é bem direto. É só seguir os passos da documentação do Next.js:

`npx create-next-app@latest`

Com o Next.js instalado, vamos limpar o diretório. Remova os arquivos globals.css e page.module.css que não vamos usar.

No seu `page.tsx`, o código deve ficar assim:

```js
export default function Home() {
  return <div>Hello world</div>
}
```

E não se esqueça de remover o `import import "./globals.css"` no arquivo `layout.tsx`.

### Instalando o Material-UI (MUI)

Para começar com o MUI, visite a seção [Getting started](https://mui.com/material-ui/getting-started/) da documentação. Você pode usar npm, yarn ou pnpm para instalação. Aqui, vou usar pnpm:

`pnpm add @mui/material @emotion/react @emotion/styled`

Depois de instalar, vamos testar adicionando um botão à página para verificar se tudo está certo:

```js
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <div>Hello world</div>
      <br />
      <Button>CLick here</Button>
    </>
  )
}
```

Se tudo estiver correto, você verá o botão no navegador assim:

![Browser](/assets/img/posts/material-theme-1.png)

Lembre-se de iniciar o servidor do [Next](https://nextjs.org/) com `pnpm dev`.


### Criando um tema

Vamos criar um arquivo `theme.ts` em `src/styles` e definir uma função para alternar as cores com base no tema escolhido (claro ou escuro):

```js
import { PaletteMode } from "@mui/material";

const primaryDark = '#6a1b9a';
const primaryLight = '#4a148c';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: primaryLight,
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: primaryDark,
          },
        })
  }
})
```

Por exemplo, se escolher o tema escuro, usaremos o roxo mais claro, pois o fundo já será escuro, e vice-versa.

### Implementando a Troca de Tema

No `layout.tsx`, adicione os seguintes imports:

```js
...
import { PaletteMode } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
...
```

Defina um estado para gerenciar o tema e armazene-o usando `useMemo`:


```js
const [mode, setMode] = useState<PaletteMode>('light')
const theme = useMemo(() => {
    return createTheme(getDesignTokens(mode))
}, [mode])
```
Adicione o provider do Material-UI para controlar as mudanças de tema:

```js
...
<html lang="en">
  <body className={inter.className}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </body>
</html>
```

Experimente alternar o estado entre claro e escuro:

![Browser](/assets/img/posts/material-theme-2.png)
![Browser](/assets/img/posts/material-theme-3.png)

*Nota: Se estiver usando o Next.js 14, inclua use client no início do arquivo layout.tsx.*

### Trocando de Tema com um Botão

Crie um botão para alternar o tema facilmente:

```js
<Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
  Toggle mode
</Button>
```

E pronto! Seu site está preparado para alternar entre dois modos.

![Browser](/assets/img/posts/material-theme-4.gif)


### Conclusão

Idealmente, deveríamos encapsular toda a lógica de tema em um provider para manter o layout limpo e organizado. Este é apenas um exemplo simples para começar seu próximo projeto com o Material-UI.

Tem mais dicas? Dúvidas ou quer compartilhar outra abordagem? Comente abaixo!

Obrigado pela atenção e até a próxima!

[REPOSITÓRIO](https://github.com/douglasporto/posts-blog/tree/main/next-mui)
