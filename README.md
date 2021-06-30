# check-hash
Simple script which gets file from local disk or web for comparison with it's hash (sha256). For

### Install:
```bash
npm install
node index.js some-test-file.txt
```

### Usage:
In the case bellow the script will:
1. get the file (local or web)
2. will get for {filename}.sha256
3. will calculate hash from the file (p.1) and compare it with calculated one (p.2)

```bash
node index.js https://raw.githubusercontent.com/serejajar/check-hash/main/mocks/correct.txt
node index.js mocks/correct.txt
```
On each step there were added exit codes:

```bash
node index.js unexistent.txt # will exit with code 100
node index.js mocks/without-hash.txt # will exit with code 101
node index.js mocks/not-equal-hash.txt # will exit with code 102
```
