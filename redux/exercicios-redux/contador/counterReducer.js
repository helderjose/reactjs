const INITIAL_STATE = { step: 1, number: 0 }

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'INC':
            //duplica o state e altera somente number
            return { ...state, number: state.number + state.step }
        case 'DEC':
            //duplica o state e altera somente number
            return { ...state, number: state.number - state.step }
        case 'STEP_CHANGED':
            /*
            duplica o state e e altera o step
            +action.payload o + converte a variável para número
            */
            return { ...state, step: +action.payload }
        default:
            return state
    }
}