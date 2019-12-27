

# Executar o Projeto
npm install
npm start ou npm run start

# componentDidMount
Executa depois que o component for montado (renderizado), colocado no DOM.
É executado apenas uma vez.
Manipule o DOM aqui caso necessário, como uma lib de gráfico, canvas e etc.
Esse método só é executado no cliente (não é executado no lado do servidor).


# Ordem Execução
constructor;
render
componentWillMount;

obs para estudos futuro: para esse exemplo posso deixar só o app.js e o timer.js