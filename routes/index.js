const express = require('express');
const Web3 = require("web3");
const abi = require('../mocks/abi');

const router = express.Router();
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/53b79e5e9e234c908fecf47d9bbd33fb"));
const logger = console;

router.get('/', (req, res) => {
    var obj;
    var information;

    const MyContract = web3.eth.contract(abi);
    const contract = MyContract.at('0x8639394F36BE3fb587610F6cb0aa92CdD6A33C99');

    console.log(contract.abi)

    obj = Object.values(contract.abi);
    for (i in obj) {
        //console.log(obj.name);
        //name = obj[i].name;
        //
        // name = 'minimumInvestment';
        // val = contract[name].toString();
        //console.log(val);
    }

    obj.operator = contract.operator().toString();

    return res.json(information);
});

module.exports = router;