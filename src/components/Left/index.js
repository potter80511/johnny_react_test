import './Left.css';
import Button from '../Button'

function Left({isLogin}) {
  const loginText = isLogin ? "登出" : "登入"
  return (
    <div className="Left">
		  <Button text={loginText} backgroundColor="blue" />
		  <Button text="首頁" backgroundColor="green"/>
	  </div>
  );
}

export default Left;
