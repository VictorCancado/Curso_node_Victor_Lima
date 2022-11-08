let Reader = require("./Reader");
let Processor = require("./Processor");
let Table = require("./Table");

let leitor = new Reader();

async function main() {
  let dados = await leitor.Read("./users.csv");
  let dadosProcessados = Processor.Process(dados);

  let usuarios = new Table(dadosProcessados);

  console.log(usuarios.rows)
}

main();