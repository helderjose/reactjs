Alterar a localização do arquivo de configuração do storybook.
O padrão é .storybook



# Comandos
npm install
npm run start
npm run storybook

http://localhost:3000
http://localhost:6006/


# O que foi feito nesse exemplo
- Mudou a pasta de .storybook, para storybook.
- Gerou os arquivos estáticos do storybook.

# package.json
"storybook": "start-storybook -p 6006 -c storybook",
"build-storybook": "build-storybook -c storybook"

O -c é de config directory

# storybook/webpack.config
Removeu o metadata include

# Gerando os arquivos estáticos
npm run build-storybook  // vai cria a pasta storybook-static
entre na pasta storybook-static e execute: python -m SimpleHTTPServer 3000