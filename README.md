## Zap-recall

Este é um simples aplicativo de flashcards construído com React e styled-components. Ele permite que os usuários passem por um baralho de flashcards, cada um com uma pergunta e uma resposta, o objetivo ao usar esta aplicação é testar a sua memória.

## Estrutura do Projeto

O componente principal é `App.js`, que importa e usa os seguintes componentes:

- `TopBar`: Esta é a barra de navegação superior.
- `ContainerQuestion`: Esta é a área de conteúdo principal onde os flashcards são exibidos.
- `BottomBar`: Esta é a barra de navegação inferior.

O `App.js` também usa um `deck` de cartas importado de `cards.js`. Cada carta no deck é um objeto com uma `question` e uma `answer`.

O `App.js` também contém uma função `transformDeck` que transforma o deck de cartas em um formato adequado para o componente `ContainerQuestion`.

## Estilos

Os estilos são escritos usando `styled-components`. O componente estilizado principal é `ScreenContainer`, que estiliza o container principal do aplicativo.

## Gerenciamento de Estado

O aplicativo usa o hook `useState` do React para gerenciamento de estado. O estado `cardsDone` é usado para acompanhar o número de cartas que foram passadas.

## Como Executar

Para executar este projeto, clone o repositório e instale as dependências com `npm install`. Em seguida, inicie o servidor de desenvolvimento com `npm run start`.