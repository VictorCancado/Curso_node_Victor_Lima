let Reader = require("./Reader");
let Writer = require("./Writer");
let Processor = require("./Processor");
let Table = require("./Table");
let HtmlParser = require("./HtmlParser");

let leitor = new Reader();
let escritor = new Writer();

async function main() {
  let dados = await leitor.Read("./users.csv");
  let dadosProcessados = Processor.Process(dados);

  let usuarios = new Table(dadosProcessados);
  
  var html = await HtmlParser.Parse(usuarios);

  escritor.Write("meuarquivogerado.html", html);

  console.log(html);
}

main();