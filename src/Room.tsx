import React, { useEffect, FC } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { useMoralis } from "react-moralis";
import { Button, Input, Col, Divider, Row } from 'antd';
const { TextArea, Search } = Input;


function Room() {

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  const onSearch = (value: string) => console.log(value);

  return (
    <div style={{display:isAuthenticated ? 'block' : 'none'}} className="App">
      <Row justify="start">
        <Col span={12} offset={1}>
          <Input placeholder="Proposal name" />
          <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
          
          <TextArea rows={10}/>
          <Button type="primary">Submit</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Room;