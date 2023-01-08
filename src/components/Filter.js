import React from "react";
import {MDBBtn,MDBTableBody,} from "mdb-react-ui-kit";
import { useState } from "react";
import {DELETETODO} from '../Redux/Action/action'
import { useDispatch } from "react-redux";
import Lightbox from './EditTask'



const Filter = (props) => {

  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(-1);

  let y=0



 const edit=()=>
 {
document.getElementById('EditTask').style.display = "block";
<>
<div class="form-outline" id="EditTask">
  <input type="text" id="typeText" class="form-control" />
  <label class="form-label" for="typeText">Text input</label>
</div>
</>

 }
const dispatch=useDispatch()

    return (
      <>
      { props.searchfilter === "Done" ? props.todos
      .filter((todo,) => {
        return todo.isDone === true ;
      })
      .map((todo,i=0) => (  
<MDBTableBody key={y++}> 
      <tr>
        <th scope="row">{i+1}</th>
        <td >{todo.description}</td>
        <td >Complete</td>
        <td>
<MDBBtn type="submit" color="danger" onClick={()=>{
  const todoToDelete = {
    id: todo.id,
    description: todo.description,
    isDone:todo.isDone,
  };
  dispatch(DELETETODO(todoToDelete))
  
}
   }>
            Delete
    </MDBBtn>
<MDBBtn type="submit" color="success" className="ms-1" disabled>
      Done
    </MDBBtn>
        </td>
      </tr>
</MDBTableBody>

))


: props.searchfilter === "Not-Yet" ? props.todos
      .filter((todo) => {if(todo.isDone===false)
        {   
             return todo.isDone === false;
        }
        else
        {
          return todo.isDone === true;
        }

      })
      .map((todo,i=0) => (
  <MDBTableBody key={y++} >
      <tr>
        <th scope="row">{i+1}</th>
        <td>{todo.description}</td>
        <td>{todo.isDone===false?'In progress':'Complete'}</td>
        <td>
          <MDBBtn type="submit" color="danger" onClick={()=>{
  const todoToDelete = {
    id: todo.id,
    description: todo.description,
    isDone:todo.isDone,
  };
  dispatch(DELETETODO(todoToDelete))
  
}
   }>
            Delete
          </MDBBtn>
          <MDBBtn type="submit" color="success" className="ms-1">
            <Lightbox
                          show={show}
                          setShow={setShow}
                          todo={todo}
                          i={i}
                          setHover={setHover}
                        />
            
          </MDBBtn>

        </td>
      </tr>
</MDBTableBody>
))

: props.todos.map((todo,i=0) => (
<MDBTableBody key={y++}>
<tr scope='row'>
<th scope="row">{i+1}</th>
<td>{todo.description}</td>
<td>{todo.isDone===true ? "Complete":"In progress"}</td>

<td>{todo.isDone===true?
<>
<MDBBtn type="submit" color="danger" onClick={()=>{
  const todoToDelete = {
    id: todo.id,
    description: todo.description,
    isDone:todo.isDone,
  };
  dispatch(DELETETODO(todoToDelete))
  
}
   }>
    Delete
    </MDBBtn>
<MDBBtn type="submit" color="success" className="ms-1" disabled>
      Done
    </MDBBtn>
   
</>
:
<>
<MDBBtn type="submit" color="danger" onClick={()=>{
  const todoToDelete = {
    id: todo.id,
    description: todo.description,
    isDone:todo.isDone,
  };
  dispatch(DELETETODO(todoToDelete))
  
}}>
    Delete
    </MDBBtn>   
<MDBBtn type="submit" color="success" className="ms-1">
<Lightbox
show={show}
setShow={setShow}
todo={todo}
i={i}
setHover={setHover}
/>
</MDBBtn>

</>

}
</td>
</tr>
</MDBTableBody>

))

}

</>
);


}
         
export default Filter ;