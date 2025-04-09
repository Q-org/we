(() => {
  function beforeFunction() {
    console.log("Running before the main function");
  }

  function afterFunction() {
    console.log("Running after the main function");
  }

  const handler = {
    apply: function (target, thisArg, argumentsList) {
      beforeFunction();
      console.log(`调用了函数: ${target.name}`);
      // 在这里，thisArg 就是原始函数调用的上下文
      const result = target.apply(thisArg, argumentsList);
      afterFunction();
      return result;
    },
  };

  const testObject = {
    testMethod() {
      console.log(this); // 这里的 this 将引用 testObject
      console.log("hello".toUpperCase());
    },
  };

  // 使用代理包装 testObject.testMethod
  const proxiedTestMethod = new Proxy(testObject.testMethod, handler);

  proxiedTestMethod.call(testObject); // 使用 call 方法指定上下文为 testObject
})();
