import { MariaDbConnector } from "@wei/maria/src/lib/maria";
import Errors from "@wei/types/src/lib/types/Errors";
import Decorator from "@wei/types/src/lib/types/Decorator";
import { trace } from "console";

(() => {
  const removeWhitespace =(hast)=> {
    //
  }
  // 准备
  Decorator.callers = ["allowedCaller"];
  Decorator.doNothing = false;

  // 定义一个测试函数
  function testFunction(arg: string) {
    return arg.toUpperCase();
  }

  // 应用装饰器
  const originalMethod = testFunction;
  // 使用示例
  const decorator = new Decorator();
  // decorator.apply();
  // 调用原始方法
  const result = originalMethod("hello");
})();


  const removeWhitespace =(hast)=> {
    //
  }