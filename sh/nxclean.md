# nx clean

要清理 Nx 的缓存，你可以使用 nx reset 命令。这个命令会清除 Nx 缓存目录中的所有本地缓存条目，并关闭 Nx Daemon。以下是一些常用的选项：

## 1.清除所有缓存并关闭 Nx Daemon

```sh
npx nx reset
```

## 2. 仅清除缓存

```sh
npx nx reset --only-cache
```

## 3. 仅关闭 Nx Daemon

```sh
npx nx reset --only-daemon
```

## 4. 仅清除工作区数

```sh
npx nx reset --only-workspace-data
```

这些命令可以帮助你清理不同类型的缓存和数据。如果你只想手动删除缓存文件夹，也可以删除 node_modules/.cache/nx 目录<https://dev.to/alexcheng1982/clear-nx-cache-3d3nhttps://nx.dev/recipes/running-tasks/skipping-cache。>
