import '@matterlabs/hardhat-zksync-solc'

export default {
  networks: {
    hardhat: {
      zksync: true
    }
  },
  solidity: {
    version: '0.5.16'
  },
  zksolc: {
    version: '1.3.13',
    compilerSource: 'binary',
    settings: {}
  }
}
