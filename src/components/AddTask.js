import { useDispatch,connect } from "react-redux";
import { MDBBtn,MDBCol,MDBInput,MDBRow,} from "mdb-react-ui-kit";
import {ADDTODO} from '../Redux/Action/action'
import { useState } from "react";

const AddTask = () => {

const [name,setname]=useState('')
const dispatch=useDispatch();


const handlechange=(e)=>{
  e.preventDefault()
  setname(e.target.value)
}

const handleEnter = (e) => {
  if(e.key === "Enter"){
    handlesubmit()
  } return;
}
var generate = function () {
  var ObjectId = (
    m = Math,
    d = Date,
    h = 16,
    s = (s) => m.floor(s).toString(h)
  ) =>
    s(d.now() / 1000) + " ".repeat(h).replace(/./g, () => s(m.random() * h));
  // Thanks to Ruben Stolk
  return ObjectId();
};
    const handlesubmit=(e)=>{
      const todo = {
        "id": {
          "$oid": generate()
        },
        "description": name,
        "isDone": false
      }
        console.log(todo);
dispatch(ADDTODO(todo))
        setname('')
  }

    return (  
        <>
          <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <MDBCol size="12">
                    <MDBInput
                      label="Enter a task here"
                      id="form1"
                      type="text"
                      value={name}
                      onChange={handlechange}
                      onKeyPress={handleEnter}

                    />
                  </MDBCol>

                  <MDBCol size="12">
                    <MDBBtn type="submit" onClick={handlesubmit} onKeyPress={handleEnter}>Save</MDBBtn>
                  </MDBCol>

                  <MDBCol size="12">
                    <MDBBtn type="submit" color="warning">
                      Get tasks
                    </MDBBtn>
                  </MDBCol>
                  
                </MDBRow>
        </>
    );
}
 
export default (AddTask);
