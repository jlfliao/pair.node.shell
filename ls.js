const fs = require('fs');

const lsFunc = function (doneFunc) {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      console.log(doneFunc);
      doneFunc(files.join('\n'));
      process.stdout.write('prompt > ');
    }
  });
};

module.exports = lsFunc;
