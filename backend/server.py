from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ルートエンドポイント
@app.route('/')
def hello():
    return 'Hello from Flask!'

# 数値を二倍にするエンドポイント
@app.route('/double', methods=['POST'])
def double():
    data = request.get_json()
    number = data.get('number')
    if number is not None:
        result = number * 2
        return jsonify({'result': result})
    else:
        return jsonify({'error': 'No number provided'}), 400

if __name__ == '__main__':
    app.run(port=5000)