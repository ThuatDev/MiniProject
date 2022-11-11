import { useEffect } from "react";

const TableUser = (props) => {
  const { listUsers } = props;

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((item, index) => {
            return (
              <tr key={`table-users-${index}`}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td className="d-flex justify-content-center">
                  <button className="btn btn-secondary mr-2">View</button>
                  <button
                    className="btn btn-primary mr-2 mx-3"
                    onClick={() => props.handleClickBtnUpdateUser(item)}
                  >
                    Update
                  </button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
          {listUsers.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default TableUser;
