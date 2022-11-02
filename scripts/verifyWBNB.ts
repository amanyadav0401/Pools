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
        address: "0xb833ba23d8439EF8284A77CF95791F8ADfe4dd15",
        constructorArguments: ["Reward8","RWD8",expandTo18Decimals(100000)],
        contract: "contracts/RewardToken.sol:Reward",
      });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});