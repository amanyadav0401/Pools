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
        address: "0xf5c54F3dC2B4c105f87f5ac0aF0D8a7B0eA8E284",
        constructorArguments: ["0x72eFE8B228001548CB05B816945522Be097f10Cf",expandTo18Decimals(10),expandTo18Decimals(10),expandTo18Decimals(1)],
        contract: "contracts/PancakeProfile.sol:PancakeProfile",
      });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});