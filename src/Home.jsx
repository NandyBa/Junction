import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, PageHeader, Row, Col, Tag, Typography } from 'antd';
const { Title, Text } = Typography;

const Home = () => (
  <Row>
    <Row>
      <Col offset={3} span={18}>
        <Title>Mergers and Acquisitions Protocol for DAOs</Title>
      


      <Title level={2}>An algorithmic, transparent, and impartial protocol that removes the need for trusted intermediaries.</Title>

    </Col>
  </Row>
  <Row>
    <Col offset={12} span={18}>
      <Title level={3}>1. ROLLOUT NEW PRODUCTS</Title>
      <Title level={3}>2. CONSOLIDATE LIQUIDITY</Title>
      <Title level={3}>3. MAINTAIN EFFECTIVENESS & MORE ...</Title>
    </Col>
  </Row>
  <Row>
    <Col offset={3} span={18}>
      <Title level={2}>DECENTRALIZED BARGAINING</Title>
      <Text>Junction hosts and facilitate various types of DAO to DAO negotiations. With our platform, any DAO can challenge another DAO for a bargaining session. 

We partnered with Smartsettle to provide the Smartsettle Infinity product, the epitome of augmented intelligence. You can use it to model, facilitate and manage any complex formal negotiation, build in interdependencies and constraints, and easily analyse and compare various options.

 

Uncover hidden value and reach agreement in a fraction of the time. Infinity is suitable for almost any type of collaborative multi-party decision making application such as price discovery, all the way through rage-quit functions and much more...</Text>
    </Col>
  </Row>
</Row>

);

export default Home;