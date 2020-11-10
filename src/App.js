import React, { useContext, useState, useEffect } from "react";
import { Text, Button, HStack, Input } from "@chakra-ui/core";
import { ethers } from "ethers";
import { Web3Context } from "./hooks/useWeb3";
import { FoxBank_address, FoxBank_abi } from "./Contracts/FoxBank";

function App() {
  const [web3State, login] = useContext(Web3Context);

  // web3State.is_web3 ??
  // web3State.is_logged ??
  // web3State.chain_id ??
  // web3Sate.account && provider et signer

  return (
    <>
      <Text>Web3: {web3State.is_web3 ? "injected" : "no-injected"}</Text>
      <Text>Network id: {web3State.chain_id}</Text>
      <Text>Network name: {web3State.network_name}</Text>
      <Text>MetaMask installed: {web3State.is_metamask ? "yes" : "no"}</Text>
      <Text>logged: {web3State.is_logged ? "yes" : "no"}</Text>
      <Text>{web3State.account}</Text>
    </>
  );
}

export default App;
