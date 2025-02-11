# 使用 Ubuntu 20.04 作为基础镜像
FROM ubuntu:20.04

# 定义 MariaDB 版本
ARG MARIADB_VERSION=10.6.5
ARG MARIADB_PACKAGE=mariadb-${MARIADB_VERSION}-linux-systemd-x86_64

# 使用国内源（阿里云）加速软件安装
RUN sed -i 's|http://archive.ubuntu.com/ubuntu|http://mirrors.aliyun.com/ubuntu|g' /etc/apt/sources.list \
    && sed -i 's|http://security.ubuntu.com/ubuntu|http://mirrors.aliyun.com/ubuntu|g' /etc/apt/sources.list \
    && apt-get update && apt-get install -y \
    wget \
    libaio1 \
    libncurses5 \
    libtinfo5 \
    net-tools \
    mariadb-client \
    && rm -rf /var/lib/apt/lists/*

# 设置工作目录
WORKDIR /app

# 复制 MariaDB 二进制包到容器
COPY ${MARIADB_PACKAGE}.tar.gz .

# 解压 MariaDB 并删除 .tar.gz 文件
RUN tar -xzf ${MARIADB_PACKAGE}.tar.gz && rm ${MARIADB_PACKAGE}.tar.gz

# 设置环境变量
ENV MARIADB_HOME=/app/${MARIADB_PACKAGE}
ENV PATH=$PATH:${MARIADB_HOME}/bin

# 创建 MySQL 用户，并创建数据目录
RUN groupadd -r mysql && useradd -r -g mysql mysql \
    && mkdir -p /var/lib/mysql \
    && chown -R mysql:mysql /var/lib/mysql

# 不要在 `Dockerfile` 里初始化数据库
# 复制 MariaDB 配置文件 (容器默认配置)
COPY my.ini /etc/mysql/my.cnf

# 暴露 MariaDB 端口
EXPOSE 3306

# 启动 MariaDB，并指定 Windows 配置文件
CMD ["mysqld_safe", "--defaults-file=/etc/mysql/my.cnf", "--datadir=/var/lib/mysql", "--user=mysql"]
