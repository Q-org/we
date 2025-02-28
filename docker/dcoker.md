# 问题

```text
不管 是 pull  或  build
都会 出现  : no space left on device
"data-root": "E:\\docker\\root",
E:\docker\wsl\DockerDesktopWSL\main\ext4.vhdx： Docker Desktop 的 WSL2 后端虚拟磁盘，限制为 1TB。
E:\ubuntu\ext4.vhdx： Ubuntu WSL2 发行版的虚拟磁盘，限制为 1TB。
E:\： 物理磁盘 E 盘，剩余空间约为 9TB。

Get-VHD -Path "E:\\docker\\wsl\\DockerDesktopWSL\\main\\ext4.vhdx" | Select-Object Path, VhdFormat, VhdType, FileSize, Size

```

```bash
#  Docker 数据目录设置
docker info | Select-String "Docker Root Dir"
docker info | grep "Docker Root Dir"
# restart
sudo service docker restart
# ubuntu-jammy-wsl-amd64-wsl.rootfs.tar
PS D:\dev\wei> wsl --import Ubuntu "E:\ubuntu" "E:\Users\Administrator\Downloads\ubuntu-jammy-wsl-amd64-wsl.rootfs.tar.gz" --version 2
docker save -o f:/images/algolia-docsearch-scraper.tar algolia/docsearch-scraper:latest

```

### 🔍 **验证 Docker 是否在 WSL2 中运行**

1. **检查 Docker 是否运行：**  
   在 WSL2 中打开 Ubuntu 终端，并执行以下命令，确认 Docker 服务正在运行：

   ```bash
   docker info | grep "Server Version"
   ```

   你应该看到类似以下的输出，表示 Docker 正在运行：

   ```plaintext
   Server Version: 27.5.1
   ```

2. **验证 Docker Root Dir：**  
   确认 Docker 数据目录设置为 `/var/lib/docker`，可以使用：

   ```bash
   docker info | grep "Docker Root Dir"
   ```

   你应该看到：

   ```plaintext
   Docker Root Dir: /var/lib/docker
   ```

3. **查看 Docker 状态：**  
   运行以下命令来确认 Docker 守护进程是否在 WSL2 中正常运行：

   ```bash
   sudo service docker status
   ```

   或者：

   ```bash
   sudo systemctl status docker
   ```

   如果服务正常运行，应该显示 `active (running)`。

4. **检查容器是否正常运行：**  
   尝试运行一个简单的容器：

   ```bash
   docker run --rm hello-world
   ```

   如果 Docker 正常运行，你应该看到类似以下的输出：

   ```plaintext
   Hello from Docker!
   This message shows that your installation appears to be working correctly.
   ```

5. **查看 Docker 进程：**  
   查看 Docker 守护进程是否在运行：

   ```bash
   ps aux | grep dockerd
   ```

   如果在 WSL2 中运行，应该能看到 `dockerd` 进程。

---

### ✅ **总结**

通过以上步骤，你可以验证 Docker 是否在 WSL2 中成功运行。如果遇到任何问题，请告诉我具体错误或输出，我会帮助你进一步排查！😊
