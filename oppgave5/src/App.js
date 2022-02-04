//css
import './App.css';

//components imports
import MyComponent from './components/MyComponent.js'
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import Food from './components/Food';

  //import useState: oppgave 10 >
//resource: https://www.w3schools.com/REACT/react_usestate.asp
//https://fullstækk.no/courses/intro-react/12-forms/
import {useState} from 'react';


function App() {

//oppgave 10
//use state on input
//state is value with is set to empty string here at start
//setState is function to update the state
const [state, setState] = useState('');

//update input value in function
const inputValue = (e)=>{
  const value = e.target.value;
  
  //state is updated with function
  setState(value);

console.log(value);
}

  const title = 'It Works';

  //variabel which for li-tag
  const food = ['Pizza', 'Hamburger', 'Coke'];
 
  //oppgave 8, click event
  //click button function which only has console.log
  const click = ()=>{
    console.log('Clicked');
  }

  //oppgave 9 input change function
 /*  const change = (e)=>{
    console.log('change');
  } */

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
      {/*   <>
        <button className="btn" onClick={click}>Button</button><br/>
        </> */}
        
        {/* oppgave 9/10 
        * Input value is set as state so it can be updated
        * onChange is used to update the state by state update function, setvalue being what is typed in input field.

        */}
        <>
        <input /* onChange={change} */  value={state} onChange={inputValue}/>
        <p>{state}</p>
        </>


    </div>
  );
}

export default App;
