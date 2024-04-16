
import './Right.css';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "../../pages/dashboard"
import Home from "../../pages/home"
import Login from "../../pages/login"

function Right({
  isLogin,
  onSubmitLogin,
  account,
  setAccount,
  password,
  setPassword,
}) {
  const user = false;
  return (
    <div className="Right">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route element={!user ? <Navigate to="/login" replace /> : undefined}>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                isLogin={isLogin}
                onSubmitLogin={onSubmitLogin}
                account={account}
                setAccount={setAccount}
                password={password}
                setPassword={setPassword}
              />
            }
          />
        </Route>
        <Route element={user ? <Navigate to="/dashboard" replace /> : undefined}>
          <Route path="/login" Component={Login} />
        </Route>
      </Routes>
	  </div>
  );
}

export default Right;
