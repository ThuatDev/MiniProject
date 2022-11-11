import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/apiServices";
const ModalDeleteUser = (props) => {
  const { show, setShow, dataDelete } = props;

  const handleClose = () => setShow(false);
  const handleSubmitDeleteUser =async () => {
  let data = await deleteUser(dataUpdate.id);
    console.log("component", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      // console.log("res", data);
      await props.fetchListUsers();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
      console.log("res", data);
    }
  };
    setShow(false);
  };
  console.log(props.dataDelete);

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Are you sure to delete this user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this User .Email:{" "}
          <b>{dataDelete.email ? dataDelete.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteUser();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
