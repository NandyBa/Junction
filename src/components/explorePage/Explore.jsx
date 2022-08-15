// Importing 3rd party components
import { Space, Table, Tag } from 'antd';
import Container from 'react-bootstrap/Container'
import React from 'react';

const columns = [
	// Column One, the DAO Name
	{
    	title: 'DAO Name',
    	dataIndex: 'DAO Name',
    	key: 'DAO name',
    	render: (text) => <a>{text}</a>,
  	},

	// Column Two, The blockchains the DAO is present in
  	{
    	title: 'Blockchains',
    	key: 'blockchains',
    	dataIndex: 'blockchains',
    	render: (_, { blockchains }) => (
      		<>
        		{ blockchains.map((blockchain) => {
          			let color = 'geekblue';
					switch(blockchain) {
						case 'Ethereum':
							color = 'geekblue-6'
						case 'Polygon':
							color = '#9254de'
						case 'BNB Chain':
							color = '#fadb14'
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

	// Column Three, the number of daily users of the DAO/Blockchain
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
]

// Creating the rows of the columns
const data = [
	{
  		key: '1',
    	'DAO Name': 'QuickSwap',
    	'blockchains': ['Polygon'],
  	},
  	{
  		key: '2',
    	'DAO Name': 'PancakeSwap',
    	'blockchains': ['BNB Chain'],
  	},
  	{
  		key: '3',
    	'DAO Name': 'Mai Finance (Qi Dao)',
    	'blockchains': ['BNB Chain', 'Polygon', 'Gnosis Chain'],
  	},
  	{
  		key: '4',
  		'DAO Name':'',
  		'blockchains': ['BNB Chain', 'Polygon', 'Gnosis Chain'],
  		'TVL': '100M',
	}
];

const Explore = () => {
	return (
		<Table columns={columns} dataSource={data} style={{'margin':'0'}}/>
	)
}

export default Explore;