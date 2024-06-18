import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const stateCount: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const increase = () => {
    dispatch({
      type: "INCREASE",
    });
  };

  const decrease = () => {
    dispatch({
      type: "DECREASE",
    });
  };
  return (
    <>
      <h3>Giá trị Count: {stateCount.reducerCounter}</h3>
      <button onClick={increase}>tăng</button>
      <button onClick={decrease}>giảm</button>
    </>
  );
}
