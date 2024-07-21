在运行构建命令时，可以这样设置环境变量：

```sh
DEBUG=search-local:\* nx build
```

如果你使用的是 Windows 系统，可以这样设置：

```sh
set DEBUG=search-local:\* && nx build

set DEBUG=search-local:* && nx run w:build
```

在 Vercel 上设置 DEBUG=search-local:\* 环境变量，可以通过以下步骤实现：

1.  在项目根目录创建 .env 文件：
    在你的项目根目录下创建一个名为 .env 的文件，并在其中添加以下内容：

```sh
DEBUG=search-local:/*
```

1.  在 Vercel 项目设置中添加环境变量：
    • 登录到你的 Vercel 账户并选择你的项目。

• 进入项目的设置页面，找到 Environment Variables 部分。

• 添加一个新的环境变量，名称为 DEBUG，值为 search-local:\*。

1.  部署项目：
    • 确保你的项目配置文件（如 vercel.json）正确无误，然后重新部署你的项目。

这样，Vercel 在构建和运行你的项目时就会使用你设置的环境变量了。如果有其他问题或需要进一步的帮助，请随时告诉我！
