---
title: "Conhecendo Vue.js"
excerpt: "Uma pequena introdução ao Framework em javascript, Vuejs"
# coverImage: '/assets/pots/vuejs.jpg'
coverImage: '/assets/img/posts/vuejs.jpg'
tags: ['Frontend']
date: '2018-03-28T05:35:07.322Z'
ogImage:
  url: '/assets/img/pots/vuejs.jpg'
twitter_text: "Uma pequena introdução ao Framework em javascript, Vuejs."
---

Sabemos que o momento é bom para o JavaScript. Com isso, vemos diversos plugins e frameworks surgindo e ganhando espaço nas comunidades.

E é ótimo para nós desenvolvedores FrontEnd, mas também começa a sugir duvidas.

Qual eu devo usar?

Qual devo aprender?

Os 3 Frameworks mais conhecidos, na data que posto este artigo, são:

- [Angular (Google)](https://angular.io/)
- [React (Facebook)](https://reactjs.org/)
- [Vue.js (Comunidade)](https://vuejs.org/)

**Mas qual devo escolher?**

Não vou me aprofundar em cada um deles, pois o que vi do Angular e React foi bem superficial.

Vou apenas dizer os motivos deu ter escolhido o VueJs.

# Enfim, o que é o VueJs?

O vueJs foi criado em 2014 por [Evan You](https://medium.com/@youyuxi), que na época trabalhava na [Google](https://google.com), com o objetivo de criar uma ferramenta eficaz e curva de aprendizado bem baixa.

Com o crescimento e as cobranças da comunidade Vue, [Evan You](https://medium.com/@youyuxi) passou a trabalhar apenas para o Vue, onde conseguiu através do [Patreon](https://www.patreon.com/evanyou) uma arrecadação de \$12,544.
Assim até eu pediria demissão da Google. rsrs

Segundo seu criador, o Vuejs é um framework progressivo para criação de interfaces interativas na web. Como ele se integra com outras bilbiotecas, fica facil combinar para alimentar aplicações de pagina unica (SPA).

**Por que VueJs?**

O que mais gostei do VueJs foi que a curva de aprendizagem dele.

Basta uma pequena lida na sua documentação e já sabe fazer um "HelloWord" sem dores de cabeça.

Segundo a comunidade Vue, as maiores dúvidas, em seus foruns, são mais relacionadas ao JavaScript que o próprio Vue.

## Diretivas

**Way Data-bind**
O databind permite ligar um elemento do HTML à uma variável do JS. Basta alterar o valor da variavel e o Vue cuidará da atualização no elemento HTML.

```html
<div id="app">
  { { message } }
</div>
```

```javascript
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue.js!'
        }
      })
    <script/>
```

![Way Data-bind](/assets/img/posts/directiva.png)

**Two-way Data-bind**

O termo Two Way significa que uma variável pode estar ligada a um elemento e este elemento pode alterar a variável, como uma via dupla.

```html
<div id="app">
  <p>{ { message } } { { name } }</p>
  <input v-model="name" />
</div>
```

```javascript
new Vue({
  el: "#app",
  data: {
    message: "Hello ",
    name: "",
  },
})
```

![Two-way Data-bind](/assets/img/posts/directiva2.png)

Além da diretiva **v-model**, temos a **v-for, v-on**…

# Conclusão

Concluindo, procure saber um pouco mais sobre o Vue, pois ele vem ganhando muito espaço no mercado pela praticidade.

Só para você ter um pouco mais de noção do crescimento, deixo alguns dados do ano 2015 e 2016 ([https://medium.com/the-vue-point/vue-in-2016-8df71d98bfb3](https://medium.com/the-vue-point/vue-in-2016-8df71d98bfb3))

- Aumento de 300% de download no npm
- Aumento de 240% de stars no repositório do github
- Aumento de + 268% de Pull Request mergeados no core do Vue
- 84,098 usuários ativos semanais da Chrome DevTools

Agora é só ler um pouco a documentação e entrar de cabeça!

Dúvidas ou sugestão? [Vamos bater um papo](/contato)

Segue abaixo alguns links que conheço daqui do Brasil.

[Vue Brasil](http://vuejs-brasil.com.br/)

[Slack Vue Brasil](https://vue-brasil.slack.com/)

[Alura Live - Vue.js](https://www.youtube.com/watch?v=ruH6R9Puj6o)
