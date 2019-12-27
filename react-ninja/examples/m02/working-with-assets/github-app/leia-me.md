# Loader de css
configura o loader de css no webpack.config.js
css-loader
style-loader

### css-loader
resolve url(...) e @import


# HTML Dinâmico com html-webpack-plugin
npm i --save-dev html-webpack-plugin

Procure por "html-webpack-plugin" no webpack.config

# Exportar o css para uma arquivo com extract-text-webpack-plugin
npm i --save-dev extract-text-webpack-plugin
- webpack.prod.config.js


# Webpack - Gerando Bundle de Produção
- webpack.config.js
- webpack.prod.config.js
    - Tem umas configurações diferentes e também faz o uglify

- package.json
    - script "build"

# Webpack - webpack-dashboard
npm i --save-dev webpack-dashboard
Cria um dashboard no terminal, facilita a visualização  do log.
- webpack.config.js
    - webpack-dashboard
- package.json
    - webpack-dashboard

# Modularizando o CSS
Cria um arquivo css para cada componente.

# CSS Modules
Esse código está diferente do vídeo, aqui não está usando.
todo:// pesquisar sobre css modules

# Critical Rendering Path CRP
extract-path-plugin.

Carrega primeiro a parte de cima, que é o que o usuário está vendo.
Algumas técnicas: Coloque o css da parte de cima em uma tag 'style' no arquivo html e não em um arquivo css separado com a tag 'link' porque a tag 'link' bloqueia o carregamento da página, ex, o cabeçalho da página

- html/template.html
- webpack.prod.config.js
    - crp e styles

# cross-env
Definindo o ambiente para geração do bundle.
Cria a variável NODE_ENV para teste, execute o comando abaixo no linux.
NODE_ENV=production npm run build

Para windows (tbm funciona no linux) use os passos abaixo:
npm i --save-dev cross-env
- package.json
    - o lhe o script que tem o "cross-env"


# alias no webpack
Resolvendo caminhos a partir do webpack
- webpack.config
    "resolve"













