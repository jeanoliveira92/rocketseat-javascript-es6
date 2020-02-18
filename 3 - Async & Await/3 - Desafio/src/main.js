/*  Desafio: Transforme os seguintes trechos de código utilizando async/await: */
import axios from 'axios';

/* -------------------------------- EX 01 -------------------------------- */

// Função delay aciona o .then após 1s
/*const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}

umPorSegundo();*/

// Função delay de 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// Função que chama a promise delay a cada 1s
async function umPorSegundo() {
    try {
        console.log("EX 01");
        await delay();
        console.log('1s');
        await delay();
        console.log('2s');
        await delay();
        console.log('3s');
    } catch (err) {

    }
}

// Execução da funcao delay
umPorSegundo();


/* -------------------------------- EX 02 --------------------------------   */

/*
function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
*/

// Função assincrono para receber dados de um usuario válido pela api do github
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log("EX 02");
        console.log(response.data);

    } catch (err) {
        console.warn('Usuário não existe');
    }
}
getUserFromGithub('jeanoliveira92'); // Teste usuario valido
getUserFromGithub('jeanoliveira922');// Teste usuario invalido


/* -------------------------------- EX 03 --------------------------------   */

/*
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
*/

// Classe com função estática para a aquisição de dados de um repositorio de 
// um usuario valido pela api do github
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log("EX 03");
            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('jeanoliveira92/infinity-bosses');  // Teste repositorio valido
Github.getRepositories('jeanoliveira92/infinity-bossesss');// Teste repositorio invalido

/*


/* -------------------------------- EX 04 --------------------------------   */
/*
const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
}

buscaUsuario('diego3g');
*/

// Função de busca de usuário em forma de constante
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log("EX 04");
        console.log(response.data);
    }
    catch (err) {
        console.log(`Usuário não existe: ${usuario}`);
    }
}
// Chamada da função através da constante
buscaUsuario('jeanoliveira92');