export function changeValue(e) {
    console.log('fieldActions.js -> changeValue')

    /*
    Toda action obrigatoriamente tem que ter a key "type".
    Quando a action é disparada, o reducer é chamado.
    */
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}