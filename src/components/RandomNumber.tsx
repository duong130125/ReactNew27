import { useDispatch, useSelector } from "react-redux";
import { addRandomNumber } from "../action";

export default function RandomNumber() {
  const randomNumbers = useSelector((state: any) => state.reducerRandomNumber);
  const dispatch = useDispatch();

  const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    dispatch(addRandomNumber("RANDOM", randomNumber));
  };

  return (
    <div>
      <p>{JSON.stringify(randomNumbers)}</p>
      <button onClick={handleRandom}>Generate Random Number</button>
    </div>
  );
}
