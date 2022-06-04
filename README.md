# Pools


Project Objective :
Pools based on Syrup pools is created to take a further step on staking and stake the Cake tokens provided by the yield farming smart contracts. 
Here user can stake the cake token (Niob token in this case) and get the rewards in the form of different tokens that are pooled already in the Syrup Pools.
The Syrup pool smart contract is deployed by following steps - 

    1. Deploy SyrupPoolsFactory contract – Every pool is created by the factory that initializes a smart contract where user can stake its cake token to get a specific reward token.
       The SyrupPoolsFactory contract have following functions -  
    • deployPool  -  This function initializes the pool for a specific reward token.
         It requires following feilds – 1. Staked token address.
                                                        2. Reward token address.
                                                        3. Reward genereated per block.
                                                        4. Start block. (When reward should start to distribute.)
                                                        5. Bonus end block. (When reward distribution stops.)
                                                        6. Pool limit per user. (no. cake tokens user can stake.)
                                                        7. Number blocks for user limit. (Until a user can get.... ....                                                   reward.)
                                                        8. Pancake Profile.(Profile contract for the pool.)
                                                        9. Pancake profile is requested. (Whether user shouold.. .........................................              be registered prior in pancake profile or not.)
                                                       10. Pancake profile threshold points. (Number of users.. ...............................................         that can enter the staking.)
                                                       11. Admin address.
       
    1. 
    2. Deploy SyrupProfile contract -  Every pool will have a different profile where predefined users can be added in different teams. Syrup profile is initially used in limiting the users from entering the staking.
       After syrupProfile is deployed a team is needed to be created in order to initiate the SyrupPool to start staking of cakes and generating rewards. The syrupProfile address is used to deploy the pool by SyrupFactory contract.


     3.    DeployPool using SyrupPoolsFactory.

      
4.  Create an istance for SyrupPoolInitializable from the address emitted by the deploy pool transaction.

5. The contract SyrupPoolInitializable have following functions -
    • initialize -Used to initialize the pool for the staking and reward distribution. SyrupPools factory initialize the pool at the time of pool deployment.
    • deposit – Used to deposit the cake token by the user. This function also distribute rewards by the second deposit transaction.
    • withdraw – Used to withdraw the cake deposited and the reward generated.
    • emergencyWithdraw – Used to withdraw the deposited cake before the reward distribution ends, it stops the reward distribution for the user in future.
    • emergencyRewardWithdraw – Used to stop rewards and can be called by the owner.
    • recoverToken – Allow the owner to recover token sent to the contract by mistake.
    • stopReward – Stops the reward distribution immediately.
    • updatePoolLimitPerUser – Updates the user limit for cake token staking before the pool has started.
    • updateRewardPerBlock – Updates the reward distributed per block before the pool has started.
    • updateStartAndEndBlocks – Updates the start and end blok of reward distribution for pool before the pool has started.
    • updateProfileAndThresholdPointsRequirement. 
    • pendingReward – Returns the pending reward for the user.
    • hasUserLimit  - returns boolean value for whether there is a user block limit or not.
