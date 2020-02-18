import axios from 'axios';

// Classe com função estática que busca informações de um usuário noa api do github 
class api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }catch(err){
            console.warn('Erro na API');
        }
    }
}

// Chamada da função estática da classe. Parametro sendo o nome de um usuário válido do github
api.getUserInfo('jeanoliveira92');