Todorokite
====

[Japanese](./README.ja.md)

A to-do list example app with Rails and React.

## Directory structure

* client/ React frontend app
* docs/   API documents
* server/ Rails server side app

## Installing / Getting started

See followings:

* [Client README.md](./client/README.md)
* [Server README.md](./server/README.md)

## Developing

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

### Mock API server + React frontend app (Use mock API server instead of Rails server)

Start mock API server by following command, instead of `rails s -p 3010`

```
drakov -f docs/api.md --autoOptions -p 3010 --watch --method DELETE --method PUT --method POST
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
- aglio
- drakov

### Setting up Dev

Setup database before this section, see below.

```shell
git clone git@github.com:meltedice/todorokite.git
cd todorokite/
```

Install rubygems and setup database.

```shell
cd server/
bundle install
rails db:create
rails db:migrate
rails db:seed_fu
cd ..
```

Install node modules

```shell
cd client/
yarn install
cd ..
```

Install aglio for API documentation

```shell
npm install -g aglio
npm install -g drakov
```

### Deploying / Publishing

TODO

## Versioning

TODO

## Tests

Rails test

```shell
cd server/
rails spec
```

React test

```shell
cd client/
yarn test
```

## API Reference

See followings:
* [API document (markdown)](https://github.com/meltedice/todorokite/blob/master/docs/api.md)
* [API document (html)](https://github.com/meltedice/todorokite/blob/master/docs/api.html)

### Build API Reference

```shell
aglio -i docs/api.md -o docs/api.html
aglio -i docs/api.ja.md -o docs/api.ja.html
```

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

## TODO

* [ ] Deploy to servers
* [ ] Use sessionStorage for to-do items
* [ ] Items container naming...
* [ ] Signin feature
* [ ] Improve error handlings
* [ ] Improve UI/UX
* [ ] Delegate Items container parts to components
* [ ] Jest snapshot tests
* [ ] Add about error response to API documents

## Licensing

[MIT](https://github.com/meltedice/todorokite/blob/master/LICENSE)
