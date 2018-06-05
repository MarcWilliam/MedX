<img src="https://scontent-cai1-1.xx.fbcdn.net/v/t1.15752-0/p480x480/34411275_10216645685038246_2935287233994817536_n.png?_nc_cat=0&oh=9531d3abfd6e9e8221e9166d42da9ae7&oe=5B7AA002" height="45px"/> MedX Smart Contracts
=========================================================================================

self hosted contracts to help developer run local tests

### For testing locally:

1. start the test server `$ testrpc`, ganache or any local test environment
2. compile the contracts `$ npm run compile`
3. migrate the contracts `$ npm run migrate`
4. run lite server to host the contract apb `$ npm run dev`


### Hosted apb contracts:

`GET: {host ip}:3000/{contract name}.json`
