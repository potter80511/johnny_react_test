
import './Right.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "../../pages/dashboard"
import Home from "../../pages/home"

function Right({
  isLogin,
  onSubmitLogin,
  account,
  setAccount,
  password,
  setPassword,
}) {
  return (
    <div className="Right">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route
          exact
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
      </Routes>
      
	  </div>
  );
}

export default Right;
