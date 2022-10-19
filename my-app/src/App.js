import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <br/>
      <hr/>
      <Pessoa nome="Guilherme" profissao="Progamador" idade="11" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjm0GKV-I6M_x81LG_0l_oPh_eFlsDCOonzQ&usqp=CAU"/>
      <Pessoa nome="yashiro" profissao="empregada de fantasma" idade="15" foto="https://s4.uupload.ir/files/88d8e5ffe666d74a2b286db0b9d7fc7c_521k.jpg"/>
    </div>
  );
}

export default App;
