
npm install
npm run start  (se der erro é pouca memória disponível para fazer watch, feche outros programas)
http://localhost:3000


# useEffect
componentDidMount, componentDidUpdate, e componentWillUnmount combinados.
useEffect sempre é chamado quando a renderização for concluída.
useEffect pode receber um segundo parâmetro, um array, se for passado
ele só será executado quando houver alterações nos valores passados
no array, array vazio significa que o useEffect só será executado uma
vez quando o componente for montado, olhar
https://pt-br.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
https://pt-br.reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often

https://pt-br.reactjs.org/docs/hooks-effect.html

# App.js
