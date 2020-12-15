import logo from './logo.svg';
import './App.css';
import BaiTapForm from './components/BaiTapForm/BaiTapForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>{new Date().toLocaleString()}</p>
        <BaiTapForm></BaiTapForm>
      </header>
    </div>
  );
}

export default App;
