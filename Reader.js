const fs = require("fs");

class Reader {
    Read(filePath) {
        fs.readFile(filePath, "utf-8", (erro, dados) => {
            if(erro) {
              console.log(erro);
            } else {
              console.log(dados);
            }
        })
    }
}

module.exports = Reader;