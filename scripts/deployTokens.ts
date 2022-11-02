import { SignerWithAddress } from "../node_modules/@nomiclabs/hardhat-ethers/signers";
import { ethers, network } from "hardhat";
import {
  expandTo18Decimals,
  expandTo6Decimals,
} from "../test/utilities/utilities";
import {
  Cake,Reward
} from "../typechain";

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {
  // We get the contract to deploy
  const owner = "0x8008985282aCa5835F09c3ffE09C9B380b2cEFd0";

  // const cake1 = await ethers.getContractFactory("Cake");
  // const cake = await cake1.deploy("Cake","CKK",expandTo18Decimals(100000));
  const reward1 = await ethers.getContractFactory("Reward");
  const reward = await reward1.deploy("Reward8","RWD8",expandTo18Decimals(100000));
  await sleep(4000);
  // console.log("Cake Deployed", cake.address);
  console.log("Cake Deployed", reward.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//  Cake Deployed 0x77555Ba9ceccF37874f9ba639816A586435A9EB0
//  Reward Deployed 0xcf6bdf2993908e17ACB3f5ED32648BE0D0CDB67E