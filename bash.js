const fs = require('fs');

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmdLine = data.toString().trim();
  const cmdArray = cmdLine.split(' ');

  const cmd = cmdArray[0];
  const path = cmdArray[1] || '';
  switch (cmd) {
    case 'curl':
      curl(path);
      break;
    case 'pwd':
      process.stdout.write(pwd());
      break;
    case 'ls':
      ls(done);
      break;
    case 'cat':
      cat(path);
      break;
    default:
      process.stdout.write('You typed: ' + cmd);
      break;
  }
  process.stdout.write('\nprompt > ');
});

function done(output) {
  process.stdout.write(output);
}
