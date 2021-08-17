---
layout: post
date: 2021-08-17 02:24:33
image: /assets/arq-design-react.png
title: Arquitetura e Design System para projetos em React
description: Arquitetura na prática para aquele seu projeto em react
tags:
  - Frontend
---
# Design System para React

Salve devs ✌🏾

Toda vez que iremos iniciar um novo projeto, surge as dúvidas referentes a qual pasta deve ficar cada arquivo, principalmente se você é júnior. Por conta disso hoje vou falar sobre Design System.

Já deixo claro aqui que este post não coloca aqui a melhor ou a pior forma de arquitetura de seu projeto. Apenas vou te mostrar a forma que estruturo.

Uma outra observação é que irei usar como exemplo em um projeto com [React.js](https://reactjs.org/), porém os conceitos podem ser utilizado em qualquer outro framework, até mesmo num projeto com Javascript puro (famoso vanilla js).

O design system que mais utilizo e gosto é o Atomic Design, desenvolvido por [Brad Frost](https://bradfrost.com/).

Não vou explicar muito sobre Atomic Design por meu objetivo é mostrar mesmo na prática.

Mas uma breve, muito breve mesmo, informação sobre é que essa arquitetura foi criada observando componentes químicos.

Onde encontramos 5 estágios: átomos, moléculas, organismos, modelos e paginas.

![Atomic Design](/assets/atomic-design.png "Atomic Design")

Num exemplo prático, átomos poderia ser um botão. A molécula seria esse botão (átomo) com outro átomo, talvez um icone. E assim por diante até chegarmos na maior composição que é a página.

Caso queira mais detalhes, este artigo é perfeito para você <https://vidadeproduto.com.br/atomic-design/>

### Vamos para prática

Chegou a hora de aplicarmos tudo isso no nosso projeto. 

Eu não gosto de usar as nomenclaturas oferecidas pelo atomic. Prefiro usar apenas a ideia de separação de componentes.

Primeira coisa que eu faço é deixar tudo dentro da pasta `src/`

Dentro de dela, as pastas importantes para nosso design system são:

```bash
  src/
    - Page
    - Template
    - DesignSystem
    - Components
```

### Page

Ficará apenas nossas páginas nada de styles ou coisas do tipo

```bash
  Page/
    - Index.tsx
    - About.tsx
    - Contact.tsx
```

### Template

Colocaremos os possíveis templates que teremos.

Como assim?

Num sistema, costumamos ter diferentes formas de apresentar a informação para o cliente. Como por exemplo, a estrutura de paginas do signIn e SignUp são diferentes da estrutura de páginas de uma Dashboard.

É justamente aqui que montaremos essas estruturas onde cada página irá dizer qual estrutura ela deverá ser montada.

Aqui poderemos ter styles, por isso gosto de separar por pastas os templates

```bash
  Template/
    - Auth/
      - Index.tsx
      - styles.scss
    - Dashboard/
      - Index.tsx
      - styles.scss
```

Nos próximos posts, estou querendo trazer de forma prática como fazer isso no [Next.js](https://nextjs.org/). Caso achar interessante, comenta aqui embaixo.

### DesignSystem

É aqui que a brincadeira fica cada vez mais interessante. 

Dentro desta página, ficará nossos átomos e Moléculas.

Uma boa dica para ter ideias de como separar é olhar como é feito essa separação em design system como [Material-ui](http://material-ui.com/), [Chakra-ui](https://chakra-ui.com/) e etc.

```bash
  DesignSystem/
    - Form/
      - Button/
        - Index.tsx
        - styles.scss
      - Input/
        - Index.tsx
        - styles.scss
    - System/
      - Card/
        - Index.tsx
        - styles.scss
      - Tabs/
        - Index.tsx
        - styles.scss
```

Uma outra dica, da qual aprendi com a galera do [Quinto Andar](https://www.quintoandar.com.br/) neste [video do YouTube](https://www.youtube.com/watch?v=5fM4XuMxwkA), é que mesmo usando o componentes do material-ui (ou qualquer outro) é sempre implanta-los no seu design system, nunca no projeto direto.

Exemplo:

```jsx
  import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps
  } from '@material-ui/core'

  import * as S from './styles'

  export type ButtonProps = {
    title: string
    className?: string
  } & Pick<MuiButtonProps, 'variant' | 'color'>

  export default function Button({
    title,
    className,
    variant = 'contained',
    color = 'primary'
  }: ButtonProps) {
    return (
      <S.Wrapper className={className}>
        <MuiButton color={color} variant={variant}>
          {title}
        </MuiButton>
      </S.Wrapper>
    )
  }
```

Caso futuramente o material mude alguma coisa no Button deles, basta você arrumar neste único componente seu, evitando aquela corrida de procurar em todos os lugares que colocou o Button do material-ui.

### Components

Por fim, mas não menos importante, são todos os componentes especifico de sua aplicação.

Digamos que você esta desenvolvendo um blog. Nele terá uma página mostrando os autores dele.

Então nesta página terá uma pasta especifica para os cartão do autor (AuthorCard).

```bash
  Components/
    - AuthorCard/
      - Index.tsx
      - styles.scss
```

Exemplo do nosso componente AuthorCard utilizando suas moléculas.

```jsx
  import { Card } from 'src/DesignSystem/System/Card'

  import * as S from './styles'

  export type AuthorCardProps = {
    name: string
    description?: string
  }

  export default function AuthorCard({
    title,
    description
    return (
      <Card>
        <S.Title>
          {title}
        </S.Title>
        <S.Description>
          {description}
        </S.Description>
      </Card>
    )
  }
```

Então é isso galera. Isso não é a melhor arquitetura do mundo, mas é a arquitetura que até o momento mais tem me agradado e me feito mais produtivo.

Qual você usa? Como você costuma deixar? Comenta ai e vamos trocar essas idéias.
