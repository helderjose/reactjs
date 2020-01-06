npm install
npm run dev
http://localhost:8080/


Igual ao exemplo "react-children-map, só que usando um utils.
Passa a propriedade lastName do pai (<Family/>) para todos os filhos <Member/>.

# reactUtils
Exporta a function childrenWithProps

# member.jsx
Component Member

# family.jsx
Usa childrenWithProps que criamos no reactUtils.js

# index.jsx
Usa o Family e o Member.
Passa a prop "lastName" apenas uma vez no Family, que passa para Member





palavras para pesquisa:
arquivo utils
util.js
arquivo util no react
