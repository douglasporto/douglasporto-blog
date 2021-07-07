---
layout: post
date: '2020-08-15 07:14:47'
image: /assets/captura-de-tela-2020-06-10-às-13.40.31.png
title: Conhecendo o novo Adonis 5
description: Conhecendo o novo Adonis 5
tags:
  - Backend
---
```
yarn create adonis-ts-app blog
```

configurando banco de dados

yarn add pg

```
yarn add @adonisjs/lucid@alpha
```

rode node ace serve --watch

node ace generate:manifest

```
node ace invoke @adonisjs/lucid
```

\*\*\*\*\*\*olhar video na pagina <https://preview.adonisjs.com/guides/auth/setup>

```
yarn add @adonisjs/auth@alpha
```

```
node ace invoke @adonisjs/auth
```

```
node ace migration:run
```

## [](https://preview.adonisjs.com/guides/auth/setup#contracts-overview)Criando controller

node ace make:controller Users
