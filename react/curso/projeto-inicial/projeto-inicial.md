
# comandos para criar o projeto novo
npm init -y
npm install --save-dev react@15.4.2
npm install --save-dev react-dom@15.4.2
npm install --save-dev babel-core@6.22.1
npm install --save-dev babel-loader@6.2.10
npm install --save-dev babel-preset-es2015@6.22.0
npm install --save-dev babel-preset-react@6.22.0
npm install --save-dev webpack@1.14.0
npm install --save-dev webpack-dev-server@1.16.2
npm install --save-dev babel-plugin-transform-object-rest-spread@6.22.0



# webpack.config.js
- Configurações iniciais.
- loader para .jsx


# Olhar os arquivos
- public/index.html
- ex/index.jsx

# package.json
"dev": "webpack-dev-server --progress --colors --inline --hot"


# Executar o projeto
npm install
npm run dev
localhost:8080