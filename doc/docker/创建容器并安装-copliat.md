# 创建容器并安装

使用Docker来创建容器并安装MariaDB可以通过以下步骤实现：

## copilat

### **1. 安装Docker**

如果你还没有安装Docker，可以通过以下命令安装Docker（适用于Ubuntu系统）：

```bash
sudo apt-get update
sudo apt-get install -y docker.io

lsb_release -a

PS D:\dev\wei> 

```

### **2. 创建Dockerfile**

创建一个名为`Dockerfile`的文件，用于定义Docker容器的配置。内容如下：

```Dockerfile
# 使用官方的Ubuntu基础镜像
FROM ubuntu

# 更新软件包和安装依赖项
RUN apt-get update && apt-get install -y \
    wget \
    libaio1 \
    libncurses5 \
    libtinfo5 \
    && apt-get clean

# 下载并解压MariaDB
# https://dlm.mariadb.com/1920008/MariaDB/mariadb-10.6.5/bintar-linux-systemd-x86_64/mariadb-10.6.5-linux-systemd-x86_64.tar.gz
RUN wget https://dlm.mariadb.com/1920008/MariaDB/mariadb-10.6.5/bintar-linux-systemd-x86_64/mariadb-10.6.5-linux-systemd-x86_64.tar.gz \
    && tar -xzf mariadb-10.6.5-linux-systemd-x86_64.tar.gz -C /usr/local

# 设置环境变量
ENV PATH="/usr/local/mariadb-10.6.5-linux-systemd-x86_64/bin:${PATH}"

# 启动MariaDB服务
CMD ["mysqld_safe"]
```

### **3. 构建Docker镜像**

在Dockerfile所在目录下运行以下命令来构建Docker镜像：

```bash
docker build -t mariadb-10.6.5 .
```

### **4. 创建并运行Docker容器**

运行以下命令来创建并启动MariaDB容器：

```bash
docker run -d --name mariadb -e MYSQL_ROOT_PASSWORD=你的密码 mariadb-10.6.5
```

### **5. 连接到MariaDB容器**

运行以下命令连接到MariaDB容器：

```bash
docker exec -it mariadb bash
```

然后你可以通过以下命令启动MariaDB：

```bash
mysql -u root -p
```

这样，你就可以在Docker容器中成功安装并运行MariaDB 10.6.5了！希望这些步骤能帮助你实现目标。如果你有其他问题或需要进一步的帮助，请告诉我！
