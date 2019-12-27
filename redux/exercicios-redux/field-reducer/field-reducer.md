O componente Field(field.js) vai gerar um evento a partir do onChange().
O onChange() está ligado com um actionCreator "changeValue"(fieldActions.js) que está
disponível em props porque foi ligado no mapDispatchToProps().
O actionCreator vai chamar o reducer.



# fieldReducer.js
Olhar o arquivo.
Quando uma ação é disparada o fieldReducer é chamado, ele verifica
se a ação disparada é a que ele espera.

# index.jsx
Olhar o arquivo.
Usa o fieldReducer.js




# field.jsx
Sem alteração em relação ao exemplo anterior.



