import styled from 'styled-components';


const background = '#282A36';
const comment =    '#6272A4';
const foreground = '#F8F8F2';
const selection =  '#44475A';

const cyan =       '#8BE9FD';
const green =      '#50FA7B';
const orange =     '#FFB86C';
const pink =       '#FF79C6';
const purple =     '#BD93F9';
const red =        '#FF5555';
const yellow =     '#F1FA8C';

/* Transparency */

/** 30% of transparency **/
const background30 = '#282A3633';
const comment30 =    '#6272A433';
const foreground30 = '#F8F8F233';
const selection30 =  '#44475A33';

const cyan30 =       '#8BE9FD33';
const green30 =      '#50FA7B33';
const orange30 =     '#FFB86C33';
const pink30 =       '#FF79C633';
const purple30 =     '#BD93F933';
const red30 =        '#FF555533';
const yellow30 =     '#F1FA8C33';

/** 40% of transparency **/
const background40 = '#282A3666';
const comment40 =    '#6272A466';
const foreground40 = '#F8F8F266';
const selection40 =  '#44475A66';

const cyan40 =       '#8BE9FD66';
const green40 =      '#50FA7B66';
const orange40 =     '#FFB86C66';
const pink40 =       '#FF79C666';
const purple40 =     '#BD93F966';
const red40 =        '#FF555566';
const yellow40 =     '#F1FA8C66';



export const Container = styled.div`

  pre::-webkit-scrollbar 
  {
    width: 14px;
  }

  pre::-webkit-scrollbar-track 
  {
    background-color: ${comment};
    border-radius: 0px;
  }

  pre::-webkit-scrollbar-thumb 
  {
    background-color: ${purple};
    border-radius: 0px;
  }

  /* Selection */

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection 
  {
    text-shadow: none;
    background-color: ${selection};
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection 
  {
    text-shadow: none;
    background-color: ${selection};
  }

  /* Line numbers */

  pre.line-numbers 
  {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }

  pre.line-numbers > code 
  {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows 
  {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line-numbers-rows > span 
  {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before 
  {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }

  /* Toolbar for copying */

  div.code-toolbar 
  {
    position: relative;
  }

  div.code-toolbar > .toolbar 
  {
    position: absolute;
    top: 0.3em;
    right: 0.2em;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  div.code-toolbar:hover > .toolbar 
  {
    opacity: 1;
  }

  div.code-toolbar > .toolbar .toolbar-item 
  {
    display: inline-block;
    padding-right: 20px;
  }

  div.code-toolbar > .toolbar a 
  {
    cursor: pointer;
  }

  div.code-toolbar > .toolbar button 
  {
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-user-select: none; /* for button */
    -moz-user-select: none;
    -ms-user-select: none;
  }

  div.code-toolbar > .toolbar a,
  div.code-toolbar > .toolbar button,
  div.code-toolbar > .toolbar span 
  {
    color: ${foreground};
    font-size: 0.8em;
    padding: 0.5em;
    background: ${comment};
    border-radius: 0.5em;
  }

  div.code-toolbar > .toolbar a:hover,
  div.code-toolbar > .toolbar a:focus,
  div.code-toolbar > .toolbar button:hover,
  div.code-toolbar > .toolbar button:focus,
  div.code-toolbar > .toolbar span:hover,
  div.code-toolbar > .toolbar span:focus 
  {
    color: inherit;
    text-decoration: none;
    background-color: ${green};
  }

  /* Remove text shadow for printing */

  @media print 
  {
    code[class*="language-"],
    pre[class*="language-"] 
    {
      text-shadow: none;
    }
  }

  code[class*="language-"],
  pre[class*="language-"] 
  {
    color: ${foreground};
    background: ${background};
    text-shadow: none;
    font-family: PT Mono, Consolas, Monaco, "Andale Mono", "Ubuntu Mono",
      monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */

  pre[class*="language-"] 
  {
    background: ${background};
    border-radius: 0.5em;
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    height: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] 
  {
    background: ${background};
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] 
  {
    padding: 4px 7px;
    border-radius: 0.3em;
    white-space: normal;
  }

  /* Code box limit */

  .limit-300
  {
    height: 300px !important;
  }

  .limit-300
  {
    height: 400px !important;
  }

  .limit-500
  {
    height: 500px !important;
  }

  .limit-600
  {
    height: 600px !important;
  }

  .limit-700
  {
    height: 700px !important;
  }

  .limit-800
  {
    height: 800px !important;
  }

  .language-css
  {
    color: ${purple};
  }

  .token 
  {
    color: ${pink};
  }

  .language-css .token 
  {
    color: ${pink};
  }

  .token.script
  {
    color: ${foreground};
  }

  .token.bold 
  {
    font-weight: bold;
  }

  .token.italic 
  {
    font-style: italic;
  }

  .token.atrule, .token.attr-name, .token.attr-value 
  {
    color: ${green};
  }

  .language-css .token.atrule 
  {
    color: ${purple};
  }

  .language-html .token.attr-value, .language-markup .token.attr-value 
  {
    color: ${yellow};
  }

  .token.boolean 
  {
    color: ${purple};
  }

  .token.builtin, .token.class-name 
  {
    color: ${cyan};
  }

  .token.comment 
  {
    color: ${comment};
  }

  .token.constant 
  {
    color: ${purple};
  }

  .language-javascript .token.constant 
  {
    color: ${orange};
    font-style: italic;
  }

  .token.entity 
  {
    color: ${pink};
  }

  .language-css .token.entity 
  {
    color: ${green};
  }

  .language-html .token.entity.named-entity
  {
    color: ${purple};
  }

  .language-html .token.entity:not(.named-entity) 
  {
    color: ${pink};
  }

  .language-markup .token.entity.named-entity
  {
    color: ${purple};
  }

  .language-markup .token.entity:not(.named-entity) 
  {
    color: ${pink};
  }

  .token.function 
  {
    color: ${green};
  }

  .language-css .token.function 
  {
    color: ${cyan};
  }

  .token.important, .token.keyword 
  {
    color: ${pink};
  }

  .token.prolog 
  {
    color: ${foreground};
  }

  .token.property 
  {
    color: ${orange};
  }

  .language-css .token.property 
  {
    color: ${cyan};
  }

  .token.punctuation 
  {
    color: ${pink};
  }

  .language-css .token.punctuation
  {
    color: ${orange};
  }

  .language-html .token.punctuation, .language-markup .token.punctuation 
  {
    color: ${foreground};
  }

  .token.selector 
  {
    color: ${pink};
  }

  .language-css .token.selector 
  {
    color: ${green};
  }

  .token.regex 
  {
    color: ${red};
  }

  .language-css .token.rule:not(.atrule)
  {
    color: ${foreground};
  }

  .token.string 
  {
    color: ${yellow};
  }

  .token.tag 
  {
    color: ${pink};
  }

  .token.url 
  {
    color: ${cyan};
  }

  .language-css .token.url 
  {
    color: ${orange};
  }

  .token.variable 
  {
    color: ${comment};
  }

  .token.number 
  {
    color: rgba(189, 147, 249, 1);
  }

  .token.operator 
  {
    color: rgba(139, 233, 253, 1);
  }

  .token.char 
  {
    color: rgba(255, 135, 157, 1);
  }

  .token.symbol 
  {
    color: rgba(255, 184, 108, 1);
  }

  .token.deleted 
  {
    color: #e2777a;
  }

  .token.namespace 
  {
    color: #e2777a;
  }

  /* Line Highlighter */

  .highlight-line
  {
    color: inherit;
    display: inline-block;
    text-decoration: none;

    border-radius: 4px;
    padding: 2px 10px;
  }

  .highlight-line:empty:before
  {
    content: " ";
  }

  .highlight-line:not(:last-child)
  {
    min-width: 100%;
  }

  .highlight-line .highlight-line:not(:last-child)
  {
    min-width: 0;
  }

  .highlight-line-isdir
  {
    color: ${foreground};
    background$-color: ${selection30});
  }

  .highlight-line-active
  {
    background$-color: ${comment30});
  }

  .highlight-line-add
  {
    background$-color: ${green});
  }

  .highlight-line-remove
  {
    background$-color: ${red});
  }
 
`;
