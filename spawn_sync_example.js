var sync = require('child_process').spawnSync;

console.log('start ls');
var ls = sync('ls', ['-lh', '/usr']);
console.log('end ls');

console.log('start grep');
var grep = sync('grep', ['local'], {
    input: ls.stdout
})
console.log('end grep');

process.on('exit', function() {
    console.log(grep.stdout.toString());
});
