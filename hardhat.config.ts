import '@matterlabs/hardhat-zksync-solc'

export default {
    networks: {
        zkSyncLocalhost: {
            url: 'http://localhost:3050',
            ethNetwork: 'http://localhost:8545',
            zksync: true,
        },
        zkSyncTestnet: {
            url: 'https://testnet.era.zksync.dev',
            ethNetwork: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
            zksync: true,
        },
        zkSyncMainnet: {
            url: 'https://mainnet.era.zksync.io',
            ethNetwork: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
            zksync: true,
        },
    },
    defaultNetwork: 'zkSyncLocalhost',
    solidity: {
        version: '0.5.16',
    },
    zksolc: {
        version: '1.3.12',
        compilerSource: 'binary',
        settings: {},
    },
}