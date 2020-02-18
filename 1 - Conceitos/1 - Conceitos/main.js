// ----------------------------- CLASSES

class list {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList extends list {
    constructor() {
        super()

        this.usuario = 'Jean';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

};

var MinhaLista = new ToDoList();

document.getElementById('novotodo').onclick = function () {
    alert("novoTodo");
    MinhaLista.add("Novo todo");
};

// ----------------------------- CLASSE ABSTRATA
class matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(matematica.soma(1, 2));

// ----------------------------- CONST, LET, VAR

// não é possivel, pois esta alterando o valor de uma constante
try {
    const a = 1;
    a = 3;
} catch (e) {
    console.log('Error');
}

// este caso é possivel. Não esta alterando o tipo do objeto, mas o valor. 
// não é uma aleração, mas sim, uma mutação.
const usuario = { nome: 'Diego' };

usuario.nome = 'Jean';

console.log(usuario.nome);

// LET em nivel de escopo.
function teste(x) {
    let y = 2;

    if (x > 5) {
        let y = 4;
        console.log(x, y);
    }
    console.log(x, y);
}

teste(10);

// -----------------------------  ARRAYS

const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.map(function (item, index) {
    return item + index;
})

console.log(newArr);

const sum = arr.reduce(function (total, next) {
    return total + next;
})

console.log(sum);

const filter = arr.filter(function (item) {
    return item % 2 === 0;
})

console.log(filter);

const find = arr.find(function (item) {
    return item === 4;
})

console.log(find);

// -----------------------------  ES6

const newArray = arr.map(item => item * 2)

console.log(newArray);

const tester = () => ({ nome: 'Jean' });

console.log(tester());

// CONTORNAR ERROS
// Definir valores padrao
const somar = (a = 3, b = 5) => a + b;

console.log(somar(1));
console.log(somar());

// DESESTRUTURACAO

const usuarios = {
    nome: 'Jean',
    idade: 27,
    endereco: {
        cidade: 'Paraisopolis',
        estado: 'MG'
    },
};

const { nome, idade, endereco: { cidade } } = usuarios;

console.log(nome);
console.log(idade);
console.log(cidade);

// REST
// RESTO DAS PROPRIEDADES

const user = {
    username: 'Jean',
    age: '27',
    city: 'SJC'
};

const { username, ...rest } = user;

console.log(nome);
console.log(rest);

function somarSpread(a, b, ...outros){
    return a + b + outros.reduce( (total, next) => total + next);   
}

console.log(somarSpread(1,3,4,5));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const user1 = {
    nome: 'Diego',
    idade: '23',
    empresa: 'Rocketseat'
}

const user2 = { ...user1, nome: 'Jean'};

console.log(user2);

// Literals

const name = "Jean";
const age = 27;

//console.log("Meu nome é: " + name + " e eu tenho "+ age);
console.log(`Meu nome é: ${name} e eu tenho ${age}`);

// SHORT Syntax

const usuario1 = {
    nome, // nome : nome
    idade, // idade : idade
    empresa: 'Rocketseat'
}

console.log(usuario1);