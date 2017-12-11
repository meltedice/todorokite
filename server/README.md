# Todorokite server

Todorokite to-do list's server side API app

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

1. Install ruby 2.4.2
2. Install gems
3. Setup database
4. Start rails server

## Developing

### Built With

- aasm
- pg
- rack-cors
- rails

### Prerequisites

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

See followings:
* [API reference (markdown)](https://github.com/meltedice/todorokite/blob/master/docs/api.md)
* [API reference (html)](https://github.com/meltedice/todorokite/blob/master/docs/api.html)

## Database

Install Postgresql

```shell
brew install postgresql
brew services start postgresql
```

Add a user `todorokite`

```shell
psql -d postgres
# CREATE ROLE todorokite WITH CREATEDB LOGIN PASSWORD 'Quah5yek2h';
# \q
```

## Licensing

[MIT](https://github.com/meltedice/todorokite/blob/master/LICENSE)
