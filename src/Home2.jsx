import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, PageHeader, Row, Tag, Typography } from 'antd';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const Home2 = () => (
  <div>
  
  <PageHeader
    title="Home"
    className="site-page-header"
    //subTitle="This is a subtitle"
    //tags={<Tag color="blue">Running</Tag>}
    extra={[
      
    ]}
    breadcrumb={[
      
    ]}
  >
    

  </PageHeader>
  </div>

);

export default Home2;