'use strict'

/*
IFE: Cria a função e já chama logo em seguida.
function(){}()
*/
const map = (arr = [], func = (item) => item) => {
  return (function mapInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal

    return arrayInternal.length === 0 ? [] : [
      func(head, counter, arr),
      ...mapInternal(tail, counter + 1)
    ]
  })(arr, 0)
}

export default map
