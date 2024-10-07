# Docusaurus接入动态Markdown

要在 Docusaurus 中接入动态 Markdown 内容，可以结合 Next.js 和数据库来实现。以下是一个简要的实现步骤：

##### 1. 设置 Next.js 项目

首先，创建一个新的 Next.js 项目：

```sh
npx create-next-app@latest my-blog
cd my-blog
```

2. 配置数据库
   选择一个数据库（例如 MongoDB、MySQL 等）并连接到你的 Next.js 项目。例如，使用 MongoDB 和 Mongoose：

```sh
npm install mongoose
```

在项目中创建一个数据库连接文件 db.js：

```js
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to the database");
});
module.exports = db;
```

3. 定义博客模型
   创建一个模型来定义博客文章的结构：

```sh
const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
title: String,
description: String,
content: String,
date: { type: Date, default: Date.now },
});
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
```

4. 创建 API 路由
   在 pages/api 目录下创建一个 posts.js 文件，用于从数据库中获取博客文章：

```js
import db from "../../db";
import Blog from "../../models/blog";
export default async function handler(req, res) {
  await db;
  const posts = await Blog.find({});
  res.status(200).json(posts);
}
```

5. 在 Docusaurus 中使用动态内容
   在 Docusaurus 中，你可以通过 API 请求从 Next.js 获取内容，并在页面中动态渲染。例如，使用 React 的 useEffect 钩子来获取并显示内容：

```js
import React, { useEffect, useState } from "react";
function BlogPost() {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        const post = data[0]; // 假设我们只显示第一篇文章
        setContent(post.content);
      });
  }, []);
  return (
    <div>
      <h1>My Blog Post</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
export default BlogPost;
```

6. 部署到 Vercel
   将你的 Next.js 项目部署到 Vercel：
   vercel
