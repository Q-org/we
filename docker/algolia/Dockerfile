FROM algolia/docsearch-scraper

# 安装 jq
RUN apt-get update && apt-get install -y jq

# 将 config.json 文件复制到镜像中
COPY config.json /app/config.json

# 修改入口点脚本，使其从文件中读取配置
RUN sed -i "s/run_config(environ['CONFIG'])/run_config('\/app\/config.json')/g" /root/src/index.py
