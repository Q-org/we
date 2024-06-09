class WebSocketManager {
  private static client: WebSocket;
  private static isOpen: boolean = false;
  private static messageQueue: any[] = [];
  private static responseResolvers: Map<number, (value: any) => void> = new Map();
  private static messageIdCounter: number = 0;

  public static initialize(url: string) {
    WebSocketManager.client = new WebSocket(url);
    WebSocketManager.setupListeners();
  }

  private static setupListeners() {
    WebSocketManager.client.addEventListener("open", (event) => {
      console.log("Connection opened:", event);
      WebSocketManager.isOpen = true;
      // Send queued messages
      WebSocketManager.messageQueue.forEach((message) => WebSocketManager.client.send(message));
      WebSocketManager.messageQueue = [];
    });

    WebSocketManager.client.addEventListener("message", (event) => {
      const response = JSON.parse(event.data);
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

  public static sendMessage(data: any): Promise<any> {
    if (!data.id) {
      data.id = WebSocketManager.messageIdCounter++;
    }
    const message = JSON.stringify(data);

    if (WebSocketManager.isOpen) {
      WebSocketManager.client.send(message);
    } else {
      console.log("WebSocket is not open. Message queued.");
      WebSocketManager.messageQueue.push(message);
    }

    return new Promise((resolve) => {
      WebSocketManager.responseResolvers.set(data.id, resolve);
    });
  }

  public static closeConnection() {
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
})();
