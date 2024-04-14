import Input from '../../components/Input'
import Button from '../../components/Button'

function Dashboard({
  isLogin,
  onSubmitLogin,
  account,
  setAccount,
  password,
  setPassword
}) {
  return isLogin ? <div>
    select
    </div>
  : <div>
      <Input label="帳號:" value={account} onChange={setAccount} />
      <Input label="密碼:" value={password} onChange={setPassword} type="password" />
      <Button text="登入" onClick={() => account && password && onSubmitLogin()} backgroundColor="blue" />
    </div>
}

export default Dashboard
