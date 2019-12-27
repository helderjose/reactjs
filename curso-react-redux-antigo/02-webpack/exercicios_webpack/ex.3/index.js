/*
 * Quando o arquivo não é referenciado
 * ele não será considerado para a geração
 * do arquivo bundle.js
 */

 /*
 nada será impresso no console porque o arquivo não foi referenciado.

 execute no terminal:
 ./node_modules/.bin/webpack    //executa o webpack gerando o public/bundle.js
 */

/*
 descomente a linha abaixo.
 execute:  ./node_modules/.bin/webpack
 atualize as pastas
 abra o public/bundle.js e pesquise por "carregado", verá que o arquivo foi referenciado
*/
//  require('./duvidaCruel')