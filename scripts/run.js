/* Enables us to iterate on our contract really quickly by handling the following: 

1. Compile the contract
2. Test the contract
3. Deploy the contract

*/

const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract deployed to: ", waveContract.address);
  console.log("Contract deployed by: ", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let testWave = await waveContract.wave();
  await testWave.wait();

  waveCount = await waveContract.getTotalWaves();

  let waveAtMe = 0;

  while (waveAtMe < 10) {
    testWave = await waveContract.connect(randomPerson).wave();
    await testWave.wait();
    waveAtMe++;
  }

  waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();
