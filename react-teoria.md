estou passando esse arquivo para o padrão .md

# Table of Content
- [lifecycle](#lifecycle)
- [stateful vs stateless](#stateful-stateless)

# lifecycle <a name="lifecycle"></a>
/dados/programacao2/reactJs/reactJs/react-ninja/examples/m01/learning-state/src/timer.js

----- componentWillMount() -----
Pode ser executado no servidor ou no cliente, não manipule o dom aqui.

----- componentDidMount() -----
Executa apenas no cliente, manipule o dom aqui, se vc estiver usando uma biblioteca de terceiro
como um gráfico por exemplo, use aqui.
Essa função executa apenas uma vez.

---- componentWillUnmount() -----
Executado quando o componente é removido do dom, se estiver executando alguma função que use
o componente desmontado, faça o destroy aqui.

----- componentWillReceiveProps(nextProps) -----
Função executada quando um componente recebe uma propriedade.
Não executa na primeira vez, apenas quando tem alteração.


----- shouldComponentUpdate(nextProps, nextState) -----
Executa quando novas props são enviadas.

----- componentWillUpdate(nextProps, nextState) -----
Executa quando o componente for atualizado.
Não usar this.setState nessa função.

----- componentDidUpdate(prevProps, prevState) -----
Executa apó a renderisação do componente.



#stateful vs stateless <a name="stateful-stateless"></a>
----- stateful -----
É um componente que manipula estado.

----- stateless -----
Componente de função pura não manipula estado.



==================================================
===== Container e Presentational Components =====
==================================================
https://medium.com/@yassimortensen/container-vs-presentational-components-in-react-8eea956e1cea

----- Container Components -----


----- Presentational Components -----
Cuida apenas da apresentação de conteúdo.


==================================================
===== Dumb Components and Smart Components =====
==================================================
https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43

Dumb component é mais performático pois é mais fácil para o React fazer o diff do DOM de
componente que não controla estado.


====================
===== React =====
====================
React tem o foco apenas na view, em gerar os componentes na página. Não está preocupado com o estado dos componentes nem em chamada ao backend.
React controla os componente de tela, passa propriedades de um componente para o outro e etc.



====================
===== Redux =====
====================
Redux é um framework de gerenciamento de estado. Para controlar estados mais complexos e compartilhados entre os componentes.



=========================
===== React Redux =====
=========================
React Redux faz a junção do React com o Redux, já que são dois frameworks independentes. 
React é um framework independente do Redux e vice versa.

