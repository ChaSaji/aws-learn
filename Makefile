up:
	docker-compose up

up-d:
	docker-compose up -d

# docker-compose up --build -d #イメージをビルド
up-build:
	docker-compose up -d --build

down:
	docker-compose down

stop:
	docker-compose stop

# psql -h chasaji-db -U postgres -p 5432 -d learn -P pager=off  #backendからデータベース接続
psql:
	docker exec -it chasaji-backend psql -h chasaji-db -U postgres -d learn -P pager=off

# docker ps  #起動中のコンテナを確認
# docker exec -it <CONTINER ID or NAMES> bash  #コンテナに入る
exec-db:
	docker exec -it chasaji-db bash

exec-be:
	docker exec -it chasaji-backend bash

# スキーマの更新を適用
schema:
	docker exec -it chasaji-db psql -U postgres -d learn -f /docker-entrypoint-initdb.d/schema_definition.sql

# シードデータの適用
seed:
	docker exec -it chasaji-db psql -U postgres -d learn -f /docker-entrypoint-initdb.d/seed_data.sql

