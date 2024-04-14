import Left from './components/Left'
import Right from './components/Right';
import './App.css';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="App">
		<Left isLogin={isLogin} />
		<Right isLogin={isLogin} onSubmitLogin={() => setIsLogin(true)} />
    </div>
  );
}

export default App;
