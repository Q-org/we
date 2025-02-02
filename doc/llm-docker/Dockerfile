# 使用官方 Python 镜像作为基础镜像
FROM python

# 设置工作目录
WORKDIR /app

# 复制项目文件到容器中
COPY . /app

# 安装依赖
RUN pip install --no-cache-dir -r requirements.txt

# 暴露端口（如果需要）
EXPOSE 5000

# 设置环境变量
ENV MODEL_PATH=/app/models/llm_model

# 运行命令
CMD ["python", "app.py"]