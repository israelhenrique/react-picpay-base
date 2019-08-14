// O objetivo é construir uma aplicação que simula o envio de dinheiro para uma outra pessoa, via cartão de crédito.

// Cartões para exibir
// O cartão válido vai aprovar a transação no backend;
const cards = [
  // valid card
  {  
    "card_number": "1111111111111111",
    "cvv": 789,
    "expiry_date": "01/18",
  },
  // invalid card
  {  
    "card_number": "4111111111111234",
    "cvv": 123,
    "expiry_date": "01/20",
  }
];

// Transação
// Metódo POST - http://www.mocky.io/v2/5d542ec72f000048248614b3
// Atenção: o backend não está respondendo o header de Content-Type corretamente; simularemos aqui que não temos acesso ao backend e teremos que resolver na nossa aplicação
// Payload:
const transactionPayload = {  
   "card_number": "1111111111111111",
   "cvv": 789,
   "value": 79.9,
   "expiry_date": "01/18",
   "destination_user_id": 1002
}

// Usuários
// GET - https://www.mocky.io/v2/5d531c4f2e0000620081ddce
// Payload:
const userPayload = {
  "id": 1001,
  "name": "Eduardo Santos",
  "img": "https://randomuser.me/api/portraits/men/9.jpg",
  "username": "@eduardo.santos"
  }
