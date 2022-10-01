const hre = require("hardhat");

async function main() {

    const Contract = await hre.ethers.getContractFactory("CryptFund");
    const DeployedContract = await Contract.deploy();

    await DeployedContract.deployed();

    console.log(
        `Smart contract deployed to ${DeployedContract.address}`
    );
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
