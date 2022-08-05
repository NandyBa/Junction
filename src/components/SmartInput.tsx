import React from 'react';
import { useId, useState } from 'react';
import { Button, Input, Col, Divider, Row } from 'antd';

const SmartInput = (props:any) => {
  const id = useId();
  const [input, setInput] = useState('');
  return (
    <div>
      <Input id={props.name} value={input} placeholder={props.name} onInput={e => setInput((e.target as HTMLInputElement).value)}/>
    </div>
  );
}

export default SmartInput;