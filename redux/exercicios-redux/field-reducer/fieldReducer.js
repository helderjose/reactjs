const INITIAL_STATE = { value: 'Hello redux' }


/*
O state que é passado para a função não é o estado global da aplicação,
é o campo "field" do "field: fieldReducer" no index.jsx
*/
export default function(state = INITIAL_STATE, action) {
    console.log('fieldReducer.js')

    switch(action.type) {
        //VALUE_CHANGED é a ação que foi disparada.
        case 'VALUE_CHANGED':
            /*
            Retorna um novo state, não altera o state atual.
            action.payload é passado pelo fiedlAction.js
            */
            return { value: action.payload }
        default:
            return state
    }
}