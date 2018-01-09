* cnpm install
* npm run dev
### 浏览器默认样式

  - ul,ol有上下magrin，padding-left
  - dl有上下margin，dd有padding-left
  - h1~h6、p 有上下margin
  - 表单元素有默认的字体大小和字体样式
  - input默认有上下padding,有border
  - textarea 有padding ,border
  - a标签有默认样式
  - table里的td有默认padding
```css
body {
  display: block;
    margin: 8px;
}
ol {
    display: block;
    list-style-type: decimal;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;//padding-left:40px
}
dl {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
input, textarea, select, button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 13.3333px Arial;
}
textarea {
    font-family: monospace;
    border-color: rgb(169, 169, 169);
    background-color: white;
    -webkit-rtl-ordering: logical;
    user-select: text;
    flex-direction: column;
    resize: auto;
    cursor: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    border-width: 1px;
    border-style: solid;
    border-color: initial;
    border-image: initial;
    padding: 2px;
}
a {
  color:rgb(0, 0, 238);
  cursor:auto;
  text-decoration:underline;
}
lable {
  dispaly:inline;
  cursor:default;
}
```

