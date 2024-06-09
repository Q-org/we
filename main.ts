import { v4 as uuidv4 } from "uuid";
import PubSub from "pubsub-js";

class WebSocketManager {
  static client: WebSocket;
  static isOpen: boolean = false;
  static messageQueue: any[] = [];
  static responseResolvers: Map<number, (value: any) => void> = new Map();
  static messageIdCounter: number = 0;

  static initialize(url: string) {
    WebSocketManager.client = new WebSocket(url);
    WebSocketManager.setupListeners();
  }

  static setupListeners() {
    WebSocketManager.client.addEventListener("open", (event) => {
      console.log("Connection opened:", event);
      WebSocketManager.isOpen = true;
      // Send queued messages
      WebSocketManager.messageQueue.forEach((message) =>
        WebSocketManager.client.send(message),
      );
      WebSocketManager.messageQueue = [];
    });

    WebSocketManager.client.addEventListener("message", (event) => {
      const response = JSON.parse(event.data);
      // // 发布响应事件
      // PubSub.publishSync(response.id, response);
      console.log(
        response.id, // id 是字符串
        WebSocketManager.responseResolvers.has(response.id), // 是true
        event.data, // 又有结果
      );
      if (response.id && WebSocketManager.responseResolvers.has(response.id)) {
        WebSocketManager.responseResolvers.get(response.id)!(response);
        WebSocketManager.responseResolvers.delete(response.id);
      } else {
        console.log("Message from server:", event.data);
      }
    });

    WebSocketManager.client.addEventListener("close", (event) => {
      console.log("Connection closed:", event);
      WebSocketManager.isOpen = false;
    });

    WebSocketManager.client.addEventListener("error", (event) => {
      console.error("WebSocket error:", event);
    });
  }
  /*  */

  static sendMessage(data) {
    return new Promise((resolve, reject) => {
      const messageId = uuidv4();
      data.id = messageId;
      const message = JSON.stringify(data);

      if (WebSocketManager.isOpen) {
        WebSocketManager.client.send(message);
        // 订阅响应事件
        const token = PubSub.subscribe(messageId, (msg, response) => {
          resolve(response);
          WebSocketManager.closeConnection();
          PubSub.unsubscribe(token); // 取消订阅
        });
      } else {
        console.log("WebSocket is not open. Message queued.");
        WebSocketManager.messageQueue.push(message);
      }

      // setTimeout(() => {
      //   if (PubSub.publishSync(messageId, { error: "Response timed out" })) {
      //     reject(new Error("Response timed out"));
      //     WebSocketManager.closeConnection();
      //   }
      // }, 5000);
    }).then((re) => console.log(11111111111111111111, re));
  }

  static closeConnection() {
    if (WebSocketManager.isOpen) {
      WebSocketManager.client.close();
    }
  }
}

// 使用静态类
WebSocketManager.initialize("ws://localhost:8765");

// 示例使用
(async () => {
  const result1 = await WebSocketManager.sendMessage({
    func: "replace",
    pattern: "\\d+",
    subject: "abc123def456",
    replacement: "X",
  });
  console.log("Result 1:", result1);

  const result2 = await WebSocketManager.sendMessage({
    func: "replace",
    pattern: "\\d+",
    subject: "123abc",
    replacement: "X",
  });
  console.log("Result 2:", result2);

  const result3 = await WebSocketManager.sendMessage({
    func: "replace",
    pattern: "\\d+",
    subject: "123abc",
    replacement: "X",
  });
  console.log("Result 3:", result3);
})();
