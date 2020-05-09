import React from 'react';
import './header.css';
import { Typography } from 'antd';

const { Title } = Typography;

function Header() {

  return (
    <div >
      <Title mark>Simple Pixel Editor v 0.1</Title>     
    </div>
  );
}

export default Header;