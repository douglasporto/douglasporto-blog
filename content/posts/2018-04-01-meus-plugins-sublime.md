---
title: "Meus Plugins Sublime"
description: Os plugins que mais gosto do Sublime Text 3.
image: "/assets/img/posts/bg-meus-plugins-sublime.png"
featuredImage: image/bg-meus-plugins-sublime.png
category: "DEV"
date: 2018-04-01 00:00:01
tags:
  - Sublime
  - Editor
  - Desenvolvimento
twitter_text: Os plugins que mais gosto do Sublime Text 3.
---

Por mais root que seja, hoje é difícil encontrar um programador que não use um editor mais elegante, não é mesmo?

Bloco de notas, TextPad, entre outros, já ficaram para trás a muuuito tempo.

### Sublime Text

Já tentei usar vários outros editores, [Atom](https://atom.io/), [Eclipse](https://www.eclipse.org/downloads/), [VisualStudio](https://www.visualstudio.com), mas nenhum deles me deixou mais satisfeito que o **[Sublime Text](https://www.sublimetext.com)** que hoje esta na sua **3 versão**.

O que mais me atrai nele é o quanto ele é leve, mesmo intalando plugins para nos ajudar.

Claro, se para você um dos que citei acima é melhor, continue com ele. Afinal, não existe o **Melhor Editor** e sim o melhor editor para **VOCÊ**!

Vamos para de papo furado e vamos falar do plugins que mais uso e gosto do Sublime.

### Material Theme

![Material](https://camo.githubusercontent.com/972bd5d93779fdaf95e02cf0326b429be93adcba/687474703a2f2f692e696d6775722e636f6d2f395079784a4d4e2e676966)

Este plugin é capaz de deixar seu **Sublime** com um visual incrível.

Na [Documentação](https://github.com/equinusocio/material-theme) é possível ver todas as modificações que você poderá ser feita.

Vou deixar aqui o como costumo deixar o meu.

```javascript
  "color_scheme": "Packages/Material Theme/schemes/Material-Theme.tmTheme",
  "theme": "Material-Theme.sublime-theme",
  "material_theme_accent_blue": true,
  "material_theme_accent_scrollbars": true,
  "material_theme_accent_titlebar": true,
  "material_theme_arrow_folders": false,
  "material_theme_big_fileicons": true,
  "material_theme_bold_tab": true,
  "material_theme_bright_scrollbars": false,
  "material_theme_bullet_tree_indicator": true,
  "material_theme_compact_panel": true,
  "material_theme_compact_sidebar": false,
  "material_theme_contrast_mode": false,
  "material_theme_disable_fileicons": false,
  "material_theme_disable_folder_animation": true,
  "material_theme_disable_tree_indicator": true,
  "material_theme_panel_separator": false,
  "material_theme_small_statusbar": true,
  "material_theme_small_tab": true,
  "material_theme_tabs_autowidth": true,
  "material_theme_tabs_separator": true,
  "material_theme_titlebar": true,
  "material_theme_tree_headings": true,
  "show_full_path": true,
  "translate_tabs_to_spaces": true,
  "always_show_minimap_viewport" : true,
  "bold_folder_labels"           : true,
  "font_options"                 : ["gray_antialias", "subpixel_antialias"], // On retina Mac & Windows
  "indent_guide_options"         : ["draw_normal", "draw_active"], // Highlight active indent
  "line_padding_bottom"          : 3,
  "line_padding_top"             : 3,
  "overlay_scroll_bars"          : "enabled",
```

### Emmet

Se você é um desenvolvedor Web, Este maravilhoso plugin irá diminuir e muito seu tempo. Afinal, quem nunca precisou escrever varias `<div>`, ou numa `<table>`, precisou escrever varias `<tr>` e `<td>`?

Digamos que você precise escrever isso:

```html
<div class="row">
  <div class="col-md-3"></div>
  <div class="col-md-3"></div>
  <div class="col-md-3"></div>
  <div class="col-md-3"></div>
</div>
```

Com o [Emmet]() basta digitar `div.row>div.col-md-3*4` e depois clicar no `TAB`.

### Alignment

Este plugin é para desenvolvedores que assim como eu, gosta de deixar o código bem alinhado.

Como assim?

Vou dar um exemplo:

```php
  $a = 1;
  $abc = 5;
  $abcd = 3;
  $ab = 8;
```

Com o [Alignment](https://packagecontrol.io/packages/Alignment) basta selecionar todas as linhas e clicar em `Ctrl + Alt + A` e seu código ficará assim:

```php
  $a    = 1;
  $abc  = 5;
  $abcd = 3;
  $ab   = 8;
```

### Wakatime

Este último na verdade não é um Plugin que vai lhe ajudar na hora de programar. o [Wakatime](https://wakatime.com/) é uma ferramenta que metrifica tudo que você faz no seu editor, como projetos que trabalhou, linguagens que usou, horas gastas, etc.

### Outros plugins

Bom, para finalizar, existem diversos plugins com Snippets para facilitar na hora do auto-complete.
Se está escrevendo em PHP, procure "php snippets", se precisa daquela ajuda em com classes do bootstrap, procure 'Bootstrap snippets'.

É isso aí galera! Este são alguns dos Plugins que uso.

E aí, qual você indicaria?

Dúvidas ou sugestão? [Vamos bater um papo](/contato)
