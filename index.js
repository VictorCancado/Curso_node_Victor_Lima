const fs = require('fs');

fs.readFile('./victor.txt', {encoding: 'utf-8'}, (erro, dados) => {

    if(erro) {
      console.log("Ocorreu uma falha ao ler o arquivo.");
    } else {
      console.log(dados);
    }
});