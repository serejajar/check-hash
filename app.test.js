const path = require('path');
const process = require('process');

const copmareHash = require('./src/compare');

const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});

test('Correct file and hash', async () => {
  const filePath = path.join(__dirname, './mocks/correct.txt');
  await copmareHash(filePath);

  expect(mockExit).not.toHaveBeenCalled();
});

test('Correct link and hash', async () => {
  const url = 'https://raw.githubusercontent.com/serejajar/check-hash/main/mocks/correct.txt';
  await copmareHash(url);

  expect(mockExit).not.toHaveBeenCalled();
});

test('Correct link and wrong hash file', async () => {
  const url = 'https://github.com/serejajar/check-hash/blob/main/README.md';
  await copmareHash(url);

  expect(mockExit).toHaveBeenCalledWith(101);
});

test('Wrong file', async () => {
  const filePath = path.join(__dirname, './mocks/qwerty');
  await copmareHash(filePath);

  expect(mockExit).toHaveBeenCalledWith(100);
});

test('Wrong link', async () => {
  const url = 'https://abcd';
  await copmareHash(url);

  expect(mockExit).toHaveBeenCalledWith(100);
});

test('Wrong link (404)', async () => {
  const url = 'https://github.com/serejajar/check-hash/blob/main/README.md123';
  await copmareHash(url);

  expect(mockExit).toHaveBeenCalledWith(100);
});

test('Different hash', async () => {
  const filePath = path.join(__dirname, './mocks/not-equal-hash.txt');
  await copmareHash(filePath);

  expect(mockExit).toHaveBeenCalledWith(102);
});
