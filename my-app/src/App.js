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
      <Pessoa nome="Guilherme" profissao="Progamador" idade="11" foto="https://steamuserimages-a.akamaihd.net/ugc/1455176870695154047/6AE7ADF9C609EB2256F5308EF8D8D0ABB82F986B/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"/>
      <Pessoa nome="yashiro" profissao="empregada de fantasma" idade="15" foto="https://s4.uupload.ir/files/88d8e5ffe666d74a2b286db0b9d7fc7c_521k.jpg"/>
    </div>
  );
}

export default App;
