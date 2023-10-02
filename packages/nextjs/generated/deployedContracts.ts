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
  84531: [
    {
      chainId: "84531",
      name: "base-goerli",
      contracts: {
        CashApp: {
          address: "0x890339FdcF8d7F2ea59286Fc819e584701889294",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "content",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "sender",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "receiver",
                  type: "string",
                },
              ],
              name: "MessageSent",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "addressToCashtag",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              name: "balances",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              name: "cashtag",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
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
              name: "messages",
              outputs: [
                {
                  internalType: "string",
                  name: "content",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "sender",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "receiver",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_cashtag",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_from",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_message",
                  type: "string",
                },
              ],
              name: "pay",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_cashtag",
                  type: "string",
                },
              ],
              name: "register",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_cashtag",
                  type: "string",
                },
              ],
              name: "withdrawl",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        Casino: {
          address: "0xb584aec8E6B30722b15F08841176279937c5acf2",
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
