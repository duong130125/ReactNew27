import { useSelector } from "react-redux";

export default function Profile() {
  const stateProfile: any = useSelector((state) => {
    return state;
  });

  return (
    <>
      {stateProfile.reducerProfile.map((item: any) => (
        <div key={item.id}>
          <h2>Thông tin cá nhân</h2>
          <p>Id: {item.id}</p>
          <p>Họ và tên: {item.userName}</p>
          <p>Giới tính: {item.gender}</p>
          <p>Ngày sinh: {item.dateBirth}</p>
          <p>Địa chỉ: {item.address}</p>
        </div>
      ))}
    </>
  );
}
