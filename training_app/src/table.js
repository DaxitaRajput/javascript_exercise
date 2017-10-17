import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Table } from "react-bootstrap";

class StudentTable extends React.Component{
    
    render() {
        const data=this.props.student;

        console.log("stu data = ",this.props.student);
      const tableInstance = (
        <Table responsive striped bordered condensed hover style={{ marginLeft: '25%', width:"50%" }}>
          <thead>
            <tr>
              <th style={{  textAlign: 'center', width:"50%" }}>Student Name</th>
              <th style={{  textAlign: 'center', width:"50%" }}>Marks</th>
            </tr>
            {console.log("=======",data)}
          </thead>
          <tbody>
          {
            Object.keys(data).map(function (key,index){
                return(
                <tr>
                  <td style={{  textAlign: 'center' }}>
                  {data[key].name}
                  </td>
                  <td style={{  textAlign: 'center' }}>
                   {data[key].marks}
                  </td>
                </tr>
                )
            }.bind(this))
          }
            </tbody>
        </Table>
        
      );
      return (
        console.log("-----",tableInstance),
        <div>
        {tableInstance}
        </div>
      );
    }
}

export default StudentTable;