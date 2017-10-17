import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentTable from './table';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const STUDENT_DATA = [
  {name: 'ABCD', marks: '99'},
  {name: 'Goods', marks: '79'},
  {name: 'Retrica', marks: '67'},
  {name: 'Ert', marks: '91'},
  {name: 'Ingh', marks: '67'},
  {name: 'Yuhh', marks: '90'}
];

var formStyle={
  margin: '0 auto',
  maxWidth: '320px'
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name : '',
      marks : '',
      student_data : STUDENT_DATA
    };
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleChange(e) {    
    this.setState({ name : e.target.value, marks: e.target.value });
  }
  
  getData(){
    var student_const_data = this.state.student_data;
    student_const_data.push({"name":this.state.name,"marks":this.state.marks});
    this.setState({student_data:student_const_data});
  }

  render() {
    return (
      console.log(),
      <div className="App">
        <form style={formStyle} method="post">
        <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Student Name</ControlLabel>
            <FormControl
              autoFocus type="text" name="name" onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="marks" bsSize="large">
            <ControlLabel>Student Marks</ControlLabel>
            <FormControl
              type="text" name="marks" onChange={this.handleChange}
            />
          </FormGroup>
          
          <Button
            block bsSize="large" bsStyle="success" onClick={this.getData}
          >
            Submit
          </Button>
          
        </form>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <br/><br/>
        <StudentTable student={this.state.student_data} />
      </div>
    );
  }
}

export default App;
