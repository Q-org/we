import Errors from "@wei/types/src/lib/types/Errors";

describe("Decorator", () => {
  it("should ", () => {});
  it("Decorator ,原型 ", () => {
    const somefunc = () => {
      // 这里不做任何改动
      const str = "Hello, World!";
      //@ts-ignore
      console.log(str.replace("World", "TypeScript"));
    };
    class Decorator {
      static #funcName: string;
      static #callers: string[] = [];
      static #currentCaller: string;
      static doNothing: boolean = true;
      static #decoraterFunction: string[] = ["somefunc"];
      static #originalFunction;

      constructor(funcName: string = "replace") {
        Decorator.#funcName = funcName;
      }
      static set currentCaller(value: unknown) {
        if (value && typeof value === "string") {
          Decorator.#currentCaller = value;
        }
      }

      static get currentCaller(): string {
        return Decorator.#currentCaller;
      }
      static get callers(): string[] {
        return Decorator.#callers;
      }

      static set callers(value: string[] | string) {
        if (value) {
          let uniqueValues: any[] = [];
          // Convert to array if it's a string
          value = typeof value === "string" ? [value] : value;
          // Filter out duplicates
          uniqueValues = Array.from(new Set([...value, ...Decorator.#callers]));
          Decorator.#callers = uniqueValues;
        }
      }
      static get decoraterFunction(): string[] {
        return Decorator.#decoraterFunction;
      }

      static set decoraterFunction(value: string[] | string) {
        if (value) {
          value =
            typeof value === "string"
              ? [value]
              : Array.isArray(value)
                ? value
                : [];
          Decorator.#decoraterFunction = [
            ...value,
            ...Decorator.#decoraterFunction,
          ];
        }
      }
      // 检查传入的函数是否是允许的调用者之一
      static isNeedDecorator = (functionName: string | unknown): boolean => {
        if (typeof functionName === "string" && functionName) {
          return Decorator.#decoraterFunction.includes(functionName);
        }
        return false;
      };
      static isNotNeed = (functionName: string | undefined): boolean =>
        Decorator.isNeedDecorator(functionName);

      static beforeMethod = (func: Function, args: any[]) => {
        console.log(
          `${Decorator.#funcName || "beforeMethod"} called with arguments: ${args.join(", ")}`,
        );
      };

      static afterMethod(func: Function, result: unknown, args: any[]) {
        console.log(`${Decorator.#funcName || "afterMethod"} esult: ${result}`);
      }
      static getCaller = (
        error: Error | null | unknown = null,
      ): string | undefined => {
        // 假设 Errors 类存在并且有 getCaller 方法
        Decorator.currentCaller = Errors.getCaller(
          error,
          2,
          Decorator.#originalFunction,
        );
        return;
      };
      // 静态方法，用于创建装饰器
      static createDecorator(func: Function) {
        return function (this: String, ...args: any[]) {
          const callers = Decorator.doNothing ? null : Decorator.getCaller();

          if (!callers || Decorator.isNotNeed(callers)) {
            const result = Decorator.#originalFunction.apply(this, args);
            return result;
          }
          try {
            Decorator.beforeMethod(func, args);

            const result = func.apply(this, args);

            Decorator.afterMethod(func, result, args);

            return result;
          } catch (e: Error | any) {
            console.error(e);
            Errors.throw(e);
          }
        };
      }

      // 应用装饰器到指定方法
      apply() {
        Decorator.#originalFunction = String.prototype[Decorator.#funcName];
        String.prototype[Decorator.#funcName] = Decorator.createDecorator(
          Decorator.#originalFunction,
        );
      }

      // 恢复原始函数
      static restore() {
        if (Decorator.#originalFunction) {
          String.prototype[Decorator.#funcName] = Decorator.#originalFunction;
        }
      }
    }

    // 使用示例
    const decorator = new Decorator();
    decorator.apply();

    somefunc();

    const moreFunction = () => {
      somefunc();
      const str = "Hello, World!";
      str.replace("World", "TypeS-cript");
    };
    moreFunction();
    Decorator.restore();
  });
  // it("trace ", () => {
  //   function firstFunction() {
  //     secondFunction();
  //   }

  //   function secondFunction() {
  //     thirdFunction();
  //   }

  //   function thirdFunction() {
  //     console.trace();
  //   }

  //   firstFunction();
  // });

  // it("should ", () => {
  //   // 方法装饰器
  //   function Log(
  //     target: any,
  //     propertyKey: string,
  //     descriptor: PropertyDescriptor,
  //   ) {
  //     const originalMethod = descriptor.value;

  //     descriptor.value = function (...args: any[]) {
  //       console.log(`Calling "${propertyKey}" with`, args);
  //       const result = originalMethod.apply(this, args);
  //       console.log(`"${propertyKey}" returned`, result);
  //       return result;
  //     };
  //   }

  //   class MyClass {
  //     @Log
  //     multiply(x: number, y: number): number {
  //       return x * y;
  //     }
  //   }

  //   const myClassInstance = new MyClass();
  //   console.log(myClassInstance.multiply(5, 3));
  // });
  // it("StringProxy ", () => {
  //   class StringProxy {
  //     // 定义replace方法的类型签名
  //     newFunc: (searchValue: string | RegExp, replaceValue: string) => string;

  //     constructor() {
  //       // 创建一个代理来增强String.prototype.replace
  //       this.newFunc = StringProxy.createProxy(String.prototype.replace);
  //     }

  //     static createProxy(
  //       target: typeof String.prototype.replace,
  //     ): (searchValue: string | RegExp, replaceValue: string) => string {
  //       return new Proxy(target, {
  //         apply: function (target, thisArg, args) {
  //           console.log(`Called with args: ${args.join(", ")}`);
  //           //@ts-ignore
  //           const result = target.apply(thisArg, args);
  //           console.log(`Result: ${result}`);
  //           return result;
  //         },
  //       });
  //     }
  //   }

  //   // 使用代理执行replace方法
  //   const stringProxy = new StringProxy();
  //   const str = "Hello, World!";
  //   console.log(stringProxy.newFunc.call(str, "World", "Proxy"));
  // });
});
