

# Executar o Projeto
npm install
npm start ou npm run start

# componentWillMount
Executado logo antes do component ser renderizado.
Montar um component significa que colocar o component no DOM.
Não manipule o DOM no componentWillMount, porque o React tbm pode
ser executado no lado do servidor e também porque o componente ainda
não existe no DOM.

# Ordem Execução
constructor;
componentWillMount;
render

obs para estudos futuro: posso deixar só o app.js para esse exemplo