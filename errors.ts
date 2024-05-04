import { MariaDbConnector } from "@wei/maria/src/lib/maria";
import Errors from "@wei/types/src/lib/types/Errors";
import Decorator from "@wei/types/src/lib/types/Decorator";
import { trace } from "console";

(() => {
  const decorator = new Decorator("toUpperCase");
  // 准备

  // 定义一个测试函数
  function testFunction(arg: string) {
    return arg.toUpperCase();
  }
  //@ts-ignore

  Decorator.callers = [testFunction, "caller2"];
  Decorator.doNothing = false;

  Decorator.afterCallback = (func: Function, result: unknown, args: any[]) => {
    console.log(`_____________`, result);
  };
  // 调用原始方法
  const result = testFunction("hello");
  console.log(global.queueMicrotask);
  // 断言
  // expect(result).toBe("HELLO");
})();
