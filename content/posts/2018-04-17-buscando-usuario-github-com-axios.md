---
title: "Buscando Usuário GitHub com AXIOS"
description: Vamos aprender na prática como fazer uma requisição AXIOS na API do GitHub.
image: /assets/header-axios-vuejs.png
category: "Front-End"
date: 2018-04-17 00:00:01
tags:
  - Vue.js
  - Vue
  - API
  - Rest Ful
  - RestFul
  - GitHub
twitter_text: Vamos aprender na prática como fazer uma requisição AXIOS na API do GitHub.
---

<!-- ![Axios](/assets/posts/header-axios-vuejs.png) -->

Neste artigo não vou enrolar. Vamos colocar a mão na massa e aprender na prática a utilizar o [AXIOS](https://github.com/axios/axios).

Faremos uma página onde digitaremos um usuário [GitHub](https://github.com/) para buscar os dados na [API do GitHub](https://developer.github.com/v3/) e montaremos em nossa tela todos os repositórios deste usuário.

Vamos lá.

Crie o `index.html` já colocando o **VUE** e **AXIOS** via **CDN** mesmo.

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=no"
    />
    <link rel="shortcut icon" href="assets/img/ico/favicon.ico" />
    <title></title>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
    <script src="config/index.js"></script>
  </body>
</html>
```

Agora vamos criar o `config/index.js` para instanciar nosso VUE.

Vamos utilizar duas variáveis VUE:

- **usuario** para termos o v-bind do nosso campo texto digitado
- **github** que será nosso objeto retornado da API do GitHub

```javascript
var app = new Vue({
  el: "#app",
  data: {
    usuario: "",
    github: {},
  },
})
```

Voltamos para o `index.html` para escrevermos nosso layout.

Para deixar um pouco mais bonito nosso exemplo, vamos colocar o [Bootstrap](http://getbootstrap.com/).
Em nosso layout teremos uma `<nav>` e logo abaixo nosso `<div class="container">` para colocar o `<button>` e o campo `usuario`.

```html
<nav class="nav navbar navbar-expand-lg navbar-light bg-light center">
  <a class="navbar-brand" href="#">Vue-js + Axio</a>
</nav>
<div class="container">
  <div class="row">
    <div class="col-md-12 jumbotron">
      <form class="form-inline" v-on:submit.prevent>
        <label class="sr-only" for="userGit">Usuário</label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">@</div>
          </div>
          <input
            type="text"
            class="form-control"
            id="userGit"
            v-model="usuario"
            placeholder="Usuario"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary mb-2"
          @click="buscarGit"
          :class="{'disabled':usuario.trim()==''}"
        >
          Buscar
        </button>
      </form>
    </div>
  </div>
</div>
```

Percebem que em nosso `<form>` temos um `v-on:submit.prevent` apenas para não ser chamado a função `submit` do `<form>` e atualizar a página.

Já colocamos também o `@click="buscarGit"` que será nosso método para buscar as informações na API. Usamos também um `v-bind` na nossa `class` para desabilitar o `<button>` caso usuario seja vazio.

### Axios

Nosso **axios** será a parte mais facil deste simples exemplo.

```javascript
methods: {
  buscarGit: function () {
    let api = 'https://api.github.com/users/' + this.usuario;
    vm = this;
    axios.get(api).then(function(response) {
      vm.github = response.data;
      console.log(vm.github);
    });
  }
}
```

Agora busque um usuário e observe o cosole.

É possível ver tudo o que a API fornece. Agora terminamos nosso código mostrando os repositórios do usuário que buscamos.

```html
<div v-if="github.name">
  <div class="row jumbotron">
    <div class="col-md-6">
      <div class="avatar">
        <img :src="github.avatar_url" />
      </div>
      <div class="nickname">
        <h2>{ { github.name } }</h2>
        <h2 class="login"><small>({ { github.login } })</small></h2>
      </div>
    </div>
    <div class="col-md-6">
      <div class="pull-right well info">
        <ul>
          <li>
            <h1>{ { github.public_repos } }</h1>
            Public Repos
          </li>
          <li>
            <h1>{ { github.followers } }</h1>
            Followers
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

![Screen Axios+Vue.js](/image/screen-axios-vue.png)

Agora basta ler a [documentação do GitHub](https://developer.github.com/v3/) e deixar a criatividade fluir.

Gostou desta dica? Comente ai embaixo e vamos trocar uma ideia.
