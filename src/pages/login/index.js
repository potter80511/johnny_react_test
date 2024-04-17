import Input from '../../components/Input'
import Button from '../../components/Button'
import { useState, useContext } from 'react';
import { LoginDataContext } from '../../hooks/useUser.js'

function Login() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const { loginData, setLoginData } = useContext(LoginDataContext)

  const handleLoginSubmit = () => {
    setLoginData({ account, password })
  }

  return <div>
    <Input label="帳號:" value={account} onChange={setAccount} />
    <Input label="密碼:" value={password} onChange={setPassword} type="password" />
    <Button text="登入" onClick={handleLoginSubmit} backgroundColor="blue" />
  </div>
}

export default Login
