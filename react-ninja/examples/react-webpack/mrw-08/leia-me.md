1. package.json
  - react-hot-loader
1. webpack.js
  - react-hot-loader
1. .babelrc
1. server.js para rodar com Node.js
  - server.js
  - start no package.json

Obs: Nesse exemplo o hot-loader ainda não funciona, olhar o próximo exemplo.


npm install
./node_modules/webpack-dev-server/bin/webpack-dev-server.js
http://localhost:8080/

# react-hot-loader
Live reload para javascript, atualiza apenas a árvore referente ao componente alterado, o browser não faz o reload completo da aplicação.