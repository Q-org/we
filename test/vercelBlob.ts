const BLOB_READ_WRITE_TOKEN =
  "vercel_blob_rw_BXVPBiaayA1ob3zr_JjX7bmqJokC5Mrf9WlDJGtwMA3UFbB";

import { put } from "@vercel/blob";

// 要上传的 JSON 数据
const jsonData = { key1: "value1", key2: "value2" };

// 将 JSON 数据转换为字符串
const jsonString = JSON.stringify(jsonData);
(async () => {
  // 上传 JSON 字符串到 Blob 存储
  const { url } = await put(
    "https://vecel.asia/articles/data.jsonarticles/data.json",
    jsonString,
    {
      access: "public",
      token: BLOB_READ_WRITE_TOKEN, // 在这里传递 token
    },
  );

  // 输出上传后文件的 URL
  console.log("File URL:", url);
})();

// 错误信息表明，Vercel Blob 需要一个访问令牌（token）来进行写操作。你可以通过两种方式提供这个令牌：

// 1.
// 环境变量：在你的开发环境中设置一个名为 BLOB_READ_WRITE_TOKEN 的环境变量。这个变量应该包含你从 Vercel 获取的 Blob 存储的读写令牌。
// 2.
// 函数参数：在调用 put 函数时，作为参数传递一个 token。这个 token 应该是你从 Vercel 获取的 Blob 存储的读写令牌。

// 如果你选择使用环境变量，你可以在你的操作系统中设置它，或者在项目的 .env 文件中定义它。如果你使用的是 Node.js，你可以使用 dotenv 包来加载 .env 文件中的环境变量。
