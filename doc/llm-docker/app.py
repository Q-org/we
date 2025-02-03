from flask import Flask, request, jsonify
from transformers import pipeline
import os
import logging
import transformers
import torch

# 配置 logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)
app = Flask(__name__)

# 加载模型并使用环境变量
MODEL_PATH = os.environ.get("MODEL_PATH", "gpt-2")
model = None


def load_model():
    global model
    try:
        logging.info(f"transformers version: {transformers.__version__}")
        logging.info(f"torch version: {torch.__version__}")
        model = pipeline("text-generation", model=MODEL_PATH)
        logging.info(f"Model loaded successfully from {MODEL_PATH}")
    except Exception as e:
        logging.error(f"Failed to load model from {MODEL_PATH}: {e}")


# 初始化时加载模型
load_model()


@app.route("/generate", methods=["POST"])
def generate():
    if model is None:
        return jsonify({"error": "Model loading failed"}), 500
    try:
        data = request.get_json()
        if not data or "prompt" not in data:
            return jsonify({"error": "Please provide a prompt in JSON format."}), 400
        prompt = data.get("prompt", "")
        if len(prompt) > 200:
            return jsonify({"error": "Prompt is too long. Maximum length is 200."}), 400
        output = model(prompt, max_length=50, num_return_sequences=1)
        return jsonify(output)
    except Exception as e:
        logging.error(f"Error during text generation: {e}")
        return jsonify({"error": "An error occurred during text generation."}), 500


@app.route("/health", methods=["GET"])
def health():
    if model is not None:
        return jsonify({"status": "healthy"}), 200
    else:
        return jsonify({"status": "unhealthy"}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
