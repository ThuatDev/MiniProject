import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button>Add New Users</button>
        </div>
        <div> Table Users</div>
      </div>
    </div>
  );
};
export default ManageUser;
