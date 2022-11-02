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
        address: "0xF3d590623cb1240b4A39267a6A6b48Fe3EA4a7FE",
        constructorArguments: ["0x7D13149840Cdf3F823771460B3E3094BD9f6504E","false",0],
        contract: "contracts/SmartChefInitializable.sol:SmartChefInitializable",
      });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});