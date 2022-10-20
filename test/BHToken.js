const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token", () => {
  let token;
  beforeEach(async () => {
    const Token = await ethers.getContractFactory("BHToken");
    token = await Token.deploy();
  });
  describe("Deployment", () => {
    const name = "Black Hills Token";
    const symbol = "BHT";
    const decimals = 18;
    const totalSupply = "1000000000000000000000";

    it("has correct name ...", async () => {
      expect(await token.name()).to.equal(name);
    });

    it("has correct symbol ...", async () => {
      expect(await token.symbol()).to.equal(symbol);
    });

    it("has correct decimals ...", async () => {
      expect(await token.decimals()).to.equal(decimals);
    });

    it("has correct total supply ...", async () => {
      expect(await token.totalSupply()).to.equal(totalSupply);
    });

    it("assigns total supply of tokens to the owner", async () => {
      const [owner] = await ethers.getSigners();
      //   const hardhatToken = await Token.deploy();
      const ownerBalance = await token.balanceOf(owner.address);
      expect(await token.totalSupply()).to.equal(ownerBalance);
    });
  });
});
