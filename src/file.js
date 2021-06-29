const fs = require('fs');
const fetch = require('node-fetch');

async function fetchFileFromNet(url) {
  let response;

  try {
    response = await fetch(url);
  } catch (e) {
    // console.log(e);
  }

  if (response && response.status !== 200) {
    return undefined;
  }

  return response;
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
