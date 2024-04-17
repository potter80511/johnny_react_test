
import './Right.css';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "../../../pages/dashboard"
import Home from "../../../pages/home"
import Login from "../../../pages/login"
import { useContext } from 'react';
import { LoginDataContext } from '../../../hooks/useUser.js'

function Right() {
  const { loginData } = useContext(LoginDataContext)
  const isLogin = !!loginData;
  return (
    <div className="Right">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route element={!isLogin ? <Navigate to="/login" replace /> : undefined}>
          <Route
            path="/dashboard"
            element={
              <Dashboard />
            }
          />
        </Route>
        <Route element={isLogin ? <Navigate to="/dashboard" replace /> : undefined}>
          <Route path="/login" Component={Login} />
        </Route>
      </Routes>
	  </div>
  );
}

export default Right;
