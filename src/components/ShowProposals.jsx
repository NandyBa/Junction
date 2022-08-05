import React, { useEffect, useState } from 'react';
import '../app/App.css';
import 'antd/dist/antd.css';
import { ethers } from "ethers";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { Button, Col, Divider, Row, Space, Table, Tag } from 'antd';



const ShowProposals = () =>{

	const { Moralis, user } = useMoralis();

	const [Proposals, setProposals] = useState([]);

	useEffect(() => {

		async function fetchProposals(){

			const Proposal = Moralis.Object.extend("Proposal_Inter_DAO");
			const query = new Moralis.Query(Proposal);
			const results = await query.find();

			const data = [];
			for (let i = 0; i < results.length; i++) {
				const a = results[i].get('proposal');
				a['key'] = i;
				a['short-desc'] = (a['description'].length > 300) ? a['description'].substr(0, 300) + ' ...' : a['description'];
				data.push(a);
			}

			//const data = JSON.stringify(results);
			setProposals(data);
			return data;

		}
		fetchProposals();
		
	}, [])

	const columns = [
		{
			title: 'title',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: 'short-desc',
			dataIndex: 'short-desc',
			key: 'short-desc'
		}
	];

	



	return(
		<Table dataSource={Proposals} columns={columns} />
	)
	
}



export default ShowProposals;