import { useSelector } from "react-redux";

export default function ListUser() {
  const stateListUser: any = useSelector((state) => {
    return state;
  });
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {stateListUser.reducerListUser.map((item: any) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.userName}</td>
              <td>{item.gender}</td>
              <td>{item.dateBirth}</td>
              <td>{item.address}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
