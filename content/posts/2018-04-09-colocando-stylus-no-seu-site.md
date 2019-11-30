---
title: "Colocando Stylus no seu Site"
description: Você já ouviu falar em Pré-Processador CSS? Conheça o Stylus e seja mais produtivo.
image: "/assets/img/posts/bg-colocando-stylus.png"
category: "Front-End"
date: 2018-04-09 00:00:01
tags:
  - CSS
  - Site
  - Blog
  - Pré-Processador
twitter_text: Você já ouviu falar em Pré-Processador CSS? Conheça o Stylus e seja mais produtivo.
---

Se você trabalha com o Front-End, deve saber o quanto o CSS é essencial.

Por mais que exista frameworks CSS como [Bootstrap](http://getbootstrap.com/), [Materialize](http://materializecss.com/), [Material Design](https://material.io/guidelines/) e etc, sempre tem aquela parte em que o designer precisa de uma alteração, e ter que alterar todo um `.css` apenas por conta de uma cor que não foi autorizada pelo time de designers, as vezes acaba sendo um parto para nós desenvolvedores, não é mesmo?

É por conta disse que surgiu algo chamado **Pré-Processadores CSS**

### O que são Pré-Processadores CSS?

Segundo um artigo do [Diego Eis](https://tableless.com.br/authors/diego-eis/) no [Tablelees](https://tableless.com.br/estruturacao-de-client-side-preprocessadores-framewoks-e-bibliotecas-parte-1/?utm_source=tablelessRelatedLink):

> Pré-Processadores são ferramentas onde você escreve CSS de uma determinada forma, modificando sua sintaxe, fazendo com que na hora de sua utilização o código CSS precise ser préprocessado para que o código escrito seja transformado em código CSS puro e assim então os browsers consigam entender.

E é exatamente isso que vamos aprender utilizando o **[Stylus](http://stylus-lang.com/)**

### Instalação

Não tem choro, para instalar será necessário ter em sua máquina o [Nodejs](https://nodejs.org/en/).

```bash
$ npm install stylus -g
```

### Estrutura

Crie uma pasta com o nome que desejar e dentro dessas pastas crie mais 2: `stylus` e `css`. Depois crie um arquivo `main.styl` e a estrutura ficará assim.

```
.
├── /css
└── /stylus
   └── main.styl
```

### Começa a brincadeira

Diferente de `SASS` ou do `LESS` o **Stylus** te deixa a vontade em relação a sintaxes. Veja que abaixo temos 3 tipos diferentes de sintaxes:

```css
body {
  color: #fff;
}
maincolor#fff
div
  color: #fff;
```

Basta ir em seu terminal e rodar:

```bash
stylus stylus/main.styl --out css/
```

E você verá que na pasta `css` surgiu um arquivo `main.css` assim:

```css
body {
  color: #fff;
}
main {
  color: #fff;
}
div {
  color: #fff;
}
```

Não, não é magia!

Isso é um **Pré-Processador CSS** em ação!

Muito legal, não? Mas, para que serve? Apenas para não precisar escrever `{` ou `:`?

Não pequeno padawan, ele vai muito além disto e vou mostrar algumas funcionalidades.

### Variáveis

Digamos que você criou um site que em várias classes utilizou a cor `#fb8c00`, pois essa é a cor principal.

Depois de um tempo, o designer ou seu cliente viu que seria melhor trocar a cor Laranja (#fb8c00) para azul (#1976d2) como cor principal da página.

**O que fazer?**

Essa é fácil Douglas, o famoso `Ctrl H` (atalho para substituir) em seu Editor, procurar `#fb8c00` e substituir para `#1976d2`.

Mas o site tem dezenas de arquivos em `CSS`, olha o trabalho que terá para verificar e substituir em cada arquivo.

Com um Pré-processador como o Stylus, não será necessário, basta criar uma variável.

```css
mainColor = #1976d2 body {
  color: mainColor;
}
maincolormainColor 
div
  color: mainColor;
```

Pronto, agora execute o comando para compilar o Stylus e veja. Todas as classes estão com `color: #1976d2`.

Amanhã se precisar mudar a cor principal do site novamente, só será necessário mudar esta variável.

### Importar

Para deixar nosso site mais organizado, criamos um arquivo CSS para estilizar cada componente, por exemplo, um para o css do cabecalho, um css do corpo, um css do rodapé, entre outros.

Mas nisso teriamos que ficar importando todos `.css` no `<head>` do nosso `index.html`. Horrivel né?

Como faríamos no Stylus?

Simples, vamos criar mais 2 arquivos: `_variables.styl` e `_layout.styl`

- `_variables.styl`

```css
mainColor = #1976d2
```

- `_layout.styl`

```css
body {
  color: mainColor;
}
maincolormainColor
div
  color: mainColor;
```

Agora editamos o arquivo `main.styl` colocando os imports.

```css
@import "_variables" @import "_layout";
```

Pronto, agora para qualquer componente do site, basta colocar o `@import "component"` e já será compilado para nosso `main.css`.

### Parent/Root Reference

Em alguns momentos, precisamos utilizar o famoso modo `cascata` para referenciar o seletor pai.

Por exemplo, temos a classe `.header` terá uma `padding: 40px` e também terá uma classe filha `.title` que terá a cor alterada para nossa cor principal.

Se você entende de CSS, sabe que isso é moleza.

```css
.header {
  padding: 40px;
}

.header .title {
  color: #1976d2;
}
```

Fácil né? Agora imagina ter que mudar o CSS de um `<span>` que está dentro de uma `<li>`, que está dentro de uma `<ul>`, que esta dentro de uma... ahhhh, chega. rsrs.

Aí complica, não é verdade?

Se você gosta de identar seu código, não terá problemas nenhum com isso.

Olha como o exemplo acima ficaria no Stylus:

```css
.headerpadding 40px .title color: mainColor;
```

Basta deixar a classe filha identada como se estivesse dentro da classe pai e compilar com o `stylus stylus/main.styl --out css/` para ver a mágica acontecer.

Por falar em mágica, toda vez que alterar algo vamos ter que rodar o Stylus no terminal?
Claro que não né! Vamos mudar o nosso modo de compilar acrescentando o `--watch` após o `stylus`

```bash
stylus --watch stylus/main.styl --out css/
```

Desta forma, o **Stylus** ficará observando nosso código. Toda vez que mudarmos algo, ele saberá e com isso irá compilar automaticamente.

### Loop

**Loop**? Você disse **Loop**?

Sim, caros amigos, loop.

Digamos que para não ser repetitivo o mesmo layout das páginas, você queira mudar um detalhe com outra cor para cada página.

Nisto entraria o famoso `Ctrl C` `Ctrl V` com alteração apenas nos nomes de classe e nas cores que deseja mudar.

E se você tem 5 páginas? Olha o trabalho que terá. Mas com Stylus, isso não é problema. (Leia como se fosse aqueles comerciais da Polishop rs)

Vamos ao código.

Primeiro criamos como se fosse um objeto em javascript.

```css
themes = {
    page-home: #ffff00,
    page-a: #B31917,
    page-b: #1565c0,
    page-c: #e040fb,
    page-d: #1de9b6
}
```

Depois fazemos o `for`:

```css
for theme, page-color in themes
```

Onde `theme` será nossa chave e `page-color` nossa variavel onde colocamos a cor.

Abaixo do for, criamos nossas classes com o layout das nossas páginas.

Então nosso código inteiro ficaria assim:

```css
themes = {
    page-home: #ffff00,
    page-a: #B31917,
    page-b: #1565c0,
    page-c: #e040fb,
    page-d: #1de9b6
}

for theme, page-color in themes
    .{theme}
        h1,h2,h3,h4, strong
            color page-color
        .post-title, .title-page, .page
            color page-color
        .post-content
            a
                &:hover
                    color page-color
                    border-bottom: 2px dashed page-color
            blockquote
                border-left rem(5px) solid page-color
        .tags a
            color page-color
            border 1px solid page-color
```

Nosso main.css será transformado nisso:

```css
.page-home h1,
.page-home h2,
.page-home h3,
.page-home h4,
.page-home strong {
  color: #ff0;
}
.page-home .post-title,
.page-home .title-page,
.page-home .page {
  color: #ff0;
}
.page-home .post-content a:hover {
  color: #ff0;
  border-bottom: 2px dashed #ff0;
}
.page-home .post-content blockquote {
  border-left: rem(5px) solid #ff0;
}
.page-home .tags a {
  color: #ff0;
  border: 1px solid #ff0;
}
.page-a h1,
.page-a h2,
.page-a h3,
.page-a h4,
.page-a strong {
  color: #b31917;
}
.page-a .post-title,
.page-a .title-page,
.page-a .page {
  color: #b31917;
}
.page-a .post-content a:hover {
  color: #b31917;
  border-bottom: 2px dashed #b31917;
}
.page-a .post-content blockquote {
  border-left: rem(5px) solid #b31917;
}
.page-a .tags a {
  color: #b31917;
  border: 1px solid #b31917;
}
.page-b h1,
.page-b h2,
.page-b h3,
.page-b h4,
.page-b strong {
  color: #1565c0;
}
.page-b .post-title,
.page-b .title-page,
.page-b .page {
  color: #1565c0;
}
.page-b .post-content a:hover {
  color: #1565c0;
  border-bottom: 2px dashed #1565c0;
}
.page-b .post-content blockquote {
  border-left: rem(5px) solid #1565c0;
}
.page-b .tags a {
  color: #1565c0;
  border: 1px solid #1565c0;
}
.page-c h1,
.page-c h2,
.page-c h3,
.page-c h4,
.page-c strong {
  color: #e040fb;
}
.page-c .post-title,
.page-c .title-page,
.page-c .page {
  color: #e040fb;
}
.page-c .post-content a:hover {
  color: #e040fb;
  border-bottom: 2px dashed #e040fb;
}
.page-c .post-content blockquote {
  border-left: rem(5px) solid #e040fb;
}
.page-c .tags a {
  color: #e040fb;
  border: 1px solid #e040fb;
}
.page-d h1,
.page-d h2,
.page-d h3,
.page-d h4,
.page-d strong {
  color: #1de9b6;
}
.page-d .post-title,
.page-d .title-page,
.page-d .page {
  color: #1de9b6;
}
.page-d .post-content a:hover {
  color: #1de9b6;
  border-bottom: 2px dashed #1de9b6;
}
.page-d .post-content blockquote {
  border-left: rem(5px) solid #1de9b6;
}
.page-d .tags a {
  color: #1de9b6;
  border: 1px solid #1de9b6;
}
```

Olha só o tanto de código que deixamos de escrever e ganhamos tempo.

O que mais posso dizer? Apenas que o **Stylus** é incrível!

É claro, isso é apenas a ponta do Ice berg. Existem diversas coisas a mais que você pode fazer com ele.

Mas não vai achando que é tudo flores. É necesário saber quando deve usa-lo ou não, pois uma vez usando, seu site vira "refén".

Já conhecia o Stylus ou outro Pré-processador (Sass, Less)?

Gostou desta dica? Comente ai embaixo e vamos trocar uma ideia.
