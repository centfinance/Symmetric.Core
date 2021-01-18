const ProxyFactory = artifacts.require('DSProxyFactory');
const ProxyRegistry = artifacts.require('ProxyRegistry');
const ExchangeProxy = artifacts.require('ExchangeProxy');
const BActions = artifacts.require('BActions');
const Multicall = artifacts.require('Multicall');

module.exports = function (deployer, network) {
    deployer.deploy(ProxyFactory).then(function() {
        return deployer.deploy(ProxyRegistry, ProxyFactory.address);
      });

      deployer.deploy(BActions);

    if (network === 'sokol') {
        deployer.deploy(ExchangeProxy, '0x2E422C7fb2b5149A28d2c408f830504b873f14B1');
    }

    if (network === 'xdai') {
        deployer.deploy(ExchangeProxy, '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d');
    }

    if (network === 'kovan') {
        deployer.deploy(ExchangeProxy, '0xd0A1E359811322d97991E03f863a0C30C2cF029C');
    }

    if (network === 'homestead') {
        deployer.deploy(ExchangeProxy, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
    }
  
    deployer.deploy(Multicall);
};
