# python3 仮想環境のアクティベート
source venv/bin/activate

# 環境要求の更新
pip freeze > requirements.txt

# サーバー起動
flask --app server.py run





git log --all --graph --oneline --decorate