import { useState } from 'react';
import './Right.css';
import Input from '../Input'
import Button from '../Button'

function Right({isLogin, onSubmitLogin}) {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <div className="Right">
      {isLogin ? <div>
        select
        </div>
      : <div>
          <Input label="帳號:" value={account} onChange={setAccount} />
          <Input label="密碼:" value={password} onChange={setPassword} type="password" />
          <Button text="登入" onClick={() => account && password && onSubmitLogin()} backgroundColor="blue" />
        </div>}
	  </div>
  );
}

export default Right;
