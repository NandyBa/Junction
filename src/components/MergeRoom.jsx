import React, { useEffect, useState, FC } from 'react';
import {useNavigate} from 'react-router-dom';
import '../app/App.css';
import 'antd/dist/antd.css';
import { ethers } from "ethers";
import { useMoralis, useNewMoralisObject } from "react-moralis";
import SmartInput from '../components/SmartInput';
import SelectBlockChain from './SelectBlockchain';
import { Button, Input, Col, Divider, Row, Alert } from 'antd';
const { TextArea, Search } = Input;



function MergeRoom() {

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, enableWeb3, provider, web3, Moralis} = useMoralis();

  const [state, setState ] = useState({});

  const { save } = useNewMoralisObject("Proposal_Inter_DAO"); // To save proposal

  const navigate = useNavigate();

  const Sign_message = async () => {
    const title = (document.getElementById('Title')).value;
    const token0 = (document.getElementById('Token0')).value;
    const token1 = (document.getElementById('Token1')).value;
    const description = (document.getElementById('description')).value;
    
    const message = JSON.stringify({title, token0, token1, 'user': user.get("ethAddress"), description});
    console.log(message);

    
    const signer = web3.getSigner();
    const signature = await signer.signMessage(message);

    //console.log(signature);

    const checkAddress = ethers.utils.verifyMessage(message, signature).toLowerCase();


    const messageArray = JSON.parse(message)
    console.log(checkAddress == messageArray['user'])
    console.log(checkAddress, messageArray['user']);

    if(checkAddress == messageArray['user']){ // Verify that 
      const proposalJSON = messageArray;

      console.log('proposal:', proposalJSON);

      const data = {'proposal': proposalJSON, 'signature': signature};

      save(data, {
        onSuccess: (proposal) => {
          // Execute any logic that should take place after the object is saved.
          alert("New object created with objectId: " + proposal.id);

          navigate('/all-proposals');
        },
        onError: (error) => {
          // Execute any logic that should take place if the save fails.
          // error is a Moralis.Error with an error code and message.
          console.log(error);
          alert("Failed to create new object, with error code: " + error.message);
        },
      });
    }else{
      return (<Alert message="Proposal not saved" type="error" />)
    }
  }

  const onChangeChain = (value, index=0) => {
    const newState = state;
    newState['chain'+index] = value;
    console.log("Done");
    setState(newState);

    console.log(state);
  }

  const onChangeToken = (e, index=0) => {
    const newState = state;
    newState['token'+index] = e.target.value;
    console.log("Done");
    setState(newState);
    console.log(state);
  }

  return (
    <div style={{display:isAuthenticated ? 'block' : 'none'}} className="App">
      <Row justify="start">
        <Col span={12} offset={1}>
          <SmartInput name="Title" />
        </Col>
      </Row>
      <Row justify="start">
        <Col span={12} offset={1}>
          <SelectBlockChain id="chainToken0" placeholder="Blockchain token0" onChange={(e) => onChangeChain(e)}/>
          <Search id="Token0" placeholder="Address token0" style={{ width: 200 }} onChange={(e) => onChangeToken(e)} />
        </Col>
      </Row>
      <Row justify="start">
        <Col span={12} offset={1}>  
          <SelectBlockChain id="chainToken1" placeholder="Blockchain token1" onChange={(e) => onChangeChain(e, 1)}/>
          <Search id="Token1" placeholder="Address token1" style={{ width: 200 }} onChange={(e) => onChangeToken(e, 1)} />
        </Col>
      </Row>
      <Row justify="start">
        <Col span={12} offset={1}>  
          <TextArea id="description" rows={10} placeholder="Proposal description" />
          <Button type="primary" onClick={Sign_message}>Submit</Button>
        </Col>
      </Row>
    </div>
  );
}



export default MergeRoom;