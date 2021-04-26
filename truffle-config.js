require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const ContractKit = require('@celo/contractkit')

const Web3 = require('web3');
const web3_alfajores = new Web3(process.env.ALFAJORES_REST_URL);
const web3_celo = new Web3(process.env.CELO_REST_URL);
const web3 = new Web3();

const mnemonicPhrase = process.env.MNEMONIC;
const privateKey = process.env.PRIVATEKEY;
const kit = ContractKit.newKitFromWeb3(web3_alfajores) // Change to Celo web3 for main net deployment
const account = web3_alfajores.eth.accounts.privateKeyToAccount(privateKey)
kit.connection.addAccount(account.privateKey);

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
          providerOrUrl: web3,
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
          providerOrUrl: ``,
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
          providerOrUrl: ``,
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
        providerOrUrl: web3,
      }),
    gas: 12087782,
    gasPrice: 1000000000,
    network_id: 100,
},
catalyst: {
    provider: () =>
    new HDWalletProvider({
      mnemonic: {
        phrase: mnemonicPhrase
      },
      providerOrUrl: web3,
    }),
  gas: 12087782,
  gasPrice: 1000000000,
  network_id: 10000,
},
alfajores: {
  provider: kit.connection.web3.currentProvider, // CeloProvider
  network_id: 44787                              // Alfajores Celo test netowrk network id
},
celo: {
  provider: kit.connection.web3.currentProvider, // CeloProvider
  network_id: 44787                              // Alfajores Celo test netowrk network id
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
