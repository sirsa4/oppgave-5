//css
import './App.css';

//components imports
import MyComponent from './compos/MyComponent.js'

function App() {
  return (
    <div className="App">
      <h1>Oppgave 5</h1>
      {/* oppgave  */}
      <div>
      <span>oppgave 1</span>
      <MyComponent/>
      </div>
      {/* oppgave 2 */}
      <div>
      <span>oppgave 2</span>
      {/* title props added */}
      <MyComponent title='It Works'/>
      </div>
    </div>
  );
}

export default App;
