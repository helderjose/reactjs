# Executar o projeto
npm install
npm run dev
http://localhost:8080/



# Esse Exemplo Usa:
-  hashHistory
- ```<Link>...</Link>``` no lugar de ```<a>...</a>```


# Passos
- src/main/app.jsx
    - Tira o ```<Routes />``` e coloca o ```{props.children}```
- src/index.jsx
    - Tira o ```<App />``` e coloca o ```<Routes />```
- src/main/routes.jsx
- src/template/menu.jsx




# No Console do Navegador
Warning: You cannot PUSH the same path using hash history
Parece que só recebe essa mensagem em modo de dev, em prod não dá esse aviso (não tenho certeza).





# comandos para criar o projeto novo
npm init -y
npm install --save-dev react@15.4.2
npm install --save-dev react-dom@15.4.2
npm install --save-dev react-router@3.0.2

npm install --save-dev babel-core@6.22.1
npm install --save-dev babel-loader@6.2.10
npm install --save-dev babel-preset-es2015@6.22.0
npm install --save-dev babel-preset-react@6.22.0
npm install --save-dev babel-plugin-transform-object-rest-spread@6.22.0

npm install --save-dev webpack@1.14.0
npm install --save-dev webpack-dev-server@1.16.2






