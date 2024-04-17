import Left from './components/Left'
import Right from './components/Right';
import './App.css';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import useUser, { LoginDataContext } from './hooks/useUser'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const { loginDataContextValue } = useUser()

  return (
    <div className="App">
      <LoginDataContext.Provider value={loginDataContextValue}>
        <BrowserRouter>
          <Left isLogin={isLogin} />
          <Right
            isLogin={isLogin}
            onSubmitLogin={() => setIsLogin(true)}
            account={account}
            setAccount={setAccount}
            password={password}
            setPassword={setPassword}
          />
        </BrowserRouter>
      </LoginDataContext.Provider>
    </div>
  );
}

export default App;
