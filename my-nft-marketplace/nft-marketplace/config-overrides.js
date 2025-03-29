// filepath: c:\Users\dewan\Desktop\Web-3.O\my-nft-marketplace\nft-marketplace\config-overrides.js
module.exports = function override(config) {
    config.ignoreWarnings = [
        {
            module: /node_modules\/web3/,
            message: /Failed to parse source map/,
        },
    ];
    return config;
};