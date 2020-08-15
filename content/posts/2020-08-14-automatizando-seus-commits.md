---
layout: post
date: '2020-08-14 03:47:15'
image: /assets/bg-pattern-git-commit.jpg
title: Padronizando seus Commits
description: Padronizando seus Commits
tags:
  - Frontend
  - Backend
---
Faaaala devs. Blz?

Faz tempo que não dou uma atenção aqui no blog, mas agora vamos voltar aqui pelo menos a cada 15 dias.

Hoje vou falar sobre automatizar padrões de código e também padronizar commits.

Uma estrutura que costumo fazer em praticamente todos meus projetos javascript.

### Automatizar padrões de código

Para automatizar nossos códigos vamos usar um carinha chamado [Husky](https://github.com/typicode/huskyhttps://github.com/typicode/husky).

Digamos que vamos querer varrer nosso código para ver se não ficou nenhum erro acusado pelo [Eslint](https://eslint.org/) automáticamente. Por isso e outros motivos que utilizamos essa maravilhosa lib.

Dentro do nosso `.git` é possível encontrar hooks, que ao configura-los podemos fazer praticamente tudo que quisermos antes ou depois de qualquer comando [GIT](https://git-scm.com/). 

No nosso caso, queremos que toda vez que rodarmos um `git commit` seja verificado se esquecemos algum erro que o `eslint` detectou. Vamos configurar também um outro carinha chamado [lint-stage](https://github.com/okonet/lint-stagedhttps://github.com/okonet/lint-staged), para que seja feita a verificação dos erros apenas nos arquivos que foram alterados. Imagina se tivervos mil arquivos no sistema onde será verificado nos mil arquivos mesmo nós termos alterado apenas um. Não faz sentido né?

**Configuração**

Para instalarmos basta rodar `npm install husky lint-staged --save-dev` no nosso terminal.

Agora em nosso `package.json` configuramos os 2:

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.ts": [
    "eslint --fix", "git add"
  ]
},
```

Calma, vou explicar!

Toda vez que rodarmos no terminal `git commit` será ativado o Husky por causa do comando que deixamos no `hooks`, o `pre-commit`, ou seja, antes do commit faça algo. E o que estamos fazendo no `pre-commit`? Estamos chamando nosso ajudante número 2 `lint-staged`.

Deixamos o `lint-staged` configurado para executar em todos (*) arquivos typescript (.ts), mas você pode colocar outras extensões de arquivos (js, jsx, tsx). Colocamos em um array pois será rodado 2 comandos nesses arquivos modificados: `eslint --fix` para corrigir e verificar erros e o `git add` pois o próprio eslint poderá corrigir os erros, então precisaremos novamente o `git add` para adicinar no commit.

![husky-running](/assets/captura-de-tela-2020-08-14-às-16.41.17.png "husky-running")

Husky irá começar a rodar e logo após fazer as tarefas mostrará assim:

![husky-done](/assets/captura-de-tela-2020-08-14-às-16.41.38.png "husky-done")

Pronto! Próxima configuração.

### Padronizar commits

Quantas vezes tentamos olhar no `git log` o que foi alterado, quando foi, se foi fix, feature nova, enfim, quem nunca se perdeu no meio de tanto `commit` e não tem ideia sobre o que aquele commit de fato referenciava?

Para sanar esse problema vamos padronizar as mensagens dos commits para que todos devs sejam "obrigados" a manter o mesmo padrão.

Estou falando do [Commit lint](https://github.com/conventional-changelog/commitlint), que irá garantir o padrão do nossos commits, e o [Commitizen](https://github.com/commitizen/cz-cli) que fará nossos commits automaticos e de uma forma mais visual.

**Configuração**

Vamos instalar as 2 libs,

```
yarn add  @commitlint/config-conventional @commitlint/cli commitizen -D 
```

Com as libs instaladas vamos configura-las.

```
npm commitizen init cz-conventional-changelog --save-dev --save-exact
```

ou se usa `yarn`

```
yarn commitizen init cz-conventional-changelog --yarn --dev --exact
```

Voltamos para o `package.json` lembra do Husky? Vamos ligar essas 2 libs com ele. 

Dentro do husky vamos adicionar os comandos:

```json
prepare-commit-msg":"exec < /dev/tty && git cz --hook || true", 
"commit-msg":"commitlint -E HUSKY_GIT_PARAMS"
```

Então no `prepare..` estamos preparando o commit, no `commit-msg` vamos garantir que nosso commit seguirá os padrões do `conventional-changelog`

Recapitulando, nosso `package.json` terá o Husky assim:

```json
 "husky":{
  "hooks":{
    "pre-commit":"lint-staged",
    "prepare-commit-msg":"exec < /dev/tty && git cz --hook || true",
    "commit-msg":"commitlint -E HUSKY_GIT_PARAMS"
  }
},
```

Pronto, chegou a hora do commit. Agora vamos rodar apenas o  `git commit` e teremos este resultado:

![git-commit](/assets/captura-de-tela-2020-08-14-às-19.46.19.png "git-commit")

Após verificar os erros de `lint`, o comitizen irá nos direcionar com perguntas para criar nossa mensagem de commit. Basta ir respondendo e dando `ENTER`

![](/assets/captura-de-tela-2020-08-14-às-19.49.40.png)

Seus commits ficarão assim:

![](/assets/captura-de-tela-2020-08-14-às-19.51.13.png)

No começo não mudará muito, mas depois quando tiver uma lista grande de commits tudo organizado indicando o que cada commit resolveu, irá agradecer demais o commitizen.

### Conclusão

Me diz ai, já conhecia alguma dessas libs? Já sabia que era possível utiliza-las juntas?

Ou, tem mais alguma que gostaria de indicar? Manda aqui abaixo nos comentários.
