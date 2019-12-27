'use strict'

/*
const map = (array, function)
arr = [] valor padrão do array
*/
const map = (arr = [], func = (item) => item) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('The first parameter must be an array')
  }

  if (typeof func !== 'function') {
    throw new TypeError('The second parameter must be a function')
  }

  let newArr = []

  for (let i = 0; i < arr.length; i++)
    newArr.push(func(arr[i], i, arr))

  return newArr
}

export default map
