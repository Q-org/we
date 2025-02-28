# 使用 Python 官方基础镜像  docker load -i E:\images\python_3.9_slim.tar
# 使用 Python 官方基础镜像
FROM python:3.6-alpine

# 设置工作目录
WORKDIR /app

# 更新 apk 仓库索引并安装必要的工具和依赖
RUN apk update \
    && apk add --no-cache git build-base libffi-dev openssl-dev

# 安装 pipenv
RUN pip install pipenv

# 克隆仓库
RUN git clone https://github.com/algolia/docsearch-scraper.git .

# 安装项目依赖，指定 Python 解释器路径
RUN pipenv install --python /usr/local/bin/python3.6 && pipenv install --deploy --ignore-pipfile

# 替换为你的项目启动命令
CMD ["pipenv", "run", "python", "main.py"]
