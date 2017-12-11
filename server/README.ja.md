# Todorokite server

TODO アプリ Todorokite の Rails 製サーバーサイドアプリケーション

## Installing / Getting started

```shell
cd server/
rbenv install 2.4.2
bundle install
rails db:create
rails db:migrate
rails db:seed_fu
rails s -p 3010
```

1. ruby 2.4.2 をインストール
2. gem をインストール
3. データベースの設定
4. rails server を起動

## 開発

### 主な使用技術

- aasm
- pg
- rack-cors
- rails

### 事前インストールの必要なツール

- rbenv
- ruby-build
- postgresql

### Setting up Dev

```shell
git clone git@github.com:meltedice/todorokite.git
cd todorokite/server/
bundle install
rails db:create
rails db:migrate
rails db:seed_fu
```

### Deploying / Publishing

TODO

## Versioning

TODO

## Tests

```shell
rails spec
```

## Style guide

TODO

## API Reference

API リファレンス:
* [API リファレンス (markdown)](https://github.com/meltedice/todorokite/blob/master/docs/api.ja.md)
* [API リファレンス (html)](https://github.com/meltedice/todorokite/blob/master/docs/api.ja.html)

## データベース

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
