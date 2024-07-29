1. 解析 HTML 为 HAST
   使用 hast-util-from-parse5 将 HTML 解析为 HAST：

```js
import { fromParse5 } from "hast-util-from-parse5";
import parse5 from "parse5";

const html = `
<html>
<body>
<script>
console.log('Hello, world!');
</script>
</body>
</html>
`;

const hastTree = fromParse5(parse5.parse(html));
console.log(hastTree);
```

2. 提取并解析 <script> 内容为 ESTree
   使用 acorn 将 <script> 标签中的 JavaScript 代码解析为 ESTree：

```js
import { parse } from "acorn";

function extractScriptContent(hastTree) {
  const scriptNode = hastTree.children[0].children.find(
    (node) => node.tagName === "script",
  );
  return scriptNode ? scriptNode.children[0].value : "";
}

const scriptContent = extractScriptContent(hastTree);
const estree = parse(scriptContent, { ecmaVersion: 2020 });
console.log(estree);
```

3. 结合使用
   将上述步骤结合起来，您可以解析 HTML 并提取 <script> 标签中的 JavaScript 代码，分别生成 HAST 和 ESTree：

```js
import { fromParse5 } from "hast-util-from-parse5";
import parse5 from "parse5";
import { parse } from "acorn";

const html = `

<html>
<body>
<script>
console.log('Hello, world!');
</script>
</body>
</html>
`;

const hastTree = fromParse5(parse5.parse(html));
console.log("HAST Tree:", hastTree);

const scriptContent = extractScriptContent(hastTree);
const estree = parse(scriptContent, { ecmaVersion: 2020 });
console.log("ESTree:", estree);

function extractScriptContent(hastTree) {
  const scriptNode = hastTree.children[0].children.find(
    (node) => node.tagName === "script",
  );
  return scriptNode ? scriptNode.children[0].value : "";
}
```

1. 配置 Babel 以支持 JSX
   首先，确保您的项目配置了 Babel 以支持 JSX 转换。您可以在 .babelrc 或 babel.config.js 中添加以下配置：

```json
{
  "presets": ["@babel/preset-react"],
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      { "pragma": "h", "pragmaFrag": "Fragment" }
    ]
  ]
}
```

2. 使用 jsx-rtc 进行实时编译
   在开发过程中，您可以使用 jsx-rtc 进行实时编译。以下是一个简单的示例：

```js
import { render } from "react-dom";
import { jsx } from "jsx-rtc";

const App = () => (
  <div>
    <h1>Hello, world!</h1>
  </div>
);

render(jsx(App), document.getElementById("root"));
```

3. 使用 estree-util-build-jsx 进行构建
   在构建过程中，您可以使用 estree-util-build-jsx 将 JSX 转换为函数调用。以下是一个示例：

```js
import { buildJsx } from "estree-util-build-jsx";
import { parse } from "acorn";
import { generate } from "astring";

// 示例 JSX 代码
const jsxCode = `
const App = () => (

<div>
<h1>Hello, world!</h1>
</div>
);
`;

// 解析 JSX 代码为 ESTree 语法树
const tree = parse(jsxCode, {
  ecmaVersion: 2020,
  sourceType: "module",
  plugins: { jsx: true },
});

// 转换 JSX 节点为函数调用
const transformedTree = buildJsx(tree, { pragma: "h", pragmaFrag: "Fragment" });

// 生成 JavaScript 代码
const outputCode = generate(transformedTree);

console.log(outputCode);
```

4. 结合使用
   您可以在开发过程中使用 jsx-rtc 进行实时编译，并在构建过程中使用 estree-util-build-jsx 进行转换。这样可以确保在开发和构建过程中都能正确处理 JSX 代码。

```

```
