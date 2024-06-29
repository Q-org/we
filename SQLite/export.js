// <!-- 这里是一个简单的示例代码，展示如何导出和导入数据库： -->

// 创建一个新的数据库实例
const db = new SQL.Database();

// 执行一些数据库操作
db.run('CREATE TABLE test (col1, col2);');
db.run("INSERT INTO test VALUES (1, 'foo'), (2, 'bar');");

// 导出数据库
const databaseBlob = db.export();
// 将 Blob 对象转换为 ArrayBuffer，然后保存到本地存储
const reader = new FileReader();
reader.onload = function () {
  // 假设使用 localStorage 进行保存
  localStorage.setItem('SqlDb', reader.result);
};
reader.readAsArrayBuffer(databaseBlob);

// 在新会话中导入数据库
const savedDatabase = localStorage.getItem('SqlDb');
if (savedDatabase) {
  // 将保存的数据转换为 Uint8Array
  const dbBuffer = new Uint8Array(savedDatabase);
  // 导入数据库
  const db = new SQL.Database(dbBuffer);
  // 现在您可以继续使用数据库了
}

const fs = require('fs');

// 创建一个新的数据库实例
const sqlDb = new SQL.Database();
// 执行一些数据库操作
sqlDb.run('CREATE TABLE test (col1, col2);');
sqlDb.run("INSERT INTO test VALUES (1, 'foo'), (2, 'bar');");

// 导出数据库
const databaseBuffer = sqlDb.export();
// 将 Buffer 对象转换为 Node.js Buffer，然后保存到文件系统
fs.writeFile('SqlDb.db', Buffer.from(databaseBuffer), (err) => {
  if (err) throw err;
  console.log('数据库已保存到文件系统');
});

// 在新会话中导入数据库
fs.readFile('SqlDb.db', (err, data) => {
  if (err) throw err;
  // 导入数据库
  const sqlDb = new SQL.Database(data);
  // 现在您可以继续使用数据库了
});

// 使用 IndexedDB:

// 打开 IndexedDB 数据库
const openRequest = indexedDB.open('SqlDb', 1);

openRequest.onupgradeneeded = function (e) {
  const db = e.target.result;
  db.createObjectStore('databases', { autoIncrement: true });
};

openRequest.onsuccess = function (e) {
  const db = e.target.result;

  const transaction = db.transaction('databases', 'readwrite');
  const store = transaction.objectStore('databases');

  // 创建一个新的数据库实例
  const sqlDb = new SQL.Database();
  // 执行一些数据库操作
  sqlDb.run('CREATE TABLE test (col1, col2);');
  sqlDb.run("INSERT INTO test VALUES (1, 'foo'), (2, 'bar');");

  // 导出数据库
  const databaseBuffer = sqlDb.export();
  const databaseBlob = new Blob([databaseBuffer]);

  // 保存到 IndexedDB
  const request = store.put(databaseBlob);
  request.onsuccess = function () {
    console.log('数据库已保存到 IndexedDB');
  };
};

openRequest.onerror = function (e) {
  console.error('IndexedDB 错误:', e.target.error);
};
