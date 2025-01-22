# 在Windows 11上使用Docker Desktop部署MariaDB的详细指南

你可以在Windows 11上借助Docker Desktop来部署MariaDB 。以下为详细步骤：

## 一、安装Docker Desktop

确保已安装Docker Desktop。若尚未安装，请从[Docker官方网站](https://www.docker.com/products/docker-desktop/)下载并安装。

## 二、拉取MariaDB镜像

打开终端（PowerShell或CMD），运行以下命令拉取最新的MariaDB镜像：

```bash
docker pull mariadb
```

## 三、创建并运行MariaDB容器

使用以下命令创建并运行MariaDB容器：

```bash
docker run -d --name my - mariadb -p 3306:3306 -e MYSQL_ROOT_PASSWORD = my - secret - pw mariadb
```

- `-d`：以守护进程模式运行。
- `--name my - mariadb`：设置容器名称为`my - mariadb`。
- `-p 3306:3306`：将容器的3306端口映射到主机的3306端口。
- `-e MYSQL_ROOT_PASSWORD = my - secret - pw`：设置MariaDB的root用户密码。

## 四、数据持久化

为确保数据的持久性，可挂载数据卷：

```bash[[]]
docker run -d --name my - mariadb -p 3306:3306 -e MYSQL_ROOT_PASSWORD = my-secret-pw -v /path/to/data:/var/lib/mysql mariadb
```

- `-v /path/to/data:/var/lib/mysql`：将主机上的`/path/to/data`目录挂载到容器的`/var/lib/mysql`目录。

## 五、自定义配置

若需自定义MariaDB的配置，可挂载自定义的配置文件：

```bash
docker run -d --name mariadb -p 99:3306 -e MYSQL_ROOT_PASSWORD=123 -v D:\mariadbData\my.ini:/etc/mysql/my.cnf -v D:\mariadbData:/var/lib/mysql mariadb
New-NetFirewallRule -DisplayName "Allow ICMPv4-In" -Protocol ICMPv4


docker run -d --name my - mariadb -p 3306:3306 -e MYSQL_ROOT_PASSWORD = my - secret - pw -v /path/to/my.cnf:/etc/mysql/my.cnf mariadb
```

r

- `-v /path/to/my.cnf:/etc/mysql/my.cnf`：将主机上的`my.cnf`配置文件挂载到容器的`/etc/mysql/my.cnf`位置。

## 六、启动Galera集群

若需使用Galera集群，可在Docker中配置多个MariaDB容器，并设置Galera相关参数。以下是一个简单示例：

```bash
docker run -d --name galera - node1 -p 3306:3306 -e MYSQL_ROOT_PASSWORD = my - secret - pw -e WSREP_CLUSTER_ADDRESS = "gcomm://node1_ip,node2_ip,node3_ip" mariadb
docker run -d --name galera - node2 -p 3307:3306 -e MYSQL_ROOT_PASSWORD = my - secret - pw -e WSREP_CLUSTER_ADDRESS = "gcomm://node1_ip,node2_ip,node3_ip" mariadb
docker run -d --name galera - node3 -p 3308:3306 -e MYSQL_ROOT_PASSWORD = my - secret - pw -e WSREP_CLUSTER_ADDRESS = "gcomm://node1_ip,node2_ip,node3_ip" mariadb
```

这些步骤应能帮助你在Docker中成功部署MariaDB 。

## 参考资料

- [使用Docker容器化部署与配置MariaDB数据库的详细指南](https://www.oryoy.com/news/shi-yong-docker-rong-qi-hua-bu-shu-yu-pei-zhi-mariadb-shu-yu-pei-zhi-mariadb-shu-ju-ku-de-xiang-xi-zhi-nan.html)
- [通过Docker部署运行MariaDB数据库](https://www.wbolt.com/mariadb-docker.html)
- [Docker下安装MariaDB数据库](https://www.oryoy.com/news/yi-zhao-zhang-wo-mariadb-zhi-jie-an-zhuang-yu-docker-bu-shu-quan-gong-lve.html)
