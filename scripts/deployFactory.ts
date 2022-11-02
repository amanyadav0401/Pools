import { SignerWithAddress } from "../node_modules/@nomiclabs/hardhat-ethers/signers";
import { ethers, network } from "hardhat";
import {
  expandTo18Decimals,
  expandTo6Decimals,
} from "../test/utilities/utilities";
import { SmartChefFactory, PancakeProfile } from "../typechain";

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {
  // We get the contract to deploy
  const owner = "0x8008985282aCa5835F09c3ffE09C9B380b2cEFd0";

  // const factory1 = await ethers.getContractFactory("SmartChefFactory");
  // const factory = await factory1.deploy();
  // await sleep(4000);
  // console.log("Factory Deployed", factory.address);


  const profile1 = await ethers.getContractFactory("PancakeProfile");
  const profile = await profile1.deploy(
    "0x6044Df88bD28465D130b99B97B6cD8A32370F11c",
    expandTo18Decimals(10),
    expandTo18Decimals(10),
    expandTo18Decimals(1)
  );
  await sleep(4000);
  // console.log("Cake Deployed", factory.address);
  console.log("Profile Deployed", profile.address);
  await profile.addTeam("Team1","Team1");
  await sleep(4000);
  console.log("Team added!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // Factory Deployed 0x1B5d5c92369757587dB5601136b18f53E7A0C481
  // Profile Deployed 0xA22e608f66dd172DFb846D588c63A6AfbD8b2629
