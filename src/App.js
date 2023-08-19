import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./component/core/nav/header";
import Home from "./component/pages/home/home";
import Login from "./component/pages/login/login";
import Register from "./component/pages/register/register";
import { JwtContext } from "./component/context/jwtContext";
import { useState } from "react";
import { UserContext } from "./component/context/userContext";
import { ProvinceContext } from "./component/context/provinceContext";
import User from "./component/pages/user/user";
import { RequieredAuth } from "./component/requieredAuth/requieredAuth";

function App() {




  const [jwt, setJwt] = useState(window.localStorage.token ? window.localStorage.token : null);
  const [user, setUser] = useState(window.localStorage.user ? window.localStorage.user : null);
  const [province, setProvince] = useState(window.localStorage.province ? window.localStorage.province : "Madrid");
  


  return (
    <>
      <ProvinceContext.Provider value={{ province, setProvince }}>
        <UserContext.Provider value={{ user, setUser }}>
          <JwtContext.Provider value={{ jwt, setJwt }}>
            <Router>
              <Header />
              <Routes>
                <Route path="" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user"  element={ <RequieredAuth> <User /></RequieredAuth>} />
              </Routes>
            </Router>
          </JwtContext.Provider>
        </UserContext.Provider>
      </ProvinceContext.Provider>
    </>
  );
}

export default App;
