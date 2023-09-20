import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Details from "./components/Details";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Protected from "./components/Protected";
import Register from "./components/Register";
import Shop from "./components/Shop";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/about" element={<Protected Child={About} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Protected Child={Home} />} />
        <Route path="/logout" exact element={<Logout />} />
        <Route path="/details/:productId" element={<Details />} />
      </Routes>
    </Layout>
  );
}

export default App;
