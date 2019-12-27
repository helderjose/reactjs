vídeos:
/dados/cursosUdemy/Curso React.js Ninja - React Completo/3 - Modulo 01 - Parte 2
input text: 040 M1A28 - Introduc227o 224 formularios no React.mp4
checkbox e radio: 041 M1A29 - Formularios (checkbox e radio).mp4
select e option: 042 M1A30 - Formularios (select e option).mp4
textarea: 043 M1A31 - Formularios (textarea).mp4
eventos (onChange, onInput e onSubmit): 044 M1A32 - Eventos para componente de formulario.mp4

# input
Esse não é o input do html, é o React.

### Propriedades
- todas do input do html;
- defaultValue

###  Controlled Component
Quando usa a propriedade 'value', não consegue alterar o valor na view
porque o input vira um controlled component, para editar o valor
de um controlled component, precisa do onChange.
<input type='text' value='valor incial' onChange={(e) => {...}/>

### Uncontrolled Component
Um input sem a propriedade 'value' vira um uncontrolled component.
Assim o valor do input pode ser alterado na view, mas o React
não altera seu value, para pegar o value use o onChange
<input type='text' />

#### Considerações
O ideal é que use controlled component


--- setState -----
setState é assíncrono.