require("@nomicfoundation/hardhat-toolbox");

// Network settings come from your shell (never commit them):
//   MUMBAI_ALCHEMY_URL  e.g. https://polygon-mumbai.g.alchemy.com/v2/<api-key>
//   MUMBAI_PRIVATE_KEY  deployer wallet private key
const { MUMBAI_ALCHEMY_URL, MUMBAI_PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:
    MUMBAI_ALCHEMY_URL && MUMBAI_PRIVATE_KEY
      ? { polygon_mumbai: { url: MUMBAI_ALCHEMY_URL, accounts: [MUMBAI_PRIVATE_KEY] } }
      : {},
};
