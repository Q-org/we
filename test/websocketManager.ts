class WebSocketManager {
  private client: WebSocket;
  private isOpen = false;

  constructor(url: string) {
    this.client = new WebSocket(url);
    this.setupListeners();
  }

  private setupListeners() {
    this.client.addEventListener("open", (event) => {
      console.log("Connection opened:", event);
      this.isOpen = true;
    });

    this.client.addEventListener("message", (event) => {
      console.log("Message from server:", event.data);
    });

    this.client.addEventListener("close", (event) => {
      console.log("Connection closed:", event);
      this.isOpen = false;
    });

    this.client.addEventListener("error", (event) => {
      console.error("WebSocket error:", event);
    });
  }

  public sendMessage(data: any) {
    if (this.isOpen) {
      this.client.send(JSON.stringify(data));
    } else {
      console.error("WebSocket is not open.");
    }
  }

  public closeConnection() {
    if (this.isOpen) {
      this.client.close();
    }
  }
}

// 导出 WebSocketManager 实例
const url = "ws://localhost:8765";
const wsManager: WebSocketManager = new WebSocketManager(url);
export default wsManager;
