import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";

const ModalCreateUser = (props) => {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setuserName] = useState("");
  const [role, setRole] = useState("User");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  // const [role,setRole]=useState("");
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
  const handleSubmitCreatUser = () => {
    console.log("submit create user");
    console.log("email", email);
    console.log("password", password);
    console.log("username", username);
    console.log("role", role);
    console.log("image", image);
    console.log("previewImage", previewImage);
    alert("submit create user");
  };
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
          <Modal.Title>Add new user</Modal.Title>
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
                onchange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onchange={(event) => setuserName(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select "
                onchange={(event) => setRole(event.target.value)}
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
export default ModalCreateUser;
