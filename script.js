alert('Bem-vindo! A seguir pediremos que informe alguns dados.')

let user1 = prompt('Digite o nome da pessoa mais velha')
let age1 = prompt('Digite a idade da pessoa mais velha')

let user2 = prompt('Digite o nome da pessoa mais nova')
let age2 = prompt('Digite a idade da pessoa mais nova')

let AgeDif = age1 - age2

alert(
    "Pessoa mais velha: " + user1 + "\nIdade: " + age1 +
    "\n\nPessoa mais nova: " + user2 + "\nIdade: " + age2 +
    "\n\nDiferença de idade: " + AgeDif
)
