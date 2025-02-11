# src\doc\llm-docker\Dockerfile
# 使用Python 3.9镜像
FROM python:3.9.21

# 设置工作目录
WORKDIR /app

# 复制当前目录内容到工作目录
COPY . /app

# 安装依赖
RUN pip install --no-cache-dir -r requirements.txt

# 暴露端口
EXPOSE 5000

# 设置环境变量以指向Hugging Face模型
ENV MODEL_PATH=gpt2

# 启动Flask应用
CMD ["python", "app.py"]
