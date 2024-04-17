import { LoginDataContext } from '../../hooks/useUser'
import { useContext } from 'react';

function AccountInfo() {
  const { loginData } = useContext(LoginDataContext)

  return <div className="account-info">
    <div>account: {loginData.account}</div>
    <div>password: {loginData.password}</div>
  </div>
}

export default AccountInfo
