it("should found Errors", async () => {
  const Errors = await import("@wei/types/src/lib/types/Errors");
  const { Modules } = await import("@wei/types/src/lib/types/Errors");
  // console.log(Errors, Modules);
});
it("should  parseAcorn ", async () => {
  const acorn = await import("acorn").then((amodule) => amodule);
  const escodegen = await import("escodegen").then((amodule) => amodule);

  const code = `
// 这是一个单行注释
/*
这是一个多行注释
*/
const x = 42; // 这是另一个单行注释
`;

  const comments = [];
  const ast = await Esast.parseAcorn(code);
  console.log(JSON.stringify(ast));
  // 确保访问的是 VariableDeclaration 类型的节点

  // if (variableDeclaration) {
  //   variableDeclaration.declarations[0].init.value = 100;
  // }

  // // 将注释添加回 AST
  // escodegen.attachComments(ast, comments, ast.tokens);

  // // 生成代码时保留注释
  // const generatedCode = escodegen.generate(ast, { comment: true });

  // console.log(generatedCode);
});
it("should bilbil ", async () => {
  const uid = "123456"; //替换为目标用户的UID
  const url = String.raw`https://api.bilibili.com/x/space/acc/info?mid=${uid}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
});
it("should stringfy vs string()", () => {
  let text: unknown = 123 + 321;
  expect(`${text}`).toEqual(JSON.stringify(text));
  text = { a: 1, b: 3 };
  console.log(text);
  // expect(`${text}`).toEqual(JSON.stringify(text));
  text = "123";
  console.log(text);
  expect(`${text}`).toEqual(JSON.stringify(text));
});
