let Reader = require("./Reader");
let Processor = require("./Processor");
let Table = require("./Table");
let HtmlParser = require("./HtmlParser");
let leitor = new Reader();

async function main() {
  let dados = await leitor.Read("./users.csv");
  let dadosProcessados = Processor.Process(dados);

  let usuarios = new Table(dadosProcessados);
  
  var html = await HtmlParser.Parse(usuarios);

  console.log(html);
}

main();