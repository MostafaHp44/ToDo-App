import { React, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import {TbEdit} from 'react-icons/tb';
import { useDispatch } from "react-redux";
import {MDBBtn,} from "mdb-react-ui-kit";
import { EDITTODO } from "../Redux/Action/action";
function Lightbox({ show, setShow, todo, i, setHover }) {
  const handleClose = () => {
    setShow(false);
    setHover(-1);
  };
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setDescription(e.target.value);
    e.preventDefault();
  };

  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleEditTask = () => {
    const updatedTodo = {
      id: todo.id,
      description: description,
      isDone: todo.isDone,
    };
    dispatch(EDITTODO(updatedTodo));
    setShow(false);
    setHover(-1);
  };

  
  return (
    <>
  <TbEdit style={{ margin: "3px" ,color:'black'}} onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title>Add Todo task here...</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{ display: "flex" }}>
            <Form.Control
              type="text"
              placeholder=" Add Todo task here..."
              onChange={handleChange}
              value={description}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleEditTask}>
            Save Changes
          </Button>
        </Modal.Footer>
        
      </Modal>
    </>
  );
}

export default Lightbox;
