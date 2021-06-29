# check-hash
Simple script which get file from local disk or web for a comparition with its hash (sha256). For

### Install:
```bash
npm install
node index.js some-test-file.txt
```

### Usage:
In he case bellow the script will:
1. get the file (local or web)
2. will get for {filename}.sha256
3. will compare with calculated from the file

```bash
node index.js https://raw.githubusercontent.com/serejajar/check-hash/main/mocks/correct.txt
node index.js mocks/correct.txt
```
On each step was added exit codes:

```bash
node index.js unexistent.txt # will exit with code 100
node index.js mocks/without-hash.txt # will exit with code 101
node index.js mocks/not-equal-hash.txt # will exit with code 102
```
