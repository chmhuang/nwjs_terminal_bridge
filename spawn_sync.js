var sync = require('child_process').spawnSync;

var ls = sync('ls');
// opens new terminal
var new_term = sync('gnome-terminal');
console.log("new term pid =" + new_term.pid);
console.log(ls.stdout.toString());

process.on('exit', function() {
});
