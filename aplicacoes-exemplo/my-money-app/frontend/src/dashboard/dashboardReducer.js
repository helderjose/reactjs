const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            //duplica o state e altera atritubo summary com o retorno da api
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}