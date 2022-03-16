Token
Name: SwizzRealtyTokens
Symbol: SRT
Token Address:https://rinkeby.etherscan.io/token/0xdD191313C6CcD7f3cF813bC131B4fFdF53d812Eb

Original Owner: https://rinkeby.opensea.io/accounts/swizz
Buyer of 5 Listings: https://rinkeby.opensea.io/account/0xb8677682149536b0196353bfa47f86006afb1c9c

Buy Transaction: https://rinkeby.etherscan.io/tx/0x57ed39f3285487854a49020f98a72320f681629f2344154c6b8cdca34ce21e21

Contracts
SolnSquareVerifier Contract - https://rinkeby.etherscan.io/address/0xb3AA8D252cbcae42EA6eb90d85B4bE4a497E85e5
Verifier Contract - https://rinkeby.etherscan.io/address/0xB164263553Ac8a86445780Fd88C396D9653D3897
SwizzRealtyTokens Contract - https://rinkeby.etherscan.io/address/0xdD191313C6CcD7f3cF813bC131B4fFdF53d812Eb

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x126e751f643c5206901cb486bb267236b0eb86c1dd3a2b23c1c3f49c74c7e898
   > Blocks: 2            Seconds: 16
   > contract address:    0xD2d1d646Fa866f9BE77759dD27362F2F2f09b74A
   > block number:        6394439
   > block timestamp:     1588072014
   > account:             0x6B47992CE58c06DD065B4b462e576D2b09e5343B
   > balance:             2.343067381
   > gas used:            225237
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00450474 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00450474 ETH


2_deploy_contracts.js
=====================

   Deploying 'SwizzRealtyTokens'
   -----------------------------
   > transaction hash:    0xd34c56f06ad1e9e6b149c4b7f8cf9edbe1a9ffc2810786ae05a2fec48f9d8a22
   > Blocks: 1            Seconds: 18
   > contract address:    0xdD191313C6CcD7f3cF813bC131B4fFdF53d812Eb
   > block number:        6394442
   > block timestamp:     1588072059
   > account:             0x6B47992CE58c06DD065B4b462e576D2b09e5343B
   > balance:             2.280604861
   > gas used:            3080763
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.06161526 ETH


   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x91cff4aa4cdf26b7a727c534d23dd708cef255493c2a6d35e2bc3e742d201849
   > Blocks: 1            Seconds: 14
   > contract address:    0xB164263553Ac8a86445780Fd88C396D9653D3897
   > block number:        6394444
   > block timestamp:     1588072089
   > account:             0x6B47992CE58c06DD065B4b462e576D2b09e5343B
   > balance:             2.260755761
   > gas used:            992455
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0198491 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xa18a60f241c503abc09af81bb4c452f95ef7db3d93d8fa44c2ec34b360572099
   > Blocks: 0            Seconds: 11
   > contract address:    0xb3AA8D252cbcae42EA6eb90d85B4bE4a497E85e5
   > block number:        6394446
   > block timestamp:     1588072119
   > account:             0x6B47992CE58c06DD065B4b462e576D2b09e5343B
   > balance:             2.187913741
   > gas used:            3642101
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.07284202 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.15430638 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.15881112 ETH

Testing
cd eth-contracts directory
Run truffle compile && truffle migrate --reset
run truffle test
Contract artifacts including ABI can be found in eth-contracts/build/contracts

Versions
Truffle
Truffle v5.0.31 (core: 5.0.31)
Solidity - 0.5.1 (solc-js)
Node v12.16.2


# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
