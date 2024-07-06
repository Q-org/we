import PouchDB from "pouchdb";
// C:\dev\wei\libs\forage\src\lib\pouchdb.ts
// const db = new PouchDB("todos"); // 本地数据库

import PouchDBAuth from "pouchdb-authentication";
PouchDB.plugin(PouchDBAuth);

import Pdb from "@wei/forage/src/lib/pouchdb";
describe("PouchDB of the group", () => {
  fit("should PouchDB server", async () => {
    const remoteDB = new PouchDB("http://127.0.0.1:91/wei");
    const localDB = new PouchDB("wei");
    remoteDB.logIn("qio", "qio", function (err, response) {
      if (err) {
        if (err.name === "unauthorized") {
          // 用户名或密码错误
          console.error("用户名或密码不正确");
        } else {
          // 其他错误
          console.error("登录失败", err);
        }
      } else {
        console.log("登录成功");
        localDB
          .sync(remoteDB, { live: true })
          .on("change", function (change) {
            console.log("同步更改", change);
          })
          .on("error", function (err) {
            console.error("同步失败", err);
          });
      }
    });
  });
  it("should PouchDB server", async () => {
    let db, remoteDb;
    try {
      db = new PouchDB("wei");
      // remoteDb = new PouchDB("http://127.0.0.1:91/wei");
    } catch (e) {
      console.error(e);
      // await db.destroy();
      // db = new PouchDB("wei");
    }

    const todo = {
      _id: Pdb.date(),
      title: "Learn PouchDB",
      completed: false,
    };

    try {
      const response = await db.put(todo);
      // const response1 = await remoteDb.put(todo);
      console.log("Successfully posted a todo!", response);
      await Pdb.close(db);
      // await remoteDb.close(remoteDb);
    } catch (err) {
      console.error("Error during test", err);
    }
  });
  it("should timeZone ", () => {
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let date = new Date();
    expect(date.toISOString()).not.toBe(Pdb.getLocaleTime(date));
    // console.log(date.toISOString(), Pdb.getLocaleTime(date));
    expect(Pdb.getTimeZone()).toBe(timeZone);
    // console.log(timeZone);
  });

  it("should init  nothing todo ", () => {
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dd = new PouchDB("todos");
  });
  it("should sync local and remote databases", async () => {
    const localDb = new PouchDB("todos"); // 本地数据库

    const remoteDb = new PouchDB("http://127.0.0.1:91/todos", {
      fetch: function (url, opts) {
        // 设置超时时间为20秒
        //@ts-ignore
        opts.timeout = 10000; // 单位为毫秒

        // 使用默认的 fetch 函数来执行请求
        return PouchDB.fetch(url, opts);
      },
    });

    // 启动本地和远程数据库的同步
    let syncHandler: PouchDB.Replication.Sync<{}> | any = null; // 初始化为 null

    try {
      syncHandler = await localDb.sync(remoteDb, {
        live: true, // 持续同步
        retry: true, // 如果同步失败则重试
      });
    } catch (err) {
      console.error("无法连接远程数据库，切换到本地数据库：", err);
      // 切换到本地数据库
      syncHandler = await localDb.sync(localDb, {
        live: true,
        retry: true,
      });
    }

    // 检查 syncHandler 是否为 null
    if (syncHandler) {
      // 监听同步事件
      syncHandler
        .on("change", (info) => {
          console.log("同步变化：", info);
        })
        .on("paused", (err) => {
          console.log("同步暂停：", err);
        })
        .on("active", () => {
          console.log("同步恢复");
        })
        .on("denied", (err) => {
          console.error("同步被拒绝：", err);
        })
        .on("complete", (info) => {
          console.log("同步完成：", info);
        })
        .on("error", (err) => {
          console.error("同步错误：", err);
        });
    } else {
      console.error("syncHandler 为 null，无法监听同步事件。");
    }

    // 向本地数据库添加文档
    const todo = {
      _id: new Date().toISOString(),
      title: "Learn PouchDB",
      completed: false,
    };

    try {
      const response = await localDb.put(todo);
      console.log("成功添加到本地数据库！", response);
    } catch (err) {
      console.error("添加到本地数据库时出错：", err);
    }
  }, 20000); // 设置 Jest 测试的超时时间为60秒，以确保足够的时间完成测试操作

  xit("should connect to PouchDB  somthing wrang ", async () => {
    let db;
    try {
      // 尝试连接到远程数据库
      db = new PouchDB("todos");
      await db.info(); // 确保这个异步操作完成
      console.log("远程数据库连接成功。");
    } catch (err) {
      if (err?.["code"] === "ECONNREFUSED") {
        console.error("远程数据库连接失败，检查本地数据库。", err);
        // 检查本地数据库是否存在
        const localDb = new PouchDB("todos");
        try {
          await localDb.info();
          console.log("本地数据库已存在。");
          db = localDb;
        } catch (localErr) {
          if (localErr?.["status"] === 404) {
            console.log("本地数据库不存在，创建新的本地数据库。");
            db = localDb; // 创建新的本地数据库
          } else {
            console.error("检查本地数据库时发生错误。", localErr);
            db = localDb; // 创建新的本地数据库
          }
        }
      } else {
        console.error("发生未知错误。", err);
      }
    }

    const todo = {
      _id: new Date().toISOString(),
      title: "Learn PouchDB",
      completed: false,
    };
    try {
      const response = await db.put(todo);
      console.log("Successfully posted a todo!", response);
    } catch (err) {
      console.error("Error during test", err);
    }
  });

  it("should  db 是否存在 ", async () => {
    const dbName = "todos";
    let result = await Pdb.isExist(dbName);
    expect(result).toBe(false);
    // console.log(result);
  });
  it("should todos", async () => {
    const db = new PouchDB("todos");
    const todo = {
      _id: Pdb.date(),
      title: "Learn PouchDB",
      completed: false,
    };

    try {
      const response = await db.put(todo);
      console.log("Successfully posted a todo!", response);
      // await Pdb.printAllDocuments();

      // 当您完成数据库操作并希望关闭连接时
      await Pdb.close(db);
      // await db.destroy();
    } catch (err) {
      console.error("Error during test", err);
    }
  });
});
