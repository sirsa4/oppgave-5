//css
import './App.css';

//components imports
import MyComponent from './components/MyComponent.js'
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import Food from './components/Food';

function App() {
  const title = 'It Works';

  //variabel which for li-tag
  const food = ['Pizza', 'Hamburger', 'Coke'];
 
  //oppgave 8, click event
  //click button function which only has console.log
  const click = ()=>{
    console.log('Clicked');
  }

  //oppgave 9 input change function
  const change = (e)=>{
    console.log('change '+ e.target.value);
  }

  return (
    <div className="App">
      <h1>Oppgave 5</h1>
     {/*  <div>
      <span>oppgave 1</span>
      <MyComponent/>
      </div> */}
      
      {/* oppgave 2 */}
      <div>
     {/*  <MyComponent title={title}/> */}
      </div>

      {/* oppgave 3 */}
      <div>
    {/*   <Title job={job} /> */}
      </div>

      {/* oppgave 4/5 */}
      <>
    {/*   <Wrapper>
        <Title title='Test'/>
      </Wrapper> */}
      </>

       {/* oppgave 6 */}
        <>
        {/*   <ul>
          {food.map((foo, index)=> <li key={index}>{foo}</li>
            )}
          </ul> */}
        {/*   <ul>
          {food.map((foo, index)=>( 
              <li key={index}>{foo}</li>
            ))}
          </ul> */}
        </>

        {/* oppgave 7 */}
        <>
          <Food food={food.map((foo, index)=>( 
              <li key={index}>{foo}</li>
            ))} />
        </>

        {/* oppgave 8 */}
        <>
        <button className="btn" onClick={click}>Button</button><br/>
        </>
        
        {/* oppgave 9 */}
        <>
        <input onChange={change}/>
        </>

    </div>
  );
}

export default App;
