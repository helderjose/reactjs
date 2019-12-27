https://storybook.js.org/

Usado para testar componentes em React

# Executar Projeto
npm run start
npm run storybook //em outro terminal, para iniciar o server do storybook

http://localhost:3000
http://localhost:6006/


# src/components/acctions/actions.story.js
# src/components/repos/repos.story.js


# .storybook/config.js



# Comandos
npm install -g getstorybook
getstorybook    //na raiz do projeto
npm run storybook

Será criado o seguinte:
.storybook (pasta)
stories (pasta)

# Passos que fiz nesse exemplo (para usar a versão antiga igual ao vídeo)
npm install --save-dev @kadira/storybook@2.21.0
npm install -g getstorybook
getstorybook    //na raiz do projeto ou getstorybook -f

# package.json
npm run storybook // inicia o storybook
npm run build-storybook // gera arquivos staticos para não precisar subir um server para executar o storybook