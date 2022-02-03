/*
* first letter being capital case is important for function to be recognised as component from react 
 */

//Title component is imported to MyComponent component. Title is child component here.
import Title from "./Title";
//props destructured in parameter
const MyComponent = ({title})=>{
    return(
       <div>
        {/* oppgave 1 */}
        {/* <h1>My First Component</h1> */}
        {/* oppgave 2 */}
      {/*   <h1>{title}</h1> */}
        {/* oppgave 3 */}
        {/* Title component is run in 
        MyComponent with props title */}
        
        <span>oppgave 3</span>
        <Title title={title} />
       </div>
    )
}

export default MyComponent;