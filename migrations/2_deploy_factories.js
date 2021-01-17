const TMath = artifacts.require('TMath');
const CToken = artifacts.require('CToken');
const BFactory = artifacts.require('BFactory');

module.exports = async function (deployer, network, accounts) {
    if (network === 'development' || network === 'coverage') {
        deployer.deploy(TMath);
    }
    deployer.deploy(BFactory);
};
