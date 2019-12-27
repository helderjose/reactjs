

Criar um componente de paginação.
OBS: Não estou iniciando o linter porque esse é um projeto de estudo,
para poder comentar e quebrar linhas a vontade.

Criou mais testes nesse exemplo


# Comandos
yarn test
yarn test:watch   //não funciona quando tem muita coisa aberta por causa da memória RAM
yarn lint:watch


# utils/pagination/index.js
Implementações iniciais.

# utils/pagination/pagination.test.js
Testes iniciais

# package.json
"globals": ["test", "it", "describe"]
Para o linter não dar mensagem de funão global.
Essas três funções são do jest.