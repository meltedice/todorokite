Todorokite
====

[English](./README.md)

Todorokite は React + Rails を使用した TODO アプリケーションです。

## ディレクトリ構成

* client/ React のフロントエンドアプリケーション
* docs/   API ドキュメント
* server/ Rails のサーバーサイドアプリケーション

## Installing / Getting started

Client、Server のセットアップについては、それぞれの README.md を参照:

* [Client README.md](./client/README.ja.md)
* [Server README.md](./server/README.ja.md)

## Developing

Rails のサーバーサイドアプリケーションを 3010 ポートで起動

```
cd server/
rails s -p 3010
```

React のフロントエンドアプリケーションを 3011 番ポートで起動

```
cd client/
BROWSER=none yarn start
```

http://localhost:3011 にアクセス

### Mock API server + React frontend app (API をモックにして動作確認する場合)

`rails s -p 3010` の代わりに以下の方法でモックサーバーを 3010 ポートで起動

```
drakov -f docs/api.md --autoOptions -p 3010 --watch --method DELETE --method PUT --method POST
```

http://localhost:3011 にアクセス

### 主な使用技術

#### サーバーサイド

- rails
- aasm
- pg
- rack-cors

#### フロントエンド

- axios
- create-react-app
- history
- node-sass
- react
- react-bootstrap
- react-router-redux
- redux
- webpack

### 事前インストールの必要なソフトウェア

- nodenv
- node-build
- rbenv
- ruby-build
- postgresql
- aglio
- drakov

### 開発環境の設定

```shell
git clone git@github.com:meltedice/todorokite.git
cd todorokite/
```

※ 後述の Database の設定を行って todorokite ユーザーでデータベースの作成が可能な状態にしておいてください。

Rails アプリケーションのセットアップ(rubygems のインストル〜データベースの初期化)

```shell
cd server/
bundle install
rails db:create
rails db:migrate
rails db:seed_fu
cd ..
```

React アプリケーションのセットアップ(ライブラリのインストール)

```shell
cd client/
yarn install
cd ..
```

API ドキュメント関係のツールをインストール

```shell
npm install -g aglio
npm install -g drakov
```

### Deploying / Publishing

TODO

## Versioning

TODO

## Tests

Rails のテスト

```shell
cd server/
rails spec
```

React のテスト

```shell
cd client/
yarn test
```

## Api Reference

See followings:
* [API document (markdown)](https://github.com/meltedice/todorokite/blob/master/docs/api.md)
* [API document (html)](https://github.com/meltedice/todorokite/blob/master/docs/api.html)

## Database

Postgresql のインストール

```shell
brew install postgresql
brew services start postgresql
```

Postgresql にユーザー `todorokite` を追加

```shell
psql -d postgres
# CREATE ROLE todorokite WITH CREATEDB LOGIN PASSWORD 'Quah5yek2h';
# \q
```

## Licensing

[MIT](https://github.com/meltedice/todorokite/blob/master/LICENSE)
