/*
* first letter being capital case is important for function to be recognised as component from react 
 */
//props destructured in parameter
const MyComponent = ({title})=>{
    return(
       <div>
        {/* oppgave 1 */}
        <h1>My First Component</h1>
        {/* oppgave 2 */}
        <h1>{title}</h1>
       </div>
    )
}

export default MyComponent;