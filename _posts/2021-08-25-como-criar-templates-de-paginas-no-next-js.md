---
title: "Como criar templates de páginas no Next.js"
excerpt: "Criando templates para páginas com Next.js"
coverImage: '/assets/img/posts/templates-next.png'
tags: ['Frontend', 'ReactJs']
date: '2021-08-25T05:35:07.322Z'
ogImage:
  url: '/assets/img/posts/templates-next.png'
twitter_text: "Criando templates para páginas com Next.js"
---
# Como criar templates de páginas no Next.js

Salve devs ✌🏾

Como prometido no texto passado, irei falar sobre como criar templates/Layout para suas páginas no [Next.js](https://nextjs.org/).

Em um sistema web é muito comum termos páginas com estruturas diferentes, um exemplo prático são as páginas de um dashboard ou admin e login.

Muito comum uma página de dashboard/admin ter um menu ao lado, um header com informações do usuário logado e N coisas diferentes da página de login, onde é mais comum apenas um formulário centralizado.

O problema é que num essa estrutura de dashboard/admin se repete em várias páginas: página de listas, página de edição do usuário e etc.
Para a estrutura do login a mesma coisa: login, cadastro, esqueci a senha e etc.

### O que fazer então?

Basta você "copiar e colocar" as mesmas coisas (header, menu, footer) em todas as páginas.
Ok, isso funciona. Mas a nossa ideia é termos um código limpo sem repetições. Então não basta apenas fazê-lo funcionar; temos que gerar códigos de fácil compreensão para um próximo dev dar manutenção.

### Como eu faço no React?

No [React.js](https://reactjs.org/) não tinha muito segredo, bastava arrumar isso nos arquivos de rota.

```bash
./index.ts
```
```js
import React from 'react';
import { Switch } from 'react-router-dom';

import DashboardLayout from '../_layout/Dashboard';
import AuthLayout from '../_layout/Auth';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} layout={AuthLayout} />
    <Route path="/dashboard" component={Dashboard} layout={DashboardLayout} />
  </Switch>
);

export default Routes;
```

```bash
./Route.ts
```
```js
import React from 'react';
import {
  RouteProps as ReactRouteProps,
  Route as ReactRoute,
} from 'react-router-dom';


interface RouteProps extends ReactRouteProps {
  component: React.ComponentType;
  layout?: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  layout: Layout
}) => {

  return (
    <ReactRoute
      {...rest}
      render={() => (
        <>
          {Layout ? (
            <Layout>
              <Component />
            </Layout>
          ) : (
            <Component />
          )}
        </>
      )}
    />
  );
};

export default Route;
```

Fácil não? Agora se você já trabalhou com o Next, sabe muito bem que no next não temos controle nas rotas. Basta criar um aquivo na pasta `pages` e teremos a rota com o mesmo nome do arquivo.

### Então como fazer no Next.js?

Vou passar aqui o passo a passo de um método que tenho feito. Lembrando que aqui não tem certo nem errado, apenas um modo diferente. Então se você faz de uma outra forma, por favor, nos fale para aprendermos uma nova forma. 😉

Primeira coisa para organizar é criar a pasta `Templates` para deixarmos tudo relacionado a isso nela.
Dentro dela vamos criar 2 templates: Um para auth (sign in, sign up etc) e um para admin (dashboard).
Gosto de criar esses arquivos desta forma `./TemplateAdmin/index.tsx` pois podemos e iremos ter arquivos de styles. Assim fica mais organizado.

` ./TemplateAdmin/index.tsx`

```js
import { ReactNode } from 'react'

type TemplateAdminProps = {
  children: ReactNode
}
export default function TemplateAdmin({ ...props }: TemplateAdminProps) {
  return (
    <>
      <header>Header da admin</header>
      <aside>Menu</aside>
      <main>
        <h1>Template Admin</h1>
        {props.children}
      </main>
      <footer>Footer da admin</footer>
    </>
  )
}
```
` ./TemplateAuth/index.tsx`
```js
import { ReactNode } from 'react'

type TemplateAuthProps = {
  children: ReactNode
}
export default function TemplateAuth({ ...props }: TemplateAuthProps) {
  return (
    <>
      <main>
        <h1>Template Auth</h1>
        {props.children}
      </main>
      <footer>Footer</footer>
    </>
  )
}
```

Agora poderemos criar por exemplo o componente `Header` e apenas importa-lo no template admin. Da mesma forma o `Footer`, `Navbar` e etc.

Ainda dentro da pasta `.Templates` vamos criar o arquivo `TemplateWrapper.tsx` que será nosso aquivo principal.

` ./TemplateWrapper.tsx`
```js
import { AppProps } from 'next/dist/next-server/lib/router/router'
import TemplateAdmin from './TemplateAdmin'
import TemplateAuth from './TemplateAuth'

type TemplateWrapperProps = AppProps & {
  layout?: 'auth' | 'admin'
}

export default function TemplateWrapper({
  layout,
  ...props
}: TemplateWrapperProps) {
  switch (layout) {
    case 'admin':
      return <TemplateAdmin>{props.children}</TemplateAdmin>
      break
    case 'auth':
      return <TemplateAuth>{props.children}</TemplateAuth>
      break
    default:
      return <>{props.children}</>
      break
  }
}
```

Bom, neste arquivo receberemos por `props` qual o template deverá ser renderizado na tela.
Colocando em `switch` pois poderemos ter 2, 3, x templates diferentes.

No nosso arquivo `pages/_app.tsx`, nosso arquivo principal das páginas do next.js, vamos renderizar nosso `TemplateWrapper.tsx`

```js
...
import TemplateWrapper from 'Template/TemplateWrapper'

function App({ Component, pageProps }: AppProps) {
  ...
    <TemplateWrapper {...pageProps}>
      <Component {...pageProps} />
    </TemplateWrapper>
  ...
}

export default App
```

Pronto, nossa lógica de templates esta criada. Basta em nosso arquivo de página, mandarmos nossa `prop layout`

Mas, vou colocar na prática, bora lá!

`pages/sign-in.tsx`

```js
...
export default function SignIn() {
  ...
}

export const getInitialProps = () => {
  return {
    layout: 'auth'
  }
}
```

Agora vamos criar nossa página de dashboard também, porém para mudarmos, ao invés de ser uma página com `getInitialProps`, vamos criar uma com SSR.

`pages/dashboard.tsx`

```js
...
export default function Dashboard() {
  ...
}

export const getServerSideProps = () => {
  return {
    props: {
      layout: 'admin'
    }
  }
}

```

Reparem que no `getServerSideProps` no `return` precisamos colocar nosso prop `layout` dentro do objeto `props`.

É isso galera, basta aplicar nas suas próximas páginas e ser feliz 😁. Caso queira ver, subi este tutorial no meu [GitHub](https://github.com/douglasporto/next-with-template) aproveita e me segue lá 😅.

Você faz de outra forma? Achou algum problema nessa solução? Da aquele help e compartilha conosco. 🤗
