---
title: "Conhecendo Jekyll"
description: Problemas com plugins do WordPress NUNCA MAIS. Jekyll, o melhor gerador de site estático feito para desenvolvedores.
image: "/assets/img/posts/bg-conhecendo-jekyll.png"
category: "Front-End"
date: 2018-04-04 00:00:01
tags:
  - Jekyll
  - HTML
  - Site
  - Blog
  - Github
twitter_text: Problemas com plugins do WordPress NUNCA MAIS. Jekyll, o melhor gerador de site estático feito para desenvolvedores.
---

Confesso que sempre que falavam de Blog, na minha cabeça vinha a imagem do [WordPress](https://br.wordpress.com/). Longe de mim julga-lo, já fiz diversos temas e trabalhos com esse CMS.
Porém, sempre ficava inseguro quanto sua performance por conta de plugins e etc.

Quando comecei a inspecionar alguns blog's de uns desenvolvedores que gosto, tomei um susto. Como um desenvolvedor faz um blog em html?

Comecei a pesquisar, pois não era possível um desenvolvedor fazer o famoso `Ctrl C` `Ctrl V`.

Achei o **[Jekyll](http://jekyllrb.com)** !

### Jekyll

**Jekyll** atualmente é o gerador estático com maior número de stars no gitHub. Caso queira ver a lista [clique aqui](https://www.staticgen.com/).

> Ah, mas se for só para gerar um site estático, eu uso o dreamwaver.

Ótimo, então use o dreamwaver e não me enche. Não vou tentar te convencer. (rsrs)

Brincadeiras a parte, vou deixar aqui um artigo do **Willian Justen** [Por que usar jekyll ?](https://willianjusten.com.br/por-que-usar-jekyll/)

### Instalação

O Jekyll é feito em **Ruby** então você terá que instala-lo antes. Como uso **Linux**, não tive problemas com isso.

Agora, se você usa **Windows**, toma vergonha na cara! (rs). Mas para não dizer que sou mal, leia isso [Jekyll Windows - Juthilo](http://jekyll-windows.juthilo.com/).

Na própria [documentação](https://jekyllrb.com/) mostra o quanto é simples instala-lo.

Em seu terminal, rode:

```bash
gem install jekyll bundler #instala o Jekyll
jekyll new meu-site #Inicia um novo site
cd meu-site
bundle exec jekyll serve #Rodando sua aplicação no ambiente de desenvolvimento
```

### Estrutura de pastas

- **\_includes**: São partes do site que será repetido em todo site. Como por exemplo: **footer**, **navbar**, **header**.
- **\_layouts**: Precisa explicar? Arquivos para estrutura básica do site. Basicamente 3 tipos:
  - **default**: Página inicial ou listagem dos posts.
  - **page**: Páginas do seu site.
  - **post**: Página de posts.
- **\_posts**: Será onde você colocará arquivo contendo seus artigos. O padrão arquivo é MarkDown (`md`). O nome desse arquivo deve ser `YYYY-mm-dd-titulo-do-post.md`
- **\_sass**: Caso use `SASS`, coloque seus arquivos nesta pasta e o próprio **Jekyll** compilará para você.
- **css**: Pasta que irá os arquivos `SASS` após compilar.
- **\_config.yml**: Arquivo de configuração do seu Blog/Site.
- **index.html**: A página inicial do seu blog.
- **about.md**: O Jekyll irá criar uma pagina `about` de acordo com o layout do arquivo `_layouts/page`.
- **feed.xml**: Arquivo para gerar o Feed do seu Blog/site.

### Subindo seu Blog/site

Já aprendemos sobre a estrutura de pastas. Como somos "bons programadores" e muito criativos, criar layouts em **HTML5** e **CSS3** não foi problema.
Chegou a hora de colocarmos em produção.
Existem 2 formas de subirmos. A primeira e mais utilizadas pelos desenvolvedores é utilizando o Github Pages como hospedagem. Basta dar seu `git push` para o git fazer o **deploy**. Não vou explicar sobre o Github Pages, mas para ajudar leia este artigo: [Dominio proprio no Github Pages](https://willianjusten.com.br/dominio-proprio-no-github-pages/)

A segunda forma é dar o comando em seu terminal `bundle exec jekyll build`. Você notará que surgirá uma pasta **\_site**. Basta copiar todos arquivos e subir para seu servidor.

Pronto, seu blog está em produção. Simples assim.

E aí, gostou desta dica? Comente ai embaixo e vamos trocar uma ideia.
