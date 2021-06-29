const process = require('process');
const crypto = require('crypto');

const getFile = require('./file');

async function copmareHash(fileArg) {
  const file = await getFile(fileArg);
  if (!file) {
    process.exit(100);
  }
  // get hash for file
  const hash = await getFile(`${fileArg}.sha256`);
  if (!hash) {
    process.exit(101);
  }
  // compare
  if (file && hash) {
    const sumHash = crypto.createHash('sha256');
    sumHash.update(file.trim());

    if (sumHash.digest('hex') !== hash.trim()) {
      process.exit(102);
    }
  }
}

module.exports = copmareHash;
