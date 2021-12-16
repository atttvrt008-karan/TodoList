import React, {useState} from 'react'
import {Button, InputGroup, InputGroupAddon, Input} from 'reactstrap';

const SearchBox = ({onSearch}) => {
  const [keywords, setKeywords] = useState('');

  const handleChange = (e) => {
    setKeywords(e.target.value);
  }
  const handleSubmit = () => {
    alert('Submit');
  } 

  
  const handleAdd = () => {
    alert('Add ');
  } 
  return (
    <InputGroup>
      <div className="search-bar">
      <Input type="text" placeholder="Search...." onChange={handleChange}/>
      <Button type="button" color="primary"onClick={handleSubmit}>Sumbit</Button>
      </div>
    <InputGroupAddon addonType="prepend">
      <div className="Add-button">
    <Button type="button" color="primary" onClick={handleAdd}><i className="fa fa-search"></i> Add</Button>
    </div>
  </InputGroupAddon>
  </InputGroup>
    );
}

export default SearchBox;

