const ProxyFactory = artifacts.require('DSProxyFactory');
const ProxyRegistry = artifacts.require('ProxyRegistry');
const ExchangeProxy = artifacts.require('ExchangeProxy');
const BActions = artifacts.require('BActions');
const Multicall = artifacts.require('Multicall');

module.exports = function (deployer, network) {
    deployer.deploy(ProxyFactory).then(function () {
        return deployer.deploy(ProxyRegistry, ProxyFactory.address);
    });

    deployer.deploy(BActions);

    // WETH
    if (network === 'homestead') {
        deployer.deploy(ExchangeProxy, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
    }

    // WETH
    if (network === 'kovan') {
        deployer.deploy(ExchangeProxy, '0xd0A1E359811322d97991E03f863a0C30C2cF029C');
    }

    // WXDAI
    if (network === 'xdai') {
        deployer.deploy(ExchangeProxy, '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d');
    }

    // WETH
    if (network === 'sokol') {
        deployer.deploy(ExchangeProxy, '0xfDc50eF6b67F65Dddc36e56729a9D07BAe1A1f68');
    }

    // cGLD
    if (network === 'alfajores') {
        deployer.deploy(ExchangeProxy, '0xBe04ae09b9e41b8828b8866280bF882b42576b4e');
    }

    // cGLD
    if (network === 'celo') {
        deployer.deploy(ExchangeProxy, '0x5Cb6A52db2a37540E65c52ed0256211Ab3b61D08');
    }

    deployer.deploy(Multicall);
};
