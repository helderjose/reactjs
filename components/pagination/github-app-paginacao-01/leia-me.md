Criar um componente de paginação.
Vamos separar a lógica do componente, assim conseguimos
usar em vários frameworks como React, Angular e etc.


# Criar os arquivos
Nesse exemplo apenas criamos os arquivos.
- utils/pagination/index.js
- utils/pagination/pagination.test.js

# package.json
test e test:watch

# Execução Projeto
yarn test
yarn test:watch

# Comandos para Criar o Projeto
npm install -g yarn
yarn add --dev jest-cli
yarn add --dev babel-jest
yarn add --dev chai

# Dependências
1. jest-cli
  Ferramenta que vamos utilizar para escrever os testes.
1. babel-jest
  Converte os testes para o padrão ecms 6
1. chai
  Fazer assersões