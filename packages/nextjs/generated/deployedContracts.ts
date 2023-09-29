const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        Casino: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "_commitment",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_sideA",
                  type: "address",
                },
              ],
              name: "BetAccepted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "_commitment",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "BetProposed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "_commitment",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "winner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "loser",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "BetSettled",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_commitment",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_random",
                  type: "uint256",
                },
              ],
              name: "acceptBet",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "acceptedBet",
              outputs: [
                {
                  internalType: "address",
                  name: "sideB",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "acceptedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "randomB",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_commitment",
                  type: "uint256",
                },
              ],
              name: "proposeBet",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "proposedBet",
              outputs: [
                {
                  internalType: "address",
                  name: "sideA",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "placedAt",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "accepted",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_random",
                  type: "uint256",
                },
              ],
              name: "reveal",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
