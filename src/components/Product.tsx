import { useSelector } from "react-redux";

export default function Product() {
  const stateProduct: any = useSelector((state) => {
    return state;
  });
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng(kg)</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {stateProduct.reducerProduct.map((item: any) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
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
