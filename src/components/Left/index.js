import './Left.css';
import Button from '../Button'
import Link from "../Link";
import { LoginDataContext } from '../../hooks/useUser.js'
import { useContext } from 'react';

function Left() {
  const { loginData, setLoginData } = useContext(LoginDataContext)
  const isLogin = !!loginData

  const handleLogout = () => {
    setLoginData(null)
  }

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
