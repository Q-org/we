# src\doc\docker\Dockerfile
# 使用官方的Ubuntu基础镜像
FROM ubuntu:20.04

# 更新软件包和安装依赖项
RUN apt-get update && apt-get install -y \
    wget \
    libaio1 \
    libncurses5 \
    libtinfo5 \
    net-tools \
    mariadb-client \
    && apt-get clean

# 下载并解压MariaDB
RUN wget https://dlm.mariadb.com/1920008/MariaDB/mariadb-10.6.5/bintar-linux-systemd-x86_64/mariadb-10.6.5-linux-systemd-x86_64.tar.gz \
    && tar -xzf mariadb-10.6.5-linux-systemd-x86_64.tar.gz -C /usr/local

# 设置环境变量
ENV PATH="/usr/local/mariadb-10.6.5-linux-systemd-x86_64/bin:${PATH}"
ENV MARIADB_ROOT_PASSWORD="123"

# 创建数据目录
# RUN mkdir -p /var/lib/mysql  # 移除，数据目录将从宿主机挂载

# 复制初始化脚本和 Galera 启动脚本
COPY docker-entrypoint.sh /usr/local/bin/
COPY galera-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh  /usr/local/bin/galera-entrypoint.sh

# 暴露端口
EXPOSE 3306 4567 4568 4444 
# Galera 端口

# 设置启动命令
CMD ["galera-entrypoint.sh"]