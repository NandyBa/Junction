import React from 'react';
import 'antd/dist/antd.css';
import '../../app/index.css';
import { Button, Dropdown, Menu, PageHeader, Row, Col, Tag, Typography } from 'antd';

// Importing Components
import Header from './Header.jsx'

const { Title, Text } = Typography;

const HomePage = (props) => (
  <>
    <Header auth={props.auth}/>
  </>
);

export default HomePage;