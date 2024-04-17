import { LoginDataContext } from '../../hooks/useUser'
import { useContext } from 'react';

function AccountInfo() {
  const { loginData } = useContext(LoginDataContext)
  const accountData = [
    {label: 'Account', value: loginData.account},
    {label: 'Password', value: loginData.password}
  ]
  console.log(accountData)

  return <div className="account-info">
    {accountData.map(({label, value}) => {
      return <div key={label} className="field">
        <div className='label'>{label}:</div>
        <div className='value'>{value}</div>
      </div>
    })}
  </div>
}

export default AccountInfo
