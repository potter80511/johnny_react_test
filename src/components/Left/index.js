import './Left.css';
import Button from '../Button'
import { useNavigate } from "react-router-dom";

function Left({isLogin, onLogout}) {
  const navigate = useNavigate();
  const loginText = isLogin ? "登出" : "登入"
  return (
    <div className="Left">
		  <Button
        text={loginText}
        backgroundColor="blue"
        onClick={() => {
          if(isLogin) {
            onLogout()
          }
          navigate("/dashboard")
        }}
      />
		  <Button text="首頁" backgroundColor="green" onClick={() => navigate("/")} />
	  </div>
  );
}

export default Left;
