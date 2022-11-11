import { useState, userEffect } from "react";
import { getAllUsers } from "../../../services/apiServices";

const TableUser = (props) => {
  const [listUsers, setListUsers] = useState([]);
  userEffect(() => {}, []);

  return (
    <>
      <table className="table table-hover Table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((item, index) => {
            return (
              <tr key={`table-users-${index}`}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
          {listUsers.length === 0 && (
            <tr>
              <td colspan="4">not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default TableUser;
