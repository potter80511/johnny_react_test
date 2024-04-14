
import './Right.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "../../pages/dashboard"

function Right({isLogin, onSubmitLogin}) {
  return (
    <div className="Right">
      <Routes>
        <Route exact path="/" element={<div>Company</div>}/>
        <Route exact path="/dashboard" element={<Dashboard isLogin={isLogin} onSubmitLogin={onSubmitLogin} />}/>
      </Routes>
      
	  </div>
  );
}

export default Right;
