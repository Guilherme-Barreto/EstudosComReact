import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <hr />
      <SayMyName name="Guilherme" />
      <Pessoa nome="Guilherme" profissao="Progamador" foto="https://steamuserimages-a.akamaihd.net/ugc/1455176870695154047/6AE7ADF9C609EB2256F5308EF8D8D0ABB82F986B/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" idade="11"/>
    </div>
  );
}

export default App;
