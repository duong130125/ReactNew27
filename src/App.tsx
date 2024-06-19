import { Route, Routes } from "react-router-dom";
import ChangeState from "./components/ChangeState";
import CheckBox from "./components/CheckBox";
import Counter from "./components/Counter";
import ListUser from "./components/ListUser";
import Product from "./components/Product";
import Profile from "./components/Profile";
import RandomNumber from "./components/RandomNumber";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <Profile></Profile>
      <ListUser></ListUser>
      <Product></Product>
      <Counter></Counter>
      <RandomNumber></RandomNumber>
      <ChangeState></ChangeState>
      <CheckBox></CheckBox>
      <Routes>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </>
  );
}
