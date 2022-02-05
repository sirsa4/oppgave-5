//oppgave 12 Alert component
import {useState} from 'react';

const Alert = ({pValue})=>{
    const [state, setState] = useState('');

    const click = ()=>{
        //oppgave 8
        console.log('Clicked');
    
        //oppgave 12/13
        //run alert if state, input field is not empty
        if(state !== ''){
    
          /* alert(state) */
          pValue(state)
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