import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Matheus'

  function soma(a,b){
    return a + b
  }
  
  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá {name}</p>
      <p>2 + 2 é: { soma(2,2) }</p>
      <img src={url}/>
      <HelloWorld/>
    </div>
  );
}

export default App;
