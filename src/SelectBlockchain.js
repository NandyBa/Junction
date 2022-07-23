import React, { useEffect, useState, FC } from 'react';
import { useMoralis } from "react-moralis";
import { Select } from 'antd';
const { Option } = Select;


const SelectBlockchain = ({placeholder, id, onChange}) => {

	const { Moralis} = useMoralis();

	return (<Select placeholder={placeholder} id={id} onChange={onChange}>

	            <Option value={Moralis.Chains.POLYGON_MAINNET}>Polygon</Option>
	            <Option value={Moralis.Chains.ETH_ROPSTEN}>Ropsten</Option>
	          </Select>)
}

export default SelectBlockchain;

//Moralis.Chains.POLYGON_MUMBAI