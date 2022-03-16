var SwizzRealtyTokens = artifacts.require("SwizzRealtyTokens")
var Verifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");

module.exports = function(deployer) {
  deployer.deploy(SwizzRealtyTokens);
  deployer.deploy(Verifier).then(function() {
    return deployer.deploy(SolnSquareVerifier, Verifier.address);
  })
};