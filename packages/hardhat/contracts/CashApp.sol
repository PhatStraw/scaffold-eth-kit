//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;


contract CashApp{
    mapping(string => address) public cashtag;
    mapping(string => uint256) public balances;

    struct Message {
        string content;
        string sender;
        string receiver;
    }
    event MessageSent(string content,string sender,string receiver);

    Message[] public messages;

    constructor() {
	}

    
    function pay(string memory _cashtag,string memory _from, string memory _message) public payable{
        require(msg.value > 0, "Cant Pay 0Eth");
        require(cashtag[_cashtag] != address(0), "CashTag Not Registered");
        require(cashtag[_from] != address(0), "CashTag Not Registered");
        require(cashtag[_from] == address(msg.sender), "CashTag Not Registered To Msg.Sender");

        balances[_cashtag] += msg.value;
        if(bytes(_message).length > 0){
            Message memory newMessage = Message(_message, _from, _cashtag);
            messages.push(newMessage);
            emit MessageSent(_message, _from, _cashtag);
        }
    }

    function register(string memory _cashtag) public {
        require(cashtag[_cashtag] == address(0), "CashTag Already Registered");
        cashtag[_cashtag] = msg.sender;
    }

    function withdrawl(string memory _cashtag) public {
        require(cashtag[_cashtag] == address(msg.sender), "CashTag Not Registered To Msg.Sender");
        require(balances[_cashtag] > 0, "Must have a balance to withdrawl");
        (bool success, ) = address(msg.sender).call{ value: balances[_cashtag] }("");
		require(success, "Failed to send Ether");
    }

    receive() external payable {}
}