Todorokite
====

A to-do list example app with Rails and React.

## Structure

* docs/   API documents
* client/ JavaScript frontend app
* server/ Rails server side app

## Installing / Getting started

See followings:

* [Client README.md](./client/README.md)
* [Server README.md](./server/README.md)

## Developing

Choose following convinations:

* Rails server app + React frontend app
* Mock API server + React frontend app

### Rails server app + React frontend app

Start rails server

```
cd server/
rails s -p 3010
```

Start frontend app

```
cd client/
BROWSER=none yarn start
```

### Mock API server + React frontend app

Start mock API server

```
drakov -f docs/api.md --autoOptions -p 3010 --watch --method DELETE --method PUT --method POST
```

Start frontend app

```
cd client/
BROWSER=none yarn start
```

### Built With

#### Server

- rails
- aasm
- pg
- rack-cors

#### Client

- axios
- create-react-app
- history
- node-sass
- react
- react-bootstrap
- react-router-redux
- redux
- webpack

### Prerequisites

- nodenv
- node-build
- rbenv
- ruby-build
- postgresql

### Setting up Dev

```shell
git clone git@github.com:meltedice/todorokite.git
```

```shell
cd todorokite/server/
bundle install
rails db:create
rails db:migrate
rails db:seed_fu
cd ..
```

```shell
git clone git@github.com:meltedice/todorokite.git
cd todorokite/client/
yarn install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

### Deploying / Publishing

TODO

## Versioning

TODO

## Tests

```shell
cd server/
rails spec
```

```shell
cd client/
yarn test
```

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
