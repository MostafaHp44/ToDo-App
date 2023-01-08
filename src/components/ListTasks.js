import React from "react";
import AddTask from './AddTask'
import Task from "./Task";
import FilterTool from "./FilterTool";
import { useState } from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableHead,
} from "mdb-react-ui-kit";

 function ListTask() {
  const[searchfilter,setsearchfilter]=useState('All')

  const handlfilter=(e)=>{
    e.preventDefault()
    setsearchfilter(e.target.value)
  }
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>

                 <AddTask/>
                 <FilterTool handlefilter={handlfilter}/>


                <MDBTable className="mb-4">

                  <MDBTableHead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>

                    
                  </MDBTableHead>

                  <Task searchfilter={searchfilter}/>
                  
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
export default ListTask