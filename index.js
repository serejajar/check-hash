const process = require('process');

const copmareHash = require('./src/compare');

process.on('exit', (code) => {
  console.log(`Exit with code: ${code}`);
});

const [, , fileArg] = process.argv;

copmareHash(fileArg);
