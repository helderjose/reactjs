https://pt-br.reactjs.org/docs/hooks-rules.html
https://pt-br.reactjs.org/docs/hooks-overview.html

https://pt-br.reactjs.org/docs/hooks-intro.html

As classes não serão removidas (informação tirada do site).

Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe.
Os hooks começam com "use", exemplo, "useState"


Hooks são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais. Hooks não funcionam dentro de classes

# Regras dos Hooks
Hooks são funções JavaScript, mas eles impões duas regras adicionais:

  - Apenas chame Hooks no nível mais alto. Não chame Hooks dentro de loops, condições ou funções aninhadas.
  - Apenas chame Hooks de componentes funcionais. Não chame Hooks de funções JavaScript comuns. (Há apenas um outro lugar       válido para se chamar Hooks — dentro dos seus próprios Hooks customizados. Iremos aprender sobre eles em breve.)
