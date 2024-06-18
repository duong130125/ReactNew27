import { useDispatch, useSelector } from "react-redux";

export default function CheckBox() {
  const stateCheckBox: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({
      type: "CHECKBOX",
    });
  };

  const appStyle: any = {
    backgroundColor:
      stateCheckBox.reducerCheckBox === "light" ? "#ffffff" : "#333333",
    color: stateCheckBox.reducerCheckBox === "light" ? "#000000" : "#ffffff",
    width: "300px",
    height: "200px",
  };

  return (
    <>
      <div style={appStyle}>
        <p>
          {stateCheckBox.reducerCheckBox === "light"
            ? "Chế độ Sáng"
            : "Chế độ Tối"}
        </p>
        <label>
          <input
            type="checkbox"
            checked={stateCheckBox.reducerCheckBox === "dark"}
            onChange={handleToggle}
          />
        </label>
      </div>
    </>
  );
}
