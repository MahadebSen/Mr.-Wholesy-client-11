import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageItems from "./Components/ManageItems/ManageItems";
import AddItem from "./Components/AddItem/AddItem";
import MyItems from "./Components/MyItems/MyItems";
import DisplayItem from "./Components/DisplayItem/DisplayItem";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import Footer from "./Components/Footer/Footer";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/createaccount"
          element={<CreateAccount></CreateAccount>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <DisplayItem></DisplayItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/forgetpassword"
          element={<ForgetPassword></ForgetPassword>}
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
