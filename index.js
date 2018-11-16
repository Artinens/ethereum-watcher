 
const Web3 = require('web3');
const abi = require('./abi');
 
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/53b79e5e9e234c908fecf47d9bbd33fb"));
const myContract = new web3.eth.Contract(abi, '0x8639394F36BE3fb587610F6cb0aa92CdD6A33C99');
const interface = myContract.options.jsonInterface;
let filteredInt = interface.filter( item => item.outputs && item.inputs && item.inputs.length == 0 && item.outputs.length > 0)

// console.log(filteredInt);
// console.log(filteredInt[0].name, filteredInt[0].outputs);

contractCallee = async (methodName) => {
  try {
    let res = await myContract.methods[methodName]().call();
    console.log(res);
    return res;
  } catch(err) {
    throw new Error(err);
  }
}

contractCallee('minimumInvestment');

// const arrayToObject = (array) =>
//    array.reduce( async (obj, item) => {
     
//      obj[item.name] = ''; // call contractCallee and put res here
//      return obj
//    }, {});

// const filterArr = arrayToObject(filteredInt);
 