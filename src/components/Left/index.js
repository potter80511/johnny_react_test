import './Left.css';
import Button from '../Button'
import Link from "../Link";

function Left({isLogin}) {
  const handleLogout = () => {}

  return (
    <div className="Left">
      <div className='nav'>
        <Link href="/">
          <span>Home</span>
        </Link>
        {isLogin && <Link href="/dashboard">
          <span>Dashboard</span>
        </Link>}
      </div>
      {isLogin ?
        <Button
          text="Log out"
          backgroundColor="orange"
          onClick={handleLogout}
        /> : <Link href="/login">
          <span>Login</span>
        </Link>
      }
	  </div>
  );
}

export default Left;
