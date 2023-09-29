const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        CashApp: {
          address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
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
      },
    },
  ],
} as const;

export default contracts;
