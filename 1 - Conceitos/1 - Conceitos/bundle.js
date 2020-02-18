"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ----------------------------- CLASSES
var list =
/*#__PURE__*/
function () {
  function list() {
    _classCallCheck(this, list);

    this.data = [];
  }

  _createClass(list, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return list;
}();

var ToDoList =
/*#__PURE__*/
function (_list) {
  _inherits(ToDoList, _list);

  function ToDoList() {
    var _this;

    _classCallCheck(this, ToDoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToDoList).call(this));
    _this.usuario = 'Jean';
    return _this;
  }

  _createClass(ToDoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return ToDoList;
}(list);

;
var MinhaLista = new ToDoList();

document.getElementById('novotodo').onclick = function () {
  alert("novoTodo");
  MinhaLista.add("Novo todo");
}; // ----------------------------- CLASSE ABSTRATA


var matematica =
/*#__PURE__*/
function () {
  function matematica() {
    _classCallCheck(this, matematica);
  }

  _createClass(matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return matematica;
}();

console.log(matematica.soma(1, 2)); // ----------------------------- CONST, LET, VAR
// não é possivel, pois esta alterando o valor de uma constante

try {
  var a = 1;
  a = (_readOnlyError("a"), 3);
} catch (e) {
  console.log('Error');
} // este caso é possivel. Não esta alterando o tipo do objeto, mas o valor. 
// não é uma aleração, mas sim, uma mutação.


var usuario = {
  nome: 'Diego'
};
usuario.nome = 'Jean';
console.log(usuario.nome); // LET em nivel de escopo.

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }

  console.log(x, y);
}

teste(10); // -----------------------------  ARRAYS

var arr = [1, 2, 3, 4, 5, 6, 7];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); // -----------------------------  ES6

var newArray = arr.map(function (item) {
  return item * 2;
});
console.log(newArray);

var tester = function tester() {
  return {
    nome: 'Jean'
  };
};

console.log(tester()); // CONTORNAR ERROS
// Definir valores padrao

var somar = function somar() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return a + b;
};

console.log(somar(1));
console.log(somar()); // DESESTRUTURACAO

var usuarios = {
  nome: 'Jean',
  idade: 27,
  endereco: {
    cidade: 'Paraisopolis',
    estado: 'MG'
  }
};
var nome = usuarios.nome,
    idade = usuarios.idade,
    cidade = usuarios.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); // REST
// RESTO DAS PROPRIEDADES

var user = {
  username: 'Jean',
  age: '27',
  city: 'SJC'
};

var username = user.username,
    rest = _objectWithoutProperties(user, ["username"]);

console.log(nome);
console.log(rest);

function somarSpread(a, b) {
  for (var _len = arguments.length, outros = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    outros[_key - 2] = arguments[_key];
  }

  return a + b + outros.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somarSpread(1, 3, 4, 5)); // SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var user1 = {
  nome: 'Diego',
  idade: '23',
  empresa: 'Rocketseat'
};

var user2 = _objectSpread({}, user1, {
  nome: 'Jean'
});

console.log(user2); // Literals

var name = "Jean";
var age = 27; //console.log("Meu nome é: " + name + " e eu tenho "+ age);

console.log("Meu nome \xE9: ".concat(name, " e eu tenho ").concat(age)); // SHORT Syntax

var usuario1 = {
  nome: nome,
  // nome : nome
  idade: idade,
  // idade : idade
  empresa: 'Rocketseat'
};
console.log(usuario1);
