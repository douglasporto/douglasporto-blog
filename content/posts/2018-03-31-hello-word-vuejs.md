---
title: "Hello World Vue.js"
description: Um simples Hello World em Vue.js
image: /assets/hellovue.png
category: "Front-End"
date: 2018-03-31 00:00:01
tags:
  - VueJs
  - Javascript
twitter_text: Um simples Hello World em Vue.js.
---

Agora que conhece um pouco sobre o Vue.js, vou mostrar o quanto é simples começar a utiliza-lo.

Caso não tenha visto meu post Conhecendo Vue.js, [clique aqui](/conhecendo-vuejs/) e depois volte para este post.

Bom, vamos lá.

Na documentação do [Vue.js](https://br.vuejs.org/v2/guide), você pode instalar de duas maneiras:

- NPM
- CDN

Para este exemplo não será necessário a instalação através do NPM.

Vamos criar um index.html, onde no `<head>` adionaremos o link CDN:

- https://unpkg.com/vue@2.5.16/dist/vue.js

No `<body>` colocaremos uma `<div>` com o `id=app`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello World - Vue.js 2</title>
    <script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

Antes do fechamento do `<body>` abrimos a tag `<script></script>>` para instanciar.
E quando instaciamos o objeto Vue `new Vue()`, devemos informa-lo através do parametro **el** qual o elemento html será montado nossa aplicação.

Como nosso elemento é identificado através de um id cujo nome é `"app"` colocamos `el: '#app'`.

Lembrando que podemos colocar qualquer nome de **id**.

Então nosso script ficaria assim:

```javascript
new Vue({
  el: "#app",
})
```

**Pronto**, nosso index.html já está pronto para utilizar o Vue.

Para renderizar nossas propriedades em nossa tela, precisamos declara-las através do objeto `data`.

```javascript
    new Vue({
      el: '#app',
      data {
        msg: 'Hello Vue.js'
      }
    });
```

Agora como faço para renderizar essa propriedade `msg`?

Simples, a interpolação do Vue é `{ { } }`, ou seja, basta dentro da nossa `<div id='app'>` colocarmos `{ { msg } }`

e o nosso resultado será o famoso Hello World.

![Way Data-bind](/assets/posts/directiva.png)

Simples não?

Só para ter mais um gostinho da praticidades do Vue.js, vou mostrar para você outras coisas que ele é capaz de fazer.

## v-for

O `v-for` é o famoso `for` , onde varre todo um array em javascript.

Já aprendemos como declarar nossas propriedades, então vamos criar um array.

```javascript
new Vue({
  el: "#app",
  data: {
    title: "Times de Futebol",
    times: [
      { name: "Corinthians" },
      { name: "Palmeiras" },
      { name: "São Paulo" },
      { name: "Santos" },
    ],
  },
})
```

Nosso html criamos uma `<ul>` e nela usamos o `v-for`

```html
<div id="app">
  <h3>{ { title } }</h3>
  <ul v-for="time in times">
    <li>{ { time.name } }</li>
  </ul>
</div>
```

Nosso resultado será:

![v-for](/assets/posts/hellovue1.png)

## v-if e two-Way Data-bind

Neste exemplo vou aproveitar e já mostrar essas 2 maravilhas.

Vamos melhorar nosso array times e acrescentar mais uma informação origem no nosso objeto. Agora saberemos se o time é do Brasil ou Internacional.

```javascript
new Vue({
  el: "#app",
  data: {
    title: "Times de Futebol",
    times: [
      { name: "Corinthians", origem: "Brasil" },
      { name: "Palmeiras", origem: "Brasil" },
      { name: "São Paulo", origem: "Brasil" },
      { name: "Santos", origem: "Brasil" },
      { name: "PSG", origem: "Internacional" },
      { name: "Real Madrid", origem: "Internacional" },
      { name: "Barcelona", origem: "Internacional" },
      { name: "Manchester City", origem: "Internacional" },
    ],
  },
})
```

Vamos colocar um `checkbox` para mostrarmos apenas o que queremos ver, Brasil ou Internacional, ou até mesmo ambos.

```html
<div id="app">
  <h3>{ { title } }</h3>
  <input
    type="checkbox"
    id="brasil"
    value="Brasil"
    v-model="checkedOrigem"
  /><label for="brasil">Brasil</label>
  <input
    type="checkbox"
    id="internacional"
    value="Internacional"
    v-model="checkedOrigem"
  /><label for="internacional">Internacional</label>
  <ul v-for="time in times">
    <li>{ { time.name } }</li>
  </ul>
</div>
```

Repare que no `<input>` colocamos a tag `v-model`, que é o que precisamos para o nosso **Way Data-bind**.
Mas só isso não é suficiente e até mesmo nosso console mostrará um erro javascript. É preciso
declarar a propriedade `checkedOrigem` onde será um array

```javascript
new Vue({
  el: "#app",
  data: {
    title: "Times de Futebol",
    times: [
      { name: "Corinthians", origem: "Brasil" },
      { name: "Palmeiras", origem: "Brasil" },
      { name: "São Paulo", origem: "Brasil" },
      { name: "Santos", origem: "Brasil" },
      { name: "PSG", origem: "Internacional" },
      { name: "Real Madrid", origem: "Internacional" },
      { name: "Barcelona", origem: "Internacional" },
      { name: "Manchester City", origem: "Internacional" },
    ],
    checkedOrigem: [],
  },
})
```

Se colocarmos `{ { checkedOrigem } }` em nosso HTML aparecerá `[]` em nosso browser. Mas ao clicar em Brasil, ficará `[ "Brasil" ]` e em seguida clicar em Internacional, aparecerá `[ "Brasil","Internacional"]`. E isso é o que chamamos de **way data-bind**. Ao manipularmos nossa propriedade javascript, o Vue se encarrega de alterar os valores printados.

O **V-if** é o famosos `if` de qualquer linguagem, então colocamos o **v-if()** no `<li>`. Nossa condição será um simples `indexOf`.

```html
<li v-if="(!checkedOrigem.indexOf(time.origem))"></li>
```

Logo de cara, você vai ver que a nossa lista sumiu. Mas basta clicar em Brasil ou Internacional para o Vue resolver nosso problema.

![v-for](/assets/posts/hellovue2.png)

**Incrível** não?

Enfim, isso é apenas uma parcela do que você pode fazer com este FrameWork.

Por enquanto é isso galera. Dúvidas ou sugestão? [Vamos bater um papo](/contato)
