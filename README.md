# encodeclub
Solidity Bootcamp

Setup Skeleton project:

`yarn init -2`

`yarn config set nodeLinker node-modules`

`yarn add hardhat --dev`

`yarn hardhat init`

`yarn add --dev "hardhat@^2.11.1" "@nomicfoundation/hardhat-toolbox@^2.0.0" "@nomicfoundation/hardhat-network-helpers@^1.0.0" "@nomicfoundation/hardhat-chai-matchers@^1.0.0" "@nomiclabs/hardhat-ethers@^2.0.0" "@nomiclabs/hardhat-etherscan@^3.0.0" "chai@^4.2.0" "ethers@^5.4.7" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.8.0" "@typechain/hardhat@^6.1.2" "typechain@^8.1.0" "@typechain/ethers-v5@^10.1.0" "@ethersproject/abi@^5.4.7" "@ethersproject/providers@^5.4.7" "@types/chai@^4.2.0" "@types/mocha@>=9.1.0" "@types/node@>=12.0.0" "ts-node@>=8.0.0" "typescript@>=4.5.0"`

Or More uptodate versions

`yarn add --dev "@ethersproject/abi@^5.7.0" "@ethersproject/providers@^5.7.2" "@nomicfoundation/hardhat-chai-matchers@^1.0.6" "@nomicfoundation/hardhat-network-helpers@^1.0.8" "@nomicfoundation/hardhat-toolbox@^2.0.1" "@nomiclabs/hardhat-ethers@^2.2.2" "@nomiclabs/hardhat-etherscan@^3.1.6" "@typechain/ethers-v5@^10.2.0" "@typechain/hardhat@^6.1.5" "@types/chai@^4.3.4" "@types/mocha@^10.0.1" "@types/node@^18.14.0" "chai@^4.3.7" "ethers@^5.4.7" "hardhat@^2.11.1" "hardhat-gas-reporter@^1.0.9" "mocha@^10.2.0" "solidity-coverage@^0.8.2" "ts-node@^10.9.1" "typechain@^8.1.1" "typescript@^4.9.5"`

`yarn add mocha --dev`

`rm contracts/Lock.sol`
`rm test/Lock.sol`
`rm scripts/deploy.ts`

`rename test tests`