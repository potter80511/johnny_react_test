import Left from './components/Left'
import Right from './components/Right';
import './App.css';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Left isLogin={isLogin} />
        <Right isLogin={isLogin} onSubmitLogin={() => setIsLogin(true)} />
      </BrowserRouter>
    </div>
  );
}

export default App;
