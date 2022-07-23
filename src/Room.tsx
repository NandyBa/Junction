import React, { useEffect, useState, FC } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { ethers } from "ethers";
import { useMoralis } from "react-moralis";
import SmartInput from './SmartInput';
import { Button, Input, Col, Divider, Row } from 'antd';
const { TextArea, Search } = Input;



function Room() {

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, enableWeb3, provider, web3} = useMoralis();

  const handleClick = async () => {
    const title = (document.getElementById('Title') as HTMLInputElement)!.value;
    const token0 = (document.getElementById('Token0') as HTMLInputElement)!.value;
    const token1 = (document.getElementById('Token1') as HTMLInputElement)!.value;
    const description = (document.getElementById('description') as HTMLInputElement)!.value;
    
    const message = JSON.stringify({title, token0, token1, description});
    console.log(message);

    
    const signer = web3!.getSigner();
    const signature = await signer.signMessage(message);

    console.log(signature);
  }


  const onSearch = (value: string) => console.log(value);

  const Sign_message = async() => {
    await enableWeb3();
    //const { provider } = useMoralis();
    const message = "Hello world!"


    
    console.log(provider);
    
  }

  return (
    <div style={{display:isAuthenticated ? 'block' : 'none'}} className="App">
      <Row justify="start">
        <Col span={12} offset={1}>
          <SmartInput name="Title" />
          <Search id="Token0" placeholder="Address token0" onSearch={onSearch} style={{ width: 200 }} />
          <Search id="Token1" placeholder="Address token1" onSearch={onSearch} style={{ width: 200 }} />
          <TextArea id="description" rows={10} placeholder="Proposal description" />
          <Button type="primary" onClick={handleClick}>Submit</Button>
        </Col>
      </Row>
    </div>
  );
}



export default Room;