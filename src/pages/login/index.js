import Input from '../../components/Input'
import Button from '../../components/Button'
import { useState, useContext } from 'react';
import { LoginDataContext } from '../../hooks/useUser.js'
import './Login.css'

function Login() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const { setLoginData } = useContext(LoginDataContext)

  const handleLoginSubmit = () => {
    setLoginData({ account, password })
  }

  return <div className="Login">
    <h2>Login</h2>
    <Input placeholder="Accoount" value={account} onChange={setAccount} />
    <Input placeholder="Password" value={password} onChange={setPassword} type="password" />
    <Button text="Submit" onClick={handleLoginSubmit} backgroundColor="orange" width={100} />
  </div>
}

export default Login
