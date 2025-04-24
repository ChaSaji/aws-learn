# Python の公式イメージを使う（最新版のスリム版）
FROM amazonlinux:2

RUN amazon-linux-extras install postgresql14

# # 作業ディレクトリを作って移動
# WORKDIR /app

# # カレントディレクトリのファイルを全部コンテナにコピー
# COPY . /app

# # コンテナ起動時に HTTP サーバーを起動する
# CMD ["python3", "-m", "http.server", "8000"]

# docker build -t python-http .      # イメージをビルド

# コンテナを起動（どっちか）
# docker run -p 8000:8000 python-http # フォアグラウンドで起動
# docker run -d -p 8000:8000 python-http # バックグラウンドで起動

# コンテナに入る
# docker exec -i -t python-http bash


# apt update
# apt install -y lsof net-tools
# lsof -i :8000
