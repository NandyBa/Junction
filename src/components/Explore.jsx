import { Space, Table, Tag } from 'antd';
import React from 'react';

const columns = [
  {
    title: 'DAO name',
    dataIndex: 'DAO name',
    key: 'DAO name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Blockchains',
    key: 'blockchains',
    dataIndex: 'blockchains',
    render: (_, { blockchains }) => (
      <>
        {blockchains.map((blockchain) => {
          let color = 'geekblue';

          if (blockchain === 'Ethereum') {
            color = 'geekblue-6';
          }
          else if(blockchain === 'Polygon'){
          	color = '#9254de';
          }else if(blockchain === 'BNB Chain'){
          	color = '#fadb14';
          }

          return (
            <Tag color={color} key={blockchain}>
              {blockchain.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Daily users',
    dataIndex: 'Daily users',
    key: 'daily users',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'TVL',
    dataIndex: 'TVL',
    key: 'tvl',
    render: (text) => <span>{text}</span>,
  },
];
const data = [
  {
  	key: '1',
    'DAO name': 'QuickSwap',
    blockchains: ['Polygon'],
  },
  {
  	key: '2',
    'DAO name': 'PancakeSwap',
    blockchains: ['BNB Chain'],
  },
  {
  	key: '3',
    'DAO name': 'Mai Finance (Qi Dao)',
    blockchains: ['BNB Chain', 'Polygon', 'Gnosis Chain'],
  },

  {
  	key:'4',
  	'DAO name':'',
  	blockchains: ['BNB Chain', 'Polygon', 'Gnosis Chain'],
  	TVL: '100M',

  }
];

const Explore = () => <Table columns={columns} dataSource={data} />;

export default Explore;