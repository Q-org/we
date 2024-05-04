function asyncTask() {
  console.log('1 - Start of async task');

  // 在微任务队列中添加一个任务
  queueMicrotask(() => {
    console.log('2 - Microtask executed');
  });

  console.log('3 - End of async task');
}
(async () => {
  console.log('0 - Before calling asyncTask');

  // 调用 asyncTask，该函数内部添加了一个微任务
  await asyncTask();

  console.log('After calling asyncTask');
})();

function asyncOperation() {
  return new Promise((resolve, reject) => {
    // 模拟异步操作
    queueMicrotask(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(randomNumber);
      } else {
        reject(new Error('Random number is less than 0.5'));
      }
    });
  });
}

console.log('Before async operation');

// 调用异步操作

(async () => {
  console.log('0-After async operation');
  asyncOperation()
    .then((result) => {
      console.log('1 - Async operation succeeded:', result);
    })
    .catch((error) => {
      console.error('2  - Async operation failed:', error);
    });
})();
// 下一个事件循环的微任务阶段执行微任务
