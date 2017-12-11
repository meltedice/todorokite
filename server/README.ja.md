# Todorokite server

Todorokite to-do list's server side API app

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up & running.

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

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone git@github.com:meltedice/todorokite.git
cd todorokite/server/
bundle install
rails db:create
rails db:migrate
rails db:seed_fu
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

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

## Api Reference

See followings:
* [API document (markdown)](https://github.com/meltedice/todorokite/blob/master/docs/api.md)
* [API document (html)](https://github.com/meltedice/todorokite/blob/master/docs/api.html)

## Database

```shell
brew install postgresql
brew services start postgresql
```

```shell
psql -d postgres
# CREATE ROLE todorokite WITH CREATEDB LOGIN PASSWORD 'Quah5yek2h';
# \q
```

## Licensing

[MIT](https://github.com/meltedice/todorokite/blob/master/LICENSE)
