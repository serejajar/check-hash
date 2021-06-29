const process = require('process');

const copmareHash = require('./src/compare');

process.on('exit', (code) => {
  console.log(`Скрипт остановлен с кодом: ${code}`);
});

const [, , fileArg] = process.argv;

copmareHash(fileArg);
