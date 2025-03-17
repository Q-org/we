# 使用本地已有的 Ubuntu 24.04 镜像
FROM ubuntu:24.04 

# 切换国内源（可选，提高 apt 速度）
RUN sed -i 's|http://archive.ubuntu.com/ubuntu|http://mirrors.aliyun.com/ubuntu|g' /etc/apt/sources.list \
    && sed -i 's|http://security.ubuntu.com/ubuntu|http://mirrors.aliyun.com/ubuntu|g' /etc/apt/sources.list

# 更新包管理器并安装 Redis
RUN apt update && apt install -y redis-server && rm -rf /var/lib/apt/lists/*

# 复制本地 Redis 配置文件（如果有的话）
COPY redis.conf /etc/redis/redis.conf

# 运行 Redis
CMD ["redis-server", "/etc/redis/redis.conf"]
