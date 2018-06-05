<img src="https://scontent-cai1-1.xx.fbcdn.net/v/t35.18174-12/s2048x2048/27398289_2174524742561297_1878488069_o.png?_nc_cat=0&oh=94d7f9cf44259366944a8b30e3a06164&oe=5B187AAA" height="45px"/> MedX Smart Contracts
=========================================================================================

self hosted contracts to help developer run local tests

### For testing locally:

1. start the test server `$ testrpc`, ganache or any local test environment
2. compile the contracts `$ npm run compile`
3. migrate the contracts `$ npm run migrate`
4. run lite server to host the contract apb `$ npm run dev`


### Hosted apb contracts:

`GET: {host ip}:3000/{contract name}.json`
