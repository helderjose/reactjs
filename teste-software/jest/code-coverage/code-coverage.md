# Comandos
npm i --save-dev chai@3.5.0
npm install
npm test

# Dicas
Abrir o html da pasta coverage.
cd ./coverage/lcov-report
python -m SimpleHTTPServer 8000
Acessar: localhost:8000

# Assuntos Abordadsos Nesse Exemplo
1. Code coverage.
1. chai (Ferramenta de asserção)

# package.json
--coverage no test

# Teoria
O Jest já tem embutido uma ferramenta de coverage, o "istanbul".
Será criado a pasta "coverage" quando executar o teste.

Itens da tabela de code coverage (no terminal).
1. File
 - Arquivos que estamos testando
1. Stmts
 - Quando das declarações estão cobertas por testes.
1. Branch
  - if e else (são branches)
1. Funcs
 - functions
1. Lines
 - Porcentagem de linhas que estão cobertas por teste.


