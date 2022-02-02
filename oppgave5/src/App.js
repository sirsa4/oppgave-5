//css
import './App.css';

//components imports
import MyComponent from './components/MyComponent.js'
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <h1>Oppgave 5</h1>
     {/*  <div>
      <span>oppgave 1</span>
      <MyComponent/>
      </div> */}
      <div>
      <MyComponent title='It Works'/>
      </div>
      <div>
      <Title />
      </div>
    </div>
  );
}

export default App;
