## 環境構築
- `api`と`config`のリポジトリをクローン
  - 以下のフォルダ構成にする
  ```
  <project-name>
  ├── config // docker環境構築設定ファイル
  ├── api // Laravelプロジェクト
  ```


### 環境構築手順
- configに移動 `cd config`
- `make init`でdockerのコンテナ、serverコンテナのnginxを起動する
-  POST: `http://localhost:8080/api/auth/signin` のAPIを次のパラメータで叩き `{"email": "user@lh.sandbox","password": "pass"}` でログインする。
- http://localhost:8080 を確認
  - Laravelの初期画面が表示されればOK

### APIドキュメント
http://localhost:8888

### 操作ガイド
- 各コンテナを起動して、nginxを起動する `make start`
- データベースをリセットする `make db-fresh`
- nginxを起動する `make nginx-start`
  


Docker Desktop for Macで `Failed to get D-Bus connection: No such file or directory` 
と表示される場合は別途設定が必要

[参考](https://ufirst.jp/memo/2023/01/docker-desktop-for-mac-%E3%81%A7-%E3%80%8Cfailed-to-get-d-bus-connection-no-such-file-or-directory%E3%80%8D%E3%82%A8%E3%83%A9%E3%83%BC/)
