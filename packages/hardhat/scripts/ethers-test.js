const ethers = require("ethers")

const valA = ethers.utils.keccak256(12345)
const hashA = ethers.utils.keccak256(valA)
const valBwin = ethers.utils.keccak256(12345)
const valBlose = ethers.utils.keccak256(0xBAD060A7)
console.log("VALA",valA)
console.log("HASHA",hashA)
console.log("VALB",valBwin)
console.log("VALBLOSE",valBlose)