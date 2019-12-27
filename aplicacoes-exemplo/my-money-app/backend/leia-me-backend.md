# Autenticação

## Considerações
- token jwt.
- mongoDb


## Dependências
npm install --save bcrypt@1.0.2    //criptografar a senha que vai ser armazenada no banco de dados.
npm install --save jsonwebtoken@7.3.0  //


## Configuração
src/.env
A chave fica no servidor, no arquivo src/.env é importante não comitar esse arquivo para diminuir a chance da chave não ser
compartilhada em um repositório público.

## User
- src/api/user
- src/api/user/authService.js
- src/config/auth.js
    - Verifica se o token foi gerado usando a chave de .env
- src/config/cors.js
    - Aceitar o header Authorization
- src/config/routes.js
    - auth