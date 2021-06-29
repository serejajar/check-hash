const fs = require('fs');
const fetch = require('node-fetch');

async function fetchFileFromNet(url) {
  let file;

  try {
    const result = await fetch(url);
    if (result && result.status === 200) {
      file = result.text();
    }
  } catch (e) {
    // console.log(e);
  }

  return file;
}

function readFileFromDisk(filePath) {
  let file;
  try {
    const options = { encoding: 'utf8' };
    file = fs.readFileSync(filePath, options);
  } catch (e) {
    // console.log(e);
  }

  return file;
}

function getFile(pathOrUrl, callback) {
  const isLink = pathOrUrl.search(/(https?:\/\/[^\s]+)/gi) !== -1;

  return isLink
    ? fetchFileFromNet(pathOrUrl, callback)
    : readFileFromDisk(pathOrUrl, callback);
}

module.exports = getFile;
