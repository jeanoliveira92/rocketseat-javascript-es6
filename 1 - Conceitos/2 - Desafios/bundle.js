"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true

/* 2º exercício */

/* A partir do seguinte vetor, utilize os métodos de array (map, reduce, filter e find): */

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
/* 2.1 Utilizando o map, 
crie uma variável que contenha todas idades dos usuários: [23, 15, 30] */

var idades = usuarios.map(function (elem) {
  return elem.idade;
});
console.log(idades);
/* 2.2 Utilizando o filter
Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }] */

var maior18anos = usuarios.filter(function (elem) {
  return elem.idade > 18 ? 1 : 0;
});
console.log(maior18anos);
/* 2.3 Utilizando o find 
crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined */

var googleEmployee = usuarios.find(function (elem) {
  return elem.empresa == 'Google';
});
console.log(googleEmployee);
/* 2.4 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos */

var union = usuarios.map(function (elem) {
  return _objectSpread({}, elem, {
    idade: elem.idade * 2
  });
}).filter(function (elem) {
  return elem.idade <= 50 ? 1 : 0;
});
console.log(union);
/* 3º exercício */

/* Converta as funções nos seguintes trechos de código em Arrow Functions: */

/* 3.1 */

var arr = [1, 2, 3, 4, 5]; //arr.map(function (item) {
//    return item + 10;
//});

var mapArr = arr.map(function (item) {
  return item + 10;
});
console.log(mapArr); // 3.2 */

var usuario = {
  nome: 'Diego',
  idade: 23
}; //function mostraIdade(usuario) {
//    return usuario.idade;
//}

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario));
/* 3.3 */

var nome = "Diego";
var idade = 23; //function mostraUsuario(nome = 'Diego', idade = 18) {
//    return { nome, idade };
//}

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
/* 3.4 */
//const promise = function () {
//    return new Promise(function (resolve, reject) {
//        return resolve();
//    })
//}

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise());
/* 4º exercício */

/* 4.1 Desestruturação simples a partir do seguinte objeto: */

var empresa = {
  enome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var enome = empresa.enome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
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

var mostraInfo = function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(usuario.nome, " tem ").concat(usuario.idade, " anos.");
};

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
/* 5º Exercício */

/* Utilizando o operador de rest/spread (...) realize as seguintes operações: */

/* 5.1 Rest
A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados.
*/

var arr2 = [1, 2, 3, 4, 5, 6];

var x = arr2[0],
    y = _objectWithoutProperties(arr2, ["0"]);

console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]

/* Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles: */

var soma = function soma() {
  for (var _len = arguments.length, vars = new Array(_len), _key = 0; _key < _len; _key++) {
    vars[_key] = arguments[_key];
  }

  return vars.reduce(function (total, prox) {
    return total + prox;
  });
};

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3

/* 5.2 Spread
A partir do objeto e utilizando o operador spread: */

var user = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};
/* Crie uma variável user2 que contenha todos os dados do usuário porém com nome Gabriel. */

var user2 = _objectSpread({}, user, {
  nome: 'Gabriel'
});

console.log(user2);
/* Crie uma variável user que contenha todos os dados do usuário porém com cidade Lontras. */

var user3 = _objectSpread({}, user, {
  endereco: {
    cidade: 'Lontras'
  }
});

console.log(user3);
/* 6º Exercício */

/* Converta o seguinte trecho de código utilizando Template Literals: */

var username = 'Diego';
var age = 23; //console.log('O usuário ' + username + ' possui ' + idade + ' age');

console.log("O usu\xE1rio ".concat(username, " possui ").concat(age, " anos"));
/* 7º exercício */

/* Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto: */

var userName = 'Diego';
var userIdade = 23;
/* const usuario = {
 userName: userName,
 userIdade: userIdade,
 city: 'Rio do Sul',
};*/

var userOSS = {
  userName: userName,
  userIdade: userIdade,
  city: 'Rio do Sul'
};
console.log(userOSS);
