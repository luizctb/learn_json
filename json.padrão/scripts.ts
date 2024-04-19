

const objs = [
  {
    nome: "Tome",
    idade: 39,
    esta_trabalhando: true,
    detalhes_profissão: {
      profissão: "Programador",
      empresa: "Next Devices",
    },
    hobbies: ["Progrmar", "Ler", "Programar"],
  },
  {
    nome: "João",
    idade: 25,
    esta_trabalhando: false,
    detalhes_profissão: {
      profissão: null,
      empresa: null,
    },
    hobbies: ["Jogar", "Cozinhar"],
  },
];

// JSON - 
// converter objeto para JSON
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// converter JSON para objeto
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)
// após essa conversão já pode usar como TypeScript normalmente, exemplo abaixo num map

objData.map((pessoa) => {
    console.log(pessoa.nome)
})
