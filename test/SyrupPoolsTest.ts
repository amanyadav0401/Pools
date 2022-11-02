import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { expect } from "chai";
import { sign } from "crypto";
import { ethers } from "hardhat";
import { execPath } from "process";
import { Cake, Cake__factory, PancakeProfile, PancakeProfile__factory, Reward, Reward__factory, SmartChefFactory, SmartChefFactory__factory, SmartChefInitializable, SmartChefInitializable__factory } from "../typechain";
import { expandTo18Decimals, expandTo6Decimals } from "./utilities/utilities";

describe("Syrup Pools",()=>{
    
    let owner: SignerWithAddress;
    let signers: SignerWithAddress[];
    let cake : Cake;
    let reward : Reward;
     let factory : SmartChefFactory;
    let profile : PancakeProfile;
    let SyrupPool : SmartChefInitializable;
    
    beforeEach(async()=>{
        signers = await ethers.getSigners();
        owner = await signers[0];
        cake = await new Cake__factory(owner).deploy("CakeToken","CTC",10000000);
        reward = await new Reward__factory(owner).deploy("RewardToken","RWT",1000000);
        factory = await new SmartChefFactory__factory(owner).deploy();
        profile = await new PancakeProfile__factory(owner).deploy(
            cake.address,expandTo18Decimals(10),
            expandTo18Decimals(10),
            expandTo18Decimals(10));
        await profile.connect(owner).addTeam("Team1","Team1");    
        await cake.connect(owner).transfer(signers[1].address,expandTo18Decimals(1000));
        await cake.connect(owner).transfer(signers[2].address,expandTo18Decimals(1000));
        await factory.connect(owner).deployPool(
            cake.address,
            reward.address,
            expandTo18Decimals(10),
            1,
            100000,
            expandTo18Decimals(100),
            100,
            profile.address,
            false,
            0,
            owner.address
         );
     let SyrupPoolAddress = await factory.smartchefaddress();
        SyrupPool = await new SmartChefInitializable__factory(owner).attach(SyrupPoolAddress);
        await reward.connect(owner).transfer(SyrupPool.address,expandTo18Decimals(1000));

    })

    describe("Syrup Pools Test Cases",async()=>{
    //    it("Deploy Pool",async()=>{
    //        await factory.connect(owner).deployPool(
    //            cake.address,
    //            reward.address,
    //            expandTo18Decimals(10),
    //            1,
    //            100000,
    //            expandTo18Decimals(100),
    //            100,
    //            profile.address,
    //            false,
    //            0,
    //            owner.address
    //         );
    //     let SyrupPoolAddress = await factory.smartchefaddress();
    //        SyrupPool = await new SmartChefInitializable__factory(owner).attach(SyrupPoolAddress);

    //    })

          it("Deposit in Syrup Pool and emergency reward withdraw",async()=>{
              await cake.connect(signers[1]).approve(SyrupPool.address,expandTo18Decimals(100));
              await SyrupPool.connect(signers[1]).deposit(expandTo18Decimals(15));
              console.log("User Deposit:    "+await  SyrupPool.userInfo(signers[1].address));
              await cake.connect(signers[2]).approve(SyrupPool.address,expandTo18Decimals(100));
              await SyrupPool.connect(signers[2]).deposit(expandTo18Decimals(10));
              console.log("User Deposit:    "+await  SyrupPool.userInfo(signers[1].address));
              console.log("Pending Rewards:   "+await SyrupPool.pendingReward(signers[1].address));
              console.log("Reward Balance:  "+await reward.balanceOf(signers[1].address));
              await SyrupPool.connect(signers[1]).deposit(expandTo18Decimals(10));
              console.log("User Deposit:    "+await  SyrupPool.userInfo(signers[1].address));
              console.log("Pending Rewards:   "+await SyrupPool.pendingReward(signers[1].address));
              console.log("Reward Balance:  "+await reward.balanceOf(signers[1].address));
              
            //   expect(rewardBalance).to.be.eq(16666666666650000000);
            //   await expect(SyrupPool.connect(owner).emergencyRewardWithdraw(166666)).to.be.revertedWith("Amount invalid");
              
            })

        





    })
})