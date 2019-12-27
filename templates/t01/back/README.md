
# Executar o server
## Inicie o mongoDB
cd /opt/mongodb-linux-x86_64-rhel70-3.6.5/bin && ./mongod --dbpath ~/mongo-data

## Inicie o nodeJS
npm run dev
npm run production
http://localhost:3003/t01-app/api/todos

## Postman
http://localhost:3003/t01-app/api/todos





# Criar Projeto Novo
## Ferramentas
Instale e inicie o mongoDB (olhar pasta do mongoDB)

## Dependências
npm init -y
npm i --save-dev body-parser@1.15.2
npm i --save-dev express@4.14.0
npm i --save-dev mongoose@4.7.0
npm i --save-dev node-restful@0.2.5
npm i --save-dev pm2@2.1.5
npm i --save-dev nodemon@1.11.0
