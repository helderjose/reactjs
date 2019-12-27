Criar um componente de paginação.

Configurar o linter no ambiente de teste e fazer watch com linter.
Rodar os testes e o linter juntos.
Configura o linter para corrigir os problemas.

# Comandos
yarn test:watch
yarn lint:watch

# package.json
"lint": "standard --verbose | snazzy"
"lint:watch": "gulp"
"lint:fix": "standard --fix"


"lint": "standard --verbose | snazzy"
Passa a saída do standard para o snazzy

"lint:fix": "standard --fix",
Corrige os problemas de lint

# gulpfile.js
Configurações do gulp

# Comandos Projeto Novo
yarn add --dev snazzy@5.0.0
yarn add --dev gulp@3.9.1

# Dependências
1. snazzy
  Melhora a saída do standard, deixa mais legível.
1. gulp
  Está sendo usado só para criar um watch com linter.
  Usa o watch do gulp para criar um watch com linter.

# Observações
1. standard é executado a partid do terminal
1. standard-loader é executado a partir do webpack