import React, {useState} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import moment from 'moment';
import { Row, Col, Card, CardHeader, CardBody, Button, ButtonGroup } from "reactstrap"; 
import {dotoList } from './repository';
import pagination from './pagination';
import SearchBox from './SearchBox';

const Doto = () => {

const [selected, setSelected] = useState([]);

const datetimeFormatter = (cell, row) => {
  return moment(cell).format('DD MMM YYYY hh:mm');
}

const handleDelete = (id) => {
  alert('delete :' + id);
} 

const handleEdit = (id) => {
  alert('edit :' + id);
} 


const optionFormatter = (cell, row) => {
  return (
    <ButtonGroup>
      <Button color="primary" onClick={(id) => handleEdit(row.id, window.event)}>Edit</Button>
      <Button color="danger" onClick={(id) => handleDelete(row.id)}>Delete</Button>     
    </ButtonGroup>
  );
}

const handleOnSelect = (row, isSelect) => {
    if (isSelect) {      
      setSelected([...selected, row.id]);
    } else {
      setSelected(selected.filter(x => x !== row.id));
    }   
  }

const handleOnSelectAll = (isSelect, rows) => {
    const ids = rows.map(r => r.id);
    if (isSelect) {
      setSelected(ids);
    } else {
      setSelected([]);
    }
  }

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  selected: selected,
  onSelect: handleOnSelect,
  onSelectAll: handleOnSelectAll
};

const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: false
}, {
  dataField: 'title',
  text: 'Title',
  sort: false
}, {
  dataField: 'text',
  text: 'Text',
  sort: true
},
{
  dataField: 'created_on',
  text: 'Created on',
  formatter: datetimeFormatter,
  sort: true
},
{ 
  text: 'Action',
  isDummy: true,
  formatter: optionFormatter
} ];

 const data = dotoList;

 

 const handleSearch = (e) => {
  console.log(e.target);
}


  return (
  <div className="animated fadeIn">
      <Row>
        <Col lg="12" sm="12" xs="12">
          <Card>
            <CardHeader>
            <SearchBox onSearch={handleSearch}/>


             </CardHeader>
            <CardBody>
          <h1>  <strong>To-do List</strong> <i/></h1>
              <BootstrapTable bootstrap4 keyField='id' data={ data } columns={ columns } selectRow={selectRow} pagination={pagination}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>)
}

export default Doto;