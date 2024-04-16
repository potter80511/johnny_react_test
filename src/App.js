import Left from './components/Left'
import Right from './components/Right';
import './App.css';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
