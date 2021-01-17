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
        deployer.deploy(ExchangeProxy, '');
    }

    if (network === 'xdai') {
        deployer.deploy(ExchangeProxy, '');
    }

    if (network === 'kovan') {
        deployer.deploy(ExchangeProxy, '');
    }

    if (network === 'homestead') {
        deployer.deploy(ExchangeProxy, '');
    }
  
    deployer.deploy(Multicall);
};
