// Variáveis
// const curso = "JavaScript";
// let alunos = 4;
// var exemplo = "Exemplo de variável var";

const { cacheSignal } = require("react")

// console.log("Curso:", curso);
// console.log("Quantidade de alunos:", alunos);

// for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// var nome = "João";
// var nome = "Maria";

// console.log(nome);

// let nome2 = "João";
// let nome2 = "Maria";

// console.log(nome2);

// // Tipos de dados
// let nome = "João";
// let idade = 20;
// let aprovado = true;
// let nota = null;
// let endereco;

// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof aprovado);
// console.log(typeof nota);      
// console.log(typeof endereco);
// idade = "Abacate";
// console.log("Novo tipo de idade:", typeof idade);

// // Operadores
// let n1 = 8;
// let n2 = 6;

// console.log("Soma:", n1 + n2);
// console.log("Subtração:", n1 - n2);
// console.log("Multiplicação:", n1 * n2);
// console.log("Divisão:", n1 / n2);


// // Condicional
// let media = (n1 + n2) / 2;

// if (media >= 7) {
//     console.log("Aluno aprovado!");
// } else {
//     console.log("Aluno reprovado!");
// }

// caches cancelAnimationFrame cancelIdleCallback cacheSignal

// // map
// const dobro = numeros.map(n => n * 2);
// console.log(dobro);

// // filtro
// const maiores = numeros.filter(n => n > 5);
// console.log(maiores);

// // reduce
// const soma = numeros.reduce((total, n) => total + n, 0);
// console.log(soma);

// // Classes
// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }

//     apresentar() {
//         console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//     }

//     fazerAniversario() {
//         this.idade++;
//         console.log(`${this.nome} fez aniversário! Agora tem ${this.idade} anos.`);
//     }
// }

// // Criando objetos da classe
// const pessoa1 = new Pessoa("João", 20);
// const pessoa2 = new Pessoa("Maria", 22);

// pessoa1.apresentar();
// pessoa2.apresentar();

// pessoa1.fazerAniversario();

// // Herança
// class Aluno extends Pessoa {
//     constructor(nome, idade, curso) {
//         super(nome, idade);
//         this.curso = curso;
//     }

//     estudar() {
//         console.log(`${this.nome} está estudando ${this.curso}.`);
//     }

//     apresentar() {
//         console.log(
//             `Meu nome é ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`
//         );
//     }
// }

// const aluno1 = new Aluno("Carlos", 19, "Ciência da Computação");

// aluno1.apresentar();
// aluno1.estudar();

// // Métodos Estáticos
// class Calculadora {
//     static somar(a, b) {
//         return a + b;
//     }

//     static multiplicar(a, b) {
//         return a * b;
//     }
// }

// console.log(Calculadora.somar(10, 20));
// console.log(Calculadora.multiplicar(5, 4));

// //Getters e Setters
// class Produto {
//     constructor(nome, preco) {
//         this.nome = nome;
//         this._preco = preco;
//     }

//     get preco() {
//         return this._preco;
//     }

//     set preco(valor) {
//         if (valor > 0) {
//             this._preco = valor;
//         } else {
//             console.log("Preço inválido.");
//         }
//     }
// }

// const notebook = new Produto("Notebook", 4500);

// console.log(notebook.preco);

// notebook.preco = 5000;
// console.log(notebook.preco);

// notebook.preco = -100;
