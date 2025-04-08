const postcss = require("postcss");
const htmlparser = require("htmlparser2");

module.exports = postcss.plugin("extract-inline-css", () => {
  return (root) => {
    // 创建一个空的 style 标签内容字符串
    let styles = "";

    // 使用 htmlparser2 解析 HTML
    const parser = new htmlparser.Parser(
      {
        onopentag(name, attribs) {
          // 当遇到带有 style 属性的标签时
          if (attribs.style) {
            // 将 style 属性的内容添加到 styles 字符串
            styles += `${attribs.style}\n`;
            // 删除原有的 style 属性
            delete attribs.style;
          }
        },
      },
      { decodeEntities: true },
    );

    // 遍历 CSS AST 中的每个注释节点
    root.walkComments((comment) => {
      // 解析注释内容作为 HTML
      parser.write(comment.text);
      parser.end();
      // 移除注释节点
      comment.remove();
    });

    // 在文档的 head 部分添加 style 标签
    root.prepend(`/*<style>${styles}</style>*/`);
  };
});
