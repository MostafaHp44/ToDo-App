import {MDBBtn,MDBTableBody} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";

const Task = (props) => {
  const todos = useSelector((state) => state.todos);

  
    return ( 
    <>
    <Filter searchfilter={props.searchfilter} todos={todos}/>
    

    </> 
    
    );
}
 
export default Task;