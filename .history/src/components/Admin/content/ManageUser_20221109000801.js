import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const [showModalCreateUser, setShowModalCreateUser] = useState(false);

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        {/* <div className="btn-add-new"></div> */}
        <div clasName="btn-add-new">
          <button className="btn btn-primary">
            <FcPlus />
            Add New Users
          </button>
        </div>
        <div className="table-users-container">Table Users</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};
export default ManageUser;
