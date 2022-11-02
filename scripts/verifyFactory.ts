const hre = require("hardhat");
import {
    expandTo18Decimals,
    expandTo6Decimals,
  } from "../test/utilities/utilities";

async function main() {

    console.log("after");
  
    // await hre.run("verify:verify", {
    //     address: "0x101b7dDc926B5877364a08D32711D03349621E73",
    //     constructorArguments: [],
    //     contract: "contracts/SmartChefFactory.sol:SmartChefFactory",
    //   });
      await hre.run("verify:verify", {
        address: "0x9b2990771ea3EC726bdeE77F76bE6533344236E2",
        constructorArguments: ["0x6044Df88bD28465D130b99B97B6cD8A32370F11c",expandTo18Decimals(10),expandTo18Decimals(10),expandTo18Decimals(1)],
        contract: "contracts/PancakeProfile.sol:PancakeProfile",
      });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});