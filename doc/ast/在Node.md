在Node.js中打开浏览器，你可以使用几种不同的方法。以下是一些常用的方法：

1.  使用 open 包：

```js
var open = require("open");

// 使用默认浏览器打开
open("http://www.example.com");

// 使用指定浏览器打开，例如Firefox
open("http://www.example.com", { app: "firefox" });
```

1.  使用 child_process 模块：

```js
var exec = require("child_process").exec;

// 使用默认浏览器打开
exec("start http://www.example.com");

// 使用指定浏览器打开，例如Chrome
exec("start chrome http://www.example.com");
```

1.  自定义封装函数：

```js
var exec = require("child_process").exec;
var os = require("os");
var path = require("path");

function openBrowser(url) {
  var command;
  switch (os.platform()) {
    case "darwin":
      command = "open";
      break;
    case "win32":
      command = "start";
      break;
    case "linux":
      command = "xdg-open";
      break;
    default:
      throw new Error("不支持的操作系统");
  }
  exec(`${command} ${url}`);
}

// 使用此函数打开浏览器
openBrowser("http://www.example.com");
```
