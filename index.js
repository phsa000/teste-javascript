let nome, cidade;

console.log(typeof nome);
console.log(typeof cidade);

nome = prompt("Digite seu nome: ");
cidade = prompt("Digite a cidade onde você mora: ");

console.log(typeof nome);
console.log(typeof cidade);

console.log(`Olá, meu nome é ${nome} e eu moro em ${cidade}.`);

let resposta1 = prompt("Você gosta de programar? (Sim/Não)");
let resposta2 = prompt("Você já viajou para fora do país? (Sim/Não)");
let resposta3 = prompt("Você tem animais de estimação? (Sim/Não)");

console.log("1. Você gosta de programar? Resposta: " + resposta1);
console.log("2. Você já viajou para fora do país? Resposta: " + resposta2);
console.log("3. Você tem animais de estimação? Resposta: " + resposta3);

let x = 5
let y = 10

[x,y]=[y,x]

let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));

let soma = numero1 + numero2;
let multiplicacao = numero1 * numero2;

console.log("1. A soma dos números é: " + soma);
console.log("2. A multiplicação dos números é: " + multiplicacao);
