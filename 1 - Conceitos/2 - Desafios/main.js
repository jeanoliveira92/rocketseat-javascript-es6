/* 

1º exercício
Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario".
A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
true na classe.
Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.

*/

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);

        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

/* 2º exercício */

/* A partir do seguinte vetor, utilize os métodos de array (map, reduce, filter e find): */
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

/* 2.1 Utilizando o map, 
crie uma variável que contenha todas idades dos usuários: [23, 15, 30] */

const idades = usuarios.map(elem => {
    return elem.idade;
});

console.log(idades);

/* 2.2 Utilizando o filter
Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }] */

const maior18anos = usuarios.filter(elem => {
    return elem.idade > 18 ? 1 : 0;
});

console.log(maior18anos);

/* 2.3 Utilizando o find 
crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined */

const googleEmployee = usuarios.find(elem => {
    return elem.empresa == 'Google';
});

console.log(googleEmployee);

/* 2.4 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos */

const union = usuarios.map(elem => {
    return { ...elem, idade: elem.idade * 2 };
}).filter(elem => {
    return elem.idade <= 50 ? 1 : 0;
})

console.log(union);

/* 3º exercício */

/* Converta as funções nos seguintes trechos de código em Arrow Functions: */

/* 3.1 */
const arr = [1, 2, 3, 4, 5];

//arr.map(function (item) {
//    return item + 10;
//});

const mapArr = arr.map(item => item + 10);
console.log(mapArr);

// 3.2 */
const usuario = { nome: 'Diego', idade: 23 };

//function mostraIdade(usuario) {
//    return usuario.idade;
//}

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

/* 3.3 */
const nome = "Diego";
const idade = 23;

//function mostraUsuario(nome = 'Diego', idade = 18) {
//    return { nome, idade };
//}

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

/* 3.4 */
//const promise = function () {
//    return new Promise(function (resolve, reject) {
//        return resolve();
//    })
//}

const promise = () => new Promise((resolve, reject) => resolve());

console.log(promise());

/* 4º exercício */

/* 4.1 Desestruturação simples a partir do seguinte objeto: */

const empresa = {
    enome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { enome, endereco: { cidade, estado } } = empresa;

/*
Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
fim deve ser possível fazer o seguinte:
*/

console.log(enome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

/* 4.2 Desestruturação em parâmetros na seguinte função: */

//function mostraInfo(usuario) {
//    return `${usuario.nome} tem ${usuario.idade} anos.`;
//}

/*
Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
separadamente e a função poder retornar apenas: return `${nome} tem ${idade} anos.`; */

const mostraInfo = ({ nome, idade }) => `${usuario.nome} tem ${usuario.idade} anos.`;

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

/* 5º Exercício */

/* Utilizando o operador de rest/spread (...) realize as seguintes operações: */

/* 5.1 Rest
A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados.
*/

const arr2 = [1, 2, 3, 4, 5, 6];

const { 0: x, ...y } = arr2;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

/* Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles: */

const soma = (...vars) => vars.reduce((total, prox) => total + prox);

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

/* 5.2 Spread
A partir do objeto e utilizando o operador spread: */

const user = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

/* Crie uma variável user2 que contenha todos os dados do usuário porém com nome Gabriel. */

const user2 = { ...user, nome: 'Gabriel' };
console.log(user2);

/* Crie uma variável user que contenha todos os dados do usuário porém com cidade Lontras. */

const user3 = { ...user, endereco: { cidade: 'Lontras' } };
console.log(user3);

/* 6º Exercício */

/* Converta o seguinte trecho de código utilizando Template Literals: */

const username = 'Diego';
const age = 23;

//console.log('O usuário ' + username + ' possui ' + idade + ' age');
console.log(`O usuário ${username} possui ${age} anos`);

/* 7º exercício */

/* Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto: */

const userName = 'Diego';
const userIdade = 23;

/* const usuario = {
 userName: userName,
 userIdade: userIdade,
 city: 'Rio do Sul',
};*/

const userOSS = { userName, userIdade, city: 'Rio do Sul' };

console.log(userOSS);