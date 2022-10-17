---
title: Searching Github Users With AXIOS
published: true
coverImage: 'https://thepracticaldev.s3.amazonaws.com/i/tm8iv5zwhmsj9mu4ja76.png'
ogImage:
  url: 'https://thepracticaldev.s3.amazonaws.com/i/tm8iv5zwhmsj9mu4ja76.png'
excerpt: Let's learn on the practice how to make a request with AXIOS on GitHub API.
twitter_text: Let's learn on the practice how to make a request with AXIOS on GitHub API.
date: '2018-05-12T05:35:07.322Z'
tags: ['Frontend', 'Vue']
lang: 'English'
---

# Searching Github Users With AXIOS

﻿In this article, we'll see in practice how to use [AXIOS](https://github.com/axios/axios).
Getting straight to the point, we'll make a page that searches for a [GitHub](https://github.com/) user and shows on-screen its repositories.

Having said that, let's go!

First, you'll create `index.html` and put on [VUE](https://vuejs.org/v2/api/) and [AXIOS](https://github.com/axios/axios) by **CDN**.



```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <meta name="format-detection" content="telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <link rel="shortcut icon" href="assets/img/ico/favicon.ico">
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

Then, create a `config/index.js` file to instantiate [VUE](https://vuejs.org/v2/api/).


In this step, we'll use two VUE variables:
- **user**: for input text;
- **gitHub**: for the API's return.


```javascript
var app = new Vue({
  el: '#app',
  data: {
    user: '',
    github: {}
  },
})
```

Use the `index.html` to create the layout of your page. You can use the [Bootstrap](http://getbootstrap.com/)or any other framework if you want to make it more sophisticated. Check out the example:

```html
  <nav class="nav navbar navbar-expand-lg navbar-light bg-light center">
    <a class="navbar-brand" href="#">Vue-js + Axios</a>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-md-12 jumbotron">
        <form class="form-inline"  v-on:submit.prevent>
        <label class="sr-only" for="userGit">User</label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">@</div>
          </div>
          <input type="text" class="form-control" id="userGit" v-model='user' placeholder="user">
        </div>
        <button type="submit" class="btn btn-primary mb-2" @click="searchGit" :class="{'disabled':user.trim()==''}">Search</button>
      </form>
    </div>
  </div>
```

Notice that the `<form>` has a `v-on:submit.prevent` just to avoid calling the `submit` function. Also, we use a `@click="searchGit"` tag to call the API information's search and a `v-bind` `class` to disable the `<button>` if the user is empty.

### Axios


Apply [AXIOS](https://github.com/axios/axios) is the easiest part of the example. Let's check it out:

```javascript
methods: {
  searchGit: function () {
    let api = 'https://api.github.com/users/' + this.user;
    vm = this;
    axios.get(api).then(function(response) {
      vm.github = response.data;
      console.log(vm.github);
    });
  }
}
```


You are now able to search for a user. Check the console to see the result. You'll see everything that the API GitHub provides.

The last step is to display its repositories. You can do it as follows:


```html
<div v-if="github.name">
  <div class="row jumbotron">
    <div class="col-md-6">
      <div class="avatar">
        <img :src="github.avatar_url">
      </div>
      <div class="nickname">
        <h2>{ { github.name } }</h2>
        <h2 class="login"><small>({ { github.login } })</small></h2>
      </div>
    </div>
    <div class="col-md-6">
      <div class="pull-right well info">
        <ul>
          <li><h1>{ { github.public_repos } }</h1>Public Repos</li>
          <li><h1>{ { github.followers } }</h1>Followers</li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

![Screen Axios+Vue.js](http://douglasporto.com.br/assets/img/posts/screen-axios-vue.png)

That's it!


Read the [GitHub Documentation](https://developer.github.com/v3/) for further information and let the creativity flow!

Did you like this tip? Comment here below and let's talk.
