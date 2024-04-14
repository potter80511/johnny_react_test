import './Left.css';
import Button from '../Button'

function Left() {
  return (
    <div className="Left">
		  <Button text="登入" backgroundColor="blue" />
		  <Button text="首頁" backgroundColor="green"/>
	  </div>
  );
}

export default Left;
