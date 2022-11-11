import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";

import { toast } from "react-toastify";
import { postCreateNewUser } from "../../../services/apiServices";

const ModalUpdateUser = (props) => {
  const { show, setShow, dataUpdate } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setRole("USER");
    setPreviewImage("");
    setUserName("");
  };
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [role, setRole] = useState("User");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (dataUpdate) {
      setEmail(dataUpdate.email);
      setUserName(dataUpdate.username);
      setRole(dataUpdate.role);
      setPreviewImage(dataUpdate.image);
    }
  }, [dataUpdate]);

};

  const handleUploadImage = (event) => {
    console.log("upload image, event.target.files[0]", event.target.files[0]);
    // setImage(event.target.files[0]);
    // setPreviewImage(URL.createObjectURL(event.target.files[0]));
    if (event.target && event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    } else {
      // setImage("");
      // setPreviewImage("");
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmitCreatUser = async () => {
    // validateEmail
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Email is not valid");
      return;
    }
    // validate password
    if (!password || password.length < 6) {
      toast.error("Password is not valid");
      return;
    }

    // submitdata

    let data = await postCreateNewUser(email, password, username, role, image);
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
  // console.log("CheckdataUpdate", props.dataUpdate);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select "
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="USER">USERS</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="labeUpload">
                <FcPlus />
                Upload File Image
              </label>
              <input
                type="file"
                id="labeUpload"
                hidden
                onChange={(event) => handleUploadImage(event)}
              />
            </div>
            <div className=" col-md-12 img-preview">
              {/* <label className="form-label">IMG</label> */}
              {/* <input type="file" /> */}
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Image preview</span>
              )}
            </div>
          </form>

          {/* end form */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreatUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdateUser;
