var markdown = require('markdown').markdown;
var os = require('os');
var spawnSync = require('child_process').spawnSync;
const command1 = "ls"
var outp = spawnSync(command1)
console.log(outp);
document.write(markdown.toHTML("Hello **World**!"));
