import './App.css';
import Header from './Components/Header/Header';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Subheader from './Components/Subheader/Subheader';
import Fruitsshop from './Components/Fruitsshop/Fruitsshop.js';

function App() {
  return (
    <div className="App">
      {/* nav bar */}
      <Header/>
      {/* nav bar */}

      {/* Subheader */}
      <Subheader/>
      {/* Subheader */}

      {/* Fruits */}
    <Fruitsshop/>
      {/* Fruits */}
    </div>
  );
}

export default App;
