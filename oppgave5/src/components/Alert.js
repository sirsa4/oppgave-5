//oppgave 12 Alert component
import {useState} from 'react';

const Alert = ({pValue, clicked})=>{
    const [state, setState] = useState('');

    const click = ()=>{
        //oppgave 8
       
    
        //oppgave 12/13
        //run alert if state, input field is not empty
      
        //if state(input value) is not falsely or just empty string. then the <p>-tag in App.js is updated with pValue, the prop storing setInputValue changing the p-tag state to value of input inside this Alert component.
        console.log(state);
        if(state !== ''){
          console.log(state);
          /* alert(state) */
          pValue(state)

          /* oppgave 14 */
          clicked(true);
          setState('');
        } 
         //when input state is empty, the the pValue is changed to empty string. This deletes text content inside <p> is App.js
        else {
         pValue('');
        } 
        
      }

      const inputValue = (e)=>{
        const value = e.target.value;
      
        //state is updated with function
        setState(value);

       console.log(value);
      }

const change = (e)=>{
    console.log('change');
  }
    return(
        <>
          <button className="btn" onClick={click}>Button</button><br/>

         <input onChange={change}  value={state} onChange={inputValue}/>
        </>
    )
}

export default Alert;