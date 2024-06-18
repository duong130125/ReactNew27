import { useDispatch, useSelector } from "react-redux";

export default function ChangeState() {
  const stateChange: any = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const hadleChange = () => {
    dispatch({
      type: "CHANGE",
    });
  };
  return (
    <>
      <h2>{stateChange.reducerChange}</h2>
      <button onClick={hadleChange}>Change state</button>
    </>
  );
}
