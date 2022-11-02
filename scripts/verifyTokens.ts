const hre = require("hardhat");
import {
    expandTo18Decimals,
    expandTo6Decimals,
  } from "../test/utilities/utilities";

async function main() {

    console.log("after");
  
    await hre.run("verify:verify", {
        address: "0x77555Ba9ceccF37874f9ba639816A586435A9EB0",
        constructorArguments: ["Cake","CKK",expandTo18Decimals(100000)],
        contract: "contracts/CakeToken.sol:Cake",
      });
      await hre.run("verify:verify", {
        address: "0xcf6bdf2993908e17ACB3f5ED32648BE0D0CDB67E",
        constructorArguments: ["Reward","RWD",expandTo18Decimals(100000)],
        contract: "contracts/RewardToken.sol:Reward",
      });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});