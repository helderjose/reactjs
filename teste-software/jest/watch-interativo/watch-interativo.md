
# Comandos
npm install
npm test
npm test -- --no-cache (executa o test sem chache do jest)

# package.json
test:watch

# Uso
Depois que executar o comando para executar o teste com watch, o Jest libera alguns comandos.

p -> filtra por nome, ex
aperte 'p' e digite 'div' executa teste dos arquivos que tem 'div' no nome.
Depois disso, se vc apertar 'enter' o Jest vai executar o teste sempre usando esse filtro.



# Teoria
Precisa de swap para usar o --watch do Jest










-----------------------------------------------------------
Tive esse problema duas vezes, na primeira usano jest com npm, 
criei uma swap de 4GB, na segunda vez estava usando jest com yar,
aumentei a swap para 8GB.
Acho que a segunda vez era apenas memória RAM, quando fecho os programs o comando funciona normal.

Erro ao executar Jest com --watch
Solução: Criar memória swap



Determining test suites to run...fs.js:1376
    throw error;
    ^

Error: watch /dados/programacao-2/reactJs/reactJs/teste-software/jest/watch-interativo/node_modules/neo-async ENOSPC
    at _errnoException (util.js:1022:11)
    at FSWatcher.start (fs.js:1374:19)
    at Object.fs.watch (fs.js:1400:11)
    at NodeWatcher.watchdir (/dados/programacao-2/reactJs/reactJs/teste-software/jest/watch-interativo/node_modules/sane/src/node_watcher.js:144:20)
    at Walker.<anonymous> (/dados/programacao-2/reactJs/reactJs/teste-software/jest/watch-interativo/node_modules/sane/src/node_watcher.js:353:12)
    at emitTwo (events.js:126:13)
    at Walker.emit (events.js:214:7)
    at /dados/programacao-2/reactJs/reactJs/teste-software/jest/watch-interativo/node_modules/walker/lib/walker.js:69:16
    at go$readdir$cb (/dados/programacao-2/reactJs/reactJs/teste-software/jest/watch-interativo/node_modules/graceful-fs/graceful-fs.js:162:14)
    at FSReqWrap.oncomplete (fs.js:135:15)
npm ERR! Test failed.  See above for more details.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! @ test:watch: `npm test -- --watch`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the @ test:watch script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/helder/.npm/_logs/2019-07-27T00_12_41_692Z-debug.log


