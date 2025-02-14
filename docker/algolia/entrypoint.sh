#!/bin/bash
# entrypoint.sh

# 从config.json 读取配置,并设置环境变量
export CONFIG=$(cat /app/config.json | jq -r tostring)

# 从.env读取配置
set -a
source /app/.env
set +a

# 执行 DocSearch 启动命令
algolia-docsearch
