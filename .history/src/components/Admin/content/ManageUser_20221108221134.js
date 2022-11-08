import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.css";

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button>Add New Users</button>
        </div>
        <div>Table Users</div>
      </div>
      <ModalCreateUser />
    </div>
  );
};
export default ManageUser;
