// Em forma de função
// async function execPromise() {    
//     console.log(await myPromise());
// }

// execPromise();

// Função aguarda 2s e retorna um OK
const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 2000);
})

// Função que chama a promise
const execPromice = async () => {
    console.log(await myPromise());
}

// Execução da promise
execPromice();