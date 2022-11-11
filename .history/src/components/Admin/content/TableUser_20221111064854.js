import { useState } from "react";

const TableUser = (props) => {
  const [listUsers, setListUsers] = useState([]);

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
          {listUser.map((item,index)=>{
            listUser[index] = item
            )}
        </tbody>
      </table>
    </>
  );
};
export default TableUser;
