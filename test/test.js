require(__dirname + "/../dist/color-script.js");
const fs = require("fs");
const testFiles = fs.readdirSync(__dirname + "/tests");
for(let index=0; index<testFiles.length; index++) {
  const testFile = testFiles[index];
  const contenido = fs.readFileSync(__dirname + "/tests/" + testFile).toString();
  try {
    const ast = ColorScript.parser.parse(contenido);
    console.log(ast);
  } catch (error) {
    console.log(error);
  }
}
