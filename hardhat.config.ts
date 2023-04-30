import '@matterlabs/hardhat-zksync-solc'

export default {
    networks: {
        zkSyncTestnet: {
            url: "https://testnet.era.zksync.dev",
            ethNetwork: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
            zksync: true,
        },
    },
    solidity: {
        version: '0.5.16',
        settings: {
            optimizer: {
                enabled: true,
                runs: 999999,
            },
        },
    },
    zksolc: {
        version: "1.3.10",
        compilerSource: "binary",
        settings: {},
    },
}