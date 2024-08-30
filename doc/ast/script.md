<script> 标签有几种不同的类型，主要通过 type 属性来区分。以下是一些常见的类型：

1. 经典脚本（Classic Script）：
•  默认类型，如果没有指定 type 属性，浏览器会将其视为 JavaScript。

•  例如：
# 示例文档

这是一个包含 JSON 数据的 HTML `<script>` 标签：

```html
<script type="application/json">
{"name": "Alice", "age": 25}
</script>

````
1.  模块脚本（Module Script）：
    • 使用 type="module" 来指定，这是用于 ES6 模块。

• 例如：

<script type="module">
import { myFunction } from './myModule.js';
myFunction();
</script>

1.  JSON 数据块（JSON Data Block）：
    • 使用 type="application/json" 来指定，用于嵌入 JSON 数据。

• 例如：

```html
<script type="application/json">
  { "name": "Alice", "age": 25 }
</script>
````

1.  导入映射（Import Map）：
    • 使用 type="importmap" 来指定，用于定义模块的导入映射。

• 例如：

<script type="importmap">
{
"imports": {
"lodash": "/path/to/lodash.js"
}
}
</script>

1.  推测规则（Speculation Rules）：
    • 使用 type="speculationrules" 来指定，用于定义浏览器的预加载和预取规则。

• 例如：

<script type="speculationrules">
{
"prerender": [
{ "source": "list", "urls": ["/next-page.html"] }
]
}
</script>

这些类型通过 type 属性来区分，允许浏览器正确解析和执行不同类型的脚本https://www.w3schools.com/Tags/tag_script.asphttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/scripthttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type.

如果

```

```
