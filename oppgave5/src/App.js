//css
import './App.css';

//components imports
import MyComponent from './components/MyComponent.js'
import Title from './components/Title';
import Wrapper from './components/Wrapper';

function App() {
  const title = 'It Works'
  return (
    <div className="App">
      <h1>Oppgave 5</h1>
     {/*  <div>
      <span>oppgave 1</span>
      <MyComponent/>
      </div> */}
      <div>
     {/*  <MyComponent title={title}/> */}
      </div>
      {/* oppgave 3 */}
      <div>
    {/*   <Title job={job} /> */}
      </div>
      {/* oppgave 4 */}
      <>
      <Wrapper>
        <Title title='Test'/>
      </Wrapper>
      </>
    </div>
  );
}

export default App;
