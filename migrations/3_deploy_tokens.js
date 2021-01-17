const WPOA = artifacts.require('WPOA');

module.exports = async function (deployer, network, accounts) {
    if (network === 'sokol') {
        deployer.deploy(WPOA);
    }
};
