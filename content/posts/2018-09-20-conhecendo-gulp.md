---
title: "Conhecendo Gulp"
description: Conheça o mundo dos automatizador de tarefas Gulp
image: /assets/bg-know-gulp.png
category: "Front-End"
date: 2018-09-20 00:00:01
tags:
  - Gulp
  - Javascript
  - Automatizador de Tarefas
twitter_text: Conheça o mundo dos automatizador de tarefas Gulp.
---

Antes de explicar e demonstrar o poderoso automatizador de tarefas, **[Gulp](https://gulpjs.com/)**, preciso explicar o que é um automatizador de tarefas.

### O que é Automatizadores de Tarefas?

Existem alguns processos (tarefas) de desenvolvimento que se torna repetitivo e chato ter que fazer sempre, por exemplo, no [Stylus](http://stylus-lang.com/).
Caso não saiba eu espero você ler este meu artigo [Colocando Stylus no seu site](http://douglasporto.com.br/colocando-stylus-no-seu-site/).

Pronto? Leu? Legal, agora que viu e sabe sobre o [Stylus](http://stylus-lang.com/), imagina ter que rodar isso toda vez. Depois disso você quiser que todo esse **_CSS_** fique minificado.

Caso você tenha 10 tarefas como o pre-processador Stylus, vai ter que rodar 10 comados diferentes em seu terminal?

Se até agora fazia isso, pare agora.

### GULP

Temos diversos outros, como [GRUNT](https://gruntjs.com/), seu principal concorrente. Porém quero apenas falar e demonstrar o **[Gulp](https://gulpjs.com/)**.

> gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something ([Doc Gulp](https://gulpjs.com/)).

#### Instalação

O **[Gulp](https://gulpjs.com/)** roda em **[Nodejs](https://nodejs.org/en/)**, então sim, você terá que ter ele em sua maquina.

Para instalação do Gulp vamos rodar o famoso comando **NPM**

```bash
npm install -g gulp
```

Se já conhece um pouco de **[Nodejs](https://nodejs.org/en/)**, perceberá que o rodamos com o `-g`, ou seja, instalamos o **[Gulp](https://gulpjs.com/)** globalmente.

Rode o comando para ter certeza que o gulp foi instalado

```bash
gulp -v
```

Caso não mostre a versão, significa que não intalou, então tente instalar com `sudo`.

#### Iniciando nosso projeto

```bash
|projeto/
|--src/
|----source.js
|--stylus/
|----main.styl
|--Gulpfile.js
```

**Agora vamos começar.** Rode em seu terminal o comando `npm init`.

Será solicitado algumas informações, você pode inserir como preferir:

```bash
package-name: gulp_learning
version: 1.0.0
description: To learning Gulp
entry point: index.js
test comand: _(enter)_
git repository: _(enter)_
keywords: gulp, es5, es6, stylus
Author: Douglas Porto
license: ISC
```

Agora temos um `package.json` assim:

```javascript
{
  "name": "gulp_learning",
  "version": "1.0.0",
  "description": "To learning Gulp",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "gulp",
    "es5",
    "es6",
    "stylus"
  ],
  "author": "Douglas Porto",
  "license": "ISC"
}
```

#### Instalando plugins

Vamos utilizar o **NPM** mais uma vez rodando o comando:

```bash
npm install @babel/core @babel/preset-env gulp-stylus --save-dev
```

Agora inclua o programa `.babelrc` e dentro dele faça:

```js
{
  "presets": ["@babel/preset-env"]
}
```

#### Começando a brincadeira

Agora sim podemos começar a brincar com o **[Gulp](https://gulpjs.com/)**

Antes de tudo no arquivo `gulpfile.js` precisamos incluir o gulp.

```javascript
var gulp = require("gulp")
```

A váriavel `gulp` comtém o objeto com as funções necessárias para podermos confirgurar nossas tarefas _**(task)**_.

Chamaremos então uma função que esta no objeto, chamada **task**.
Está função recebe 2 parametros, 1º o nome da tarefa, o 2º uma função.

```javascript
var gulp = require("gulp")

gulp.task("teste", function() {
  console.log("Gulp Funcionando")
})
```

Rode em seu terminal `gulp teste`.

Você receberá 3 informações:

- [Hora] Starting 'teste' (Informação da hora e nome da task iniciada)
- Gulp Funcionando (console.log da função)
- [Hora] Finished 'teste' (Informação da hora e nome da task finalizada)

#### ES6 para ES5

Importe o **babel** para as configurações do **[Gulp](https://gulpjs.com/)**

```javascript
var babel = require("gulp-babel")
```

Na função do nosso **task** `teste` vamos colocar a seguinte sintexe:

```javascript
gulp.task("teste", function() {
  return gulp
    .src("./src/index.js") // Arquivo(s) que será lido
    .pipe(babel({ presets: ["@babel/preset-env"] })) //Plugin babel para a compilação do ES6
    .pipe(gulp.dest("dist")) // Destino para qual irá o arquivo após compilado
})
```

**Vamos testar se funciona.**

No arquivo `./src/index.js` vamos escrever uma arrow function do _ES6_

```javascript
var a = b => b
```

Rode o `gulp teste` e veja a mágica acontecer rs.

```javascript
var a = function(b) {
  return b
}
```

Agora só para organizarmos melhor nosso projeto, vamos trocar o nome da task `teste` para `es5`

#### Copilando CSS com Stylus

Vamos criar uma nova task com nome de _stylus_.
Assim como na _**task**_ anterior, devemos passar o caminho que deve obeservar, a função que deve executar e por fim o caminho destino.

```javascript
gulp.task("stylus", function() {
  return gulp
    .src("./css/style.styl")
    .pipe(stylus())
    .pipe(gulp.dest("./dist/css/"))
})
```

No nosso `./css/style.styl` vamos deixar desta forma para teste.

```css
.container {
  .row {
    div {
      background: black;
    }
  }
}
```

Agora rodamos o `gulp stylus` e temos:

```css
.container .row div {
  background: #000;
}
```

#### Watch e Default

Imagina que saco ter que digitar no terminal toda vez `gulp es5` depois `gulp stylus`. Que automatizador de tarefas é esse?

Para isso que existe o default, veja:

```javascript
gulp.task("default", ["es5", "stylus"])
```

Rode apenas `gulp` e _voilà_.

Porém, toda alteração que executar no seus códigos terá que rodar `gulp`?

O **watch** fica observando os programas e assim que salva-los, ele executará a tarefa definida, veja:

```javascript
gulp.task("watch", function() {
  gulp.watch("./src/index.js", ["es5"])
  gulp.watch("./css/style.styl", ["stylus"])
})
```

Rode `gulp watch` e teste.

**_Incrível_** não? Agora junte o **Default** com o **Watch** e pronto.

```javascript
gulp.task("default", ["es5", "stylus", "watch"])
```

Agora ao rodar `gulp` ele fará o es5, depois o stylus e começará a observar com o watch.

Bom, é isso ai galera. Este foi um exemplo muito simples de como funciona o **[Gulp](https://gulpjs.com/)**. Conhece outras coisas que da para fazer com ele? Coloque aqui embaixo e vamos conversar!
