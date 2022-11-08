import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        {/* <div className="btn-add-new"></div> */}
        <div clasName="btn-add-new">
          <button btn btn-primary>
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
