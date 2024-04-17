import './Left.css';
import Button from '../../Button'
import Link from "../../Link";
import { LoginDataContext } from '../../../hooks/useUser.js'
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

function Left() {
  const { pathname } = useLocation();

  const { loginData, setLoginData } = useContext(LoginDataContext)
  const isLogin = !!loginData

  const handleLogout = () => {
    setLoginData(null)
  }

  return (
    <div className="Left">
      <div className='nav'>
        <Link href="/" active={pathname === '/'}>
          <span>Home</span>
        </Link>
        {isLogin && <Link href="/dashboard" active={pathname === '/dashboard'}>
          <span>Dashboard</span>
        </Link>}
      </div>
      {isLogin ?
        <Button
          text="Log out"
          backgroundColor="orange"
          onClick={handleLogout}
        /> : <Link href="/login" active={pathname === '/login'}>
          <span>Login</span>
        </Link>
      }
	  </div>
  );
}

export default Left;
