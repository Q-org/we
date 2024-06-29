// 引入 PouchDB 和 IndexedDB 适配器
import PouchDB from "pouchdb";
import idbAdapter from "pouchdb-adapter-idb";

// 注册 IndexedDB 适配器
PouchDB.plugin(idbAdapter);

// 创建一个扩展 PouchDB 的自定义数据库类
class CustomDatabase extends PouchDB {
  constructor(dbName) {
    // 调用父类构造函数，并指定使用 'idb' 适配器
    super(dbName, { adapter: "idb" });
  }

  // 添加文档的异步方法
  async addDocument(doc) {
    return this.modifyDocument(doc);
  }

  // 获取文档的异步方法
  async getDocument(docId) {
    return this.modifyDocument({ _id: docId });
  }

  // 更新文档的异步方法
  async updateDocument(doc) {
    return this.modifyDocument(doc);
  }

  // 删除文档的异步方法
  async deleteDocument(docId) {
    return this.modifyDocument({ _id: docId }, true);
  }

  // 修改文档的通用方法，减少代码重复
  async modifyDocument(doc, isDelete = false) {
    try {
      if (isDelete) {
        const docToDelete = await this.get(doc._id);
        const response = await this.remove(docToDelete);
        console.log("Document deleted:", response);
        return response;
      } else {
        const response = await this.put(doc);
        const action = doc._rev ? "updated" : "added";
        console.log(`Document ${action}:`, response);
        return response;
      }
    } catch (error) {
      console.error(`Error modifying document:`, error);
      throw error;
    }
  }
}
() => {
  // 使用示例
  const db = new CustomDatabase("mydb");
  const doc = {
    _id: "example",
    title: "Hello, World!",
    content: "This is an example document.",
  };

  // 添加文档并处理响应或错误
  db.addDocument(doc)
    .then((response) => {
      // 处理响应
    })
    .catch((error) => {
      // 处理错误
    });
};
