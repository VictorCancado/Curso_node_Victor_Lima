const fs = require("fs");
const util = require("util");

class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile);
    }
    async Read(filePath) {
        try {
          let file = await this.reader(filePath, "utf-8");
          return file;
        } catch (err) {
            return undefined;
        }
    }
}

module.exports = Reader;