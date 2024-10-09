import Header from './Components/header';
import Tentangsaya from './Components/Tentangsaya';
import Skillsaya from './Components/Skillsaya';
import Pengalamansaya from './Components/Pengalamansaya';
import Portofoliosaya from './Components/Portofoliosaya';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="Body">
      <div id='header'>
        <Header/>
      </div>

      <div id='Tentangsaya'>
        <Tentangsaya/>
      </div>

      <div id='Skillsaya'>
        <Skillsaya/>
      </div>

      <div id='Pengalamansaya'>
        <Pengalamansaya/>
      </div>

      <div id='Portofoliosaya'>
        <Portofoliosaya/>
      </div>
    </div>
  );
}

export default App;
