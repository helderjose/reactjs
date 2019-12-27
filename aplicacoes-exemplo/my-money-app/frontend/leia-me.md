# Autenticação
- Olhar a parte do server no projeto backend.
- src/auth/authReducer.js
- src/main/reducers.js
    - "AuthReducer"
- src/consts.js
    - URLs (endpoints).
- src/auth/authActions.js
- src/common/template/navbar.jsx
- src/common/template/header.jsx
    - importa o navbar
- src/common/form/inputAuth.jsx
- src/auth/auth.jsx
- src/main/authOrApp.jsx
- src/main/routes.jsx
    - AuthOrApp

# Router (versão 2)
- src/main/app.jsx
    - Tirou o ```<Routes />```
    - Colocou o ```{props.children}```

- src/main/routes.jsx

- src/index.jsx
    - Tirou o ```<App />```
    - Colocou o ```<Routes />```




- src/common/template/menu.jsx
    - Olhe os ```path=```

- src/common/template/menuItem.jsx







# Anotações para organizar
- import { formValueSelector } from 'redux-form'
    formValueSelector: método responsável por pegar um valor que está no formulário. (olhar: src/billingCycle/billingCycleList.jsx)

# Toastr
Instalar a dependência no package.json
src/common/msg/messages.jsx
src/main/app.jsx
src/main/reducers.js
src/billingCycle/billingCycleActions.js

# Redux Form
Instalar a dependência no package.json
src/main/reducers.js
src/billingCycle/billingCycleForm.jsx
src/billingCycle/billingCycle.jsx

# Dashboard sem Redux
src/dashboard2/dashboard2.jsx

# Redux
src/main/reducers.js

# Routes.js main/routes.jsx


# Template AdminLTe
Configurações para usar o Admin LTe. Menu, Cabeçalho, Rodapé e etc.

- template/dependencies.js

# Configuração do Projeto
- Instalação de dependências (package.json);
- webpack.config.js

## Dependências
```
npm init -y &&
npm install --save-dev webpack@1.14.0 &&
npm install --save-dev webpack-dev-server@1.16.2 &&

npm install --save-dev babel-core@6.22.1 &&
npm install --save-dev babel-loader@6.2.10 &&
npm install --save-dev babel-plugin-react-html-attrs@2.0.0 &&
npm install --save-dev babel-plugin-transform-object-rest-spread@6.22.0 &&
npm install --save-dev babel-preset-es2015@6.22.0 &&
npm install --save-dev babel-preset-react@6.22.0 &&

npm install --save-dev extract-text-webpack-plugin@1.0.1 &&
npm install --save-dev css-loader@0.26.1 &&
npm install --save-dev style-loader@0.13.1 &&
npm install --save-dev file-loader@0.9.0 &&

npm install --save-dev admin-lte@2.3.6 &&
npm install --save-dev font-awesome@4.7.0 &&
npm install --save-dev ionicons@3.0.0 &&

npm install --save-dev react@15.4.2 &&
npm install --save-dev react-dom@15.4.2 &&
npm install --save-dev react-router@3.0.2 &&
npm install --save-dev react-redux@4.4.6 &&
npm install --save-dev react-redux-toastr@4.4.2 &&

npm install --save-dev redux@3.6.0 &&
npm install --save-dev redux-form@6.4.1 &&
npm install --save-dev redux-multi@0.1.12 &&
npm install --save-dev redux-promise@0.5.3 &&
npm install --save-dev redux-thunk@2.1.0 &&

npm install --save-dev axios@0.15.3 &&
npm install --save-dev lodash@4.17.4
```