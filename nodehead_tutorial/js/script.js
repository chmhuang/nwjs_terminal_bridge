// Mixing jQuery and Node.js code in the same file? Yes please!

var main = function() {/* Push the body and the nav over by 285px over */
  $('#one').click(function() {
    console.log("i got clicked");
    spawn = require('child_process').spawn,
    ls    = spawn('adb', ['devices']); // the second arg is the command 
    ls.stdout.on('data', function (data) {    // register one or more handlers
      console.log('stdout: ' + data);
      $( "#one" ).html( "<p>"+data+"</p>" );
    });
  });

  $('#two').click(function() {
    console.log("i got clicked");
    spawn = require('child_process').spawn,
    ls    = spawn('lsusb'); // the second arg is the command 
    ls.stdout.on('data', function (data) {    // register one or more handlers
      console.log('stdout: ' + data);
      $( "#two" ).html( "<p>"+data+"</p>" );
    });
  });

  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
    
	console.log("menu got clicked");
	var util  = require('util'),
    spawn = require('child_process').spawn,
    ls    = spawn('adb', ['devices']); // the second arg is the command 
    
    //ls    = spawn('ls', ['-lh', '/usr']); // the second arg is the command 
                                          // options

	ls.stdout.on('data', function (data) {    // register one or more handlers
  	console.log('stdout: ' + data);
  	$( "div.icon-menu" ).html( "<p>"+data+"</p>" );

	});

	ls.stderr.on('data', function (data) {
  	console.log('stderr: ' + data);
	});

	ls.on('exit', function (code) {
  	console.log('child process exited with code ' + code);
	});

	//$( "div.icon-menu" ).html( "<p>what!</p>" );

	process.on('exit', function() {
	});

  });

};

$(document).ready(main);
