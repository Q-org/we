import { createRxDatabase, addRxPlugin } from "rxdb/plugins/core";
// 确保您已经安装了 rxdb 和对应的存储适配器插件
import { getRxStorageIndexedDB } from "rxdb-premium/plugins/storage-indexeddb"; // 正确的导入路径

// 添加 RxDB 插件
addRxPlugin(getRxStorageIndexedDB);

// 初始化 RxDB 数据库
let dbPromise: Promise<any> | null = null;

/**
 * 初始化并返回RxDB数据库实例的Promise。
 * 如果数据库已经初始化，则返回现有的Promise实例。
 * 如果无法连接到MongoDB，则使用IndexedDB作为本地存储，并创建数据库。
 *
 * @returns {Promise<RxDatabase>} 返回RxDB数据库实例的Promise。
 */
export const initDatabase = async () => {
  if (!dbPromise) {
    dbPromise = createRxDatabase({
      name: "ratingsdb",
      storage: getRxStorageIndexedDB(), // 使用 IndexedDB 作为存储
      ignoreDuplicate: true,
    })
      .then(async (db) => {
        // 创建一个新的集合
        const ratingsCollection = await db.addCollections({
          ratings: {
            schema: {
              title: "ratings schema",
              version: 0,
              type: "object",
              properties: {
                id: {
                  type: "string",
                  primary: true, // 对象字面量只能指定已知属性，并且“primary”不在类型“TopLevelProperty”中。ts(2353)
                },
                rating: {
                  type: "number",
                },
                timestamp: {
                  type: "string",
                },
              },
              required: ["id", "rating", "timestamp"],
            },
          },
        });
        return db; // 返回数据库实例
      })
      .catch((error) => {
        console.error("Failed to initialize database:", error);
        throw error;
      });
  }
  return dbPromise;
};

// 解决 primary 属性问题
// 关于 primary 属性的问题，确保你使用的是正确的 RxDB 版本，并且你的 schema 配置正确。以下是一个示例 schema 配置：

const ratingsSchema = {
  title: "ratings schema",
  version: 0,
  type: "object",
  properties: {
    id: {
      type: "string",
      primary: true, // 确保 RxDB 版本支持 primary 属性
    },
    rating: {
      type: "number",
    },
    timestamp: {
      type: "string",
    },
  },
  required: ["id", "rating", "timestamp"],
};
