import Select from '../../components/Right/Select'
import { useContext } from 'react';
import { LoginDataContext } from '../../hooks/useUser.js'

function Dashboard() {
  const { loginData } = useContext(LoginDataContext)

  return <Select account={loginData.account} password={loginData.password} />
}

export default Dashboard
