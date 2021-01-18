require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const web3 = new Web3();
const mnemonicPhrase = process.env.MNEMONIC;
const infuraKey = 'fj4jll3k.....';

module.exports = {
    networks: {
        development: {
            host: '0.0.0.0', // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: '*', // Any network (default: none)
            gas: 10000000,
        },
        coverage: {
            host: '0.0.0.0',
            network_id: '*',
            port: 8545,
            gas: 0xfffffffffff,
            gasPrice: 0x01,
        },
        homestead: {
            provider: () =>
              new HDWalletProvider({
                mnemonic: {
                  phrase: mnemonicPhrase
                },
                providerOrUrl: `https://mainnet.infura.io/v3/${infuraKey}`,
      //          numberOfAddresses: 1,
      //          shareNonce: true,
      //          derivationPath: "m/44'/1'/0'/0/"
                derivationPath: "m/44'/60'/0'/0/"
              }),
            gas: 10000000,
            gasPrice: web3.utils.toWei('46', 'gwei'),
            network_id: 1,
        },
        kovan: {
            provider: () =>
              new HDWalletProvider({
                mnemonic: {
                  phrase: mnemonicPhrase
                },
                providerOrUrl: `https://kovan.infura.io/v3/${infuraKey}`,
              }),
              gas: 10000000,
              gasPrice: web3.utils.toWei('46', 'gwei'),
              network_id: 42,
        },
        sokol: {
            provider: () =>
              new HDWalletProvider({
                mnemonic: {
                  phrase: mnemonicPhrase
                },
                providerOrUrl: "https://sokol.poa.network",
              }),
              gas: 10000000,
              gasPrice: 5000000000,
              network_id: 77,
        },
        xdai: {
            provider: () =>
            new HDWalletProvider({
              mnemonic: {
                phrase: mnemonicPhrase
              },
              providerOrUrl: "https://dai.poa.network",
            }),
          gas: 12087782,
          gasPrice: 1000000000,
          network_id: 100,
    	}
    },
    // Configure your compilers
    compilers: {
        solc: {
            version: '^0.5.0',
            settings: { // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 100,
                },
                evmVersion: 'istanbul',
            },
        },
    },
};
