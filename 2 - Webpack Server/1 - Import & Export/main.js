// Metodos de importação

//import { soma } from './funcoes'; // Importa um unico elemento da biblioteca
//import * as math from './funcoes'; // Importa todos elementos da biblioteca
import soma, { sub, mult } from './funcoes'; // Importa a default + outras duas funções 

// Teste das funções
console.log(soma(3,2));
console.log(sub(3,2));
console.log(mult(3,2));