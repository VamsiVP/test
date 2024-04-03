
import './App.css';
import Navbarr from './component/Navbarr';
import Home from './component/Home';
import Usinghooks from './component/Usinghooks' 

function App() {
  return (
    <div className="App">
      <Navbarr/>
      <div className='content'>
       {/* <Home/> */}
       <Usinghooks/>
       
      </div>
    </div>
  );
}

export default App;
