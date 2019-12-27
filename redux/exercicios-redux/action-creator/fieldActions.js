export function changeValue(e) {
    console.log('fieldActions.js -> changeValue')

    /*
    type é obrigatório
    payload pode ser qualquer nome, mas payload "foi adotado como padrão"
    payload é o dado que vem junto com uma ação
    */
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}