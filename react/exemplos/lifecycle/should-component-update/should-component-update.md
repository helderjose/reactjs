

# Executar o Projeto
npm install
npm start ou npm run start

# should-component-update
Função síncrona.
Executado sempre que novas props são mandadas.
Deve sempre retornar true ou false.
Se returnar false o component não é atualizado na tela.

Use esse método quando você não quiser atualizar o componente, use funções pequenas e evite usar
promises, requisição ajax e etc senão vai bloquear a thread porque o método é síncrono e
bloqueia o acesso ao componente.

# app.js
# timer.js



# Ordem Execução

obs para estudos futuro: 