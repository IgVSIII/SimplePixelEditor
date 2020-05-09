import React from 'react';
import './toolkit.css';
import { Select, Switch } from 'antd';
import { BorderlessTableOutlined } from '@ant-design/icons';
import { CompactPicker } from 'react-color';

const { Option } = Select;

function Toolkit(props) {

  const {defaultSize, changeSize, changeGrid, color, changeColor } = props;

  function handleChange(value) {
    changeSize(value)
  }

  function onChange(checked) {
    changeGrid(checked);
  }

  function handleChangeComplete(value)  {
    changeColor(value.hex);
  };

  const stringDefaultSize = defaultSize + "x" + defaultSize;

  return (
    <div className="Toolkit">  
      <Select defaultValue={stringDefaultSize} style={{ width: 100 }} onChange={handleChange}>
        <Option value="8">8x8</Option>
        <Option value="16">16x16</Option>
        <Option value="32" >32x32</Option>
      </Select>  
      <Switch defaultChecked 
        checkedChildren={<BorderlessTableOutlined />}
        unCheckedChildren={<BorderlessTableOutlined />} 
        onChange={onChange} />
      <CompactPicker color= {color} onChangeComplete={ handleChangeComplete } />


    </div>
  );
}

export default Toolkit;