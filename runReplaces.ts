const { PythonShell } = require("python-shell");

// import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
// 客户端代码
// 默认数据
const DATA = {
  // id: uuidv4(), // 使用UUID生成唯一ID
  func: "replace",
  pattern: "\\d+",
  subject: "abc123def456",
  replacement: "X",
};
// import { io } from "socket.io-client";
// const io = require("socket.io-client");

// class Io extends io {
//   constructor(server) {
//     super(server); // 调用父类的构造函数
//   }
// }
const io = require("socket.io-client");
const socket = new io("http://localhost:8765");

// socket.disconnect();

const sendAckEcho = async (...args) => {
  let _socket = socket ?? undefined;
  const { v4: uuidv4 } = await import(
    /* webpackChunkName: 'basychunk' */ "uuid"
  );
  return _socket
    .emitWithAck("echo", {
      id: uuidv4(),
      args,
    })
    .then((response) => {
      let result = response?.result;
      console.log(response);
      return result;
    })
    .catch((error) => {
      console.error(`send failed ${error?.messages ?? error}`);
    });
};

(async () => {
  console.log(io);
  socket.on("connect", async () => {
    console.log("Socket connected, can now emit messages");
    let result = await socket.emitWithAck("echo", [1]).then((response) => {
      console.log(response);
      return response;
    });
    let reuslt1 = await sendAckEcho([1, 2, 3]);
    // 现在可以安全地发送消息
    socket
      .emitWithAck("messageAck", {
        id: uuidv4(),
        ...DATA,
      })
      .then((response) => {
        console.log(response);
        // socket.disconnect();
      })
      .catch((error) => {
        console.error("Emit failed or timed out", error);
      });

    socket
      .emitWithAck("messageAck", {
        id: uuidv4(),
        ...DATA,
      })
      .then((response) => {
        console.log(response);
        // socket.disconnect();
      })
      .catch((error) => {
        console.error("Emit failed or timed out", error);
      });
  });
})();

// const connecter = connectWebSocket("ws://localhost:8765");
// const startTime = performance.now();
// let result = await connecter();
// const endTime = performance.now();
// const elapsedTime = endTime - startTime;
// console.log("连接 WebSocket 所需的时间:", elapsedTime, "毫秒");
// console.log("Result:", result);
