import React from "react" 
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddModal({addMovie}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({});

  return (
    <div>
      <div
        onClick={handleShow}
        style={{
          width: "18rem",
          height: "20 rem",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}></div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <input placeholder='name' onChange={(e) => setnewmovie({...newmovie,name: e.target.value})} />
          <input placeholder='description' onChange={(e) => setnewmovie({...newmovie,description: e.target.value})} /> 
          <input placeholder='image' onChange={(e) => setnewmovie({...newmovie,image: e.target.value})} /> 
          <input placeholder='rate' onChange={(e) => setnewmovie({...newmovie,rate: e.target.value})} /> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={()=>addMovie(newmovie)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddModal;
