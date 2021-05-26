const WPOA = artifacts.require('WPOA');
const WCGLD = artifacts.require('WCGLD');

module.exports = async function (deployer, network, accounts) {
    if (network === 'sokol') {
        deployer.deploy(WPOA);
    }
    if (network === 'alfajores') {
        deployer.deploy(WCGLD);
    }
    if (network === 'celo') {
        deployer.deploy(WCGLD);
    }
};
