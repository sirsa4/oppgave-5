//food component. oppgave 7

const Food = ({food})=>{
    return(
        <>
        {food.map((foo, index)=>( 
              <li key={index}>{foo}</li>
            ))} 
        </>
    );
}

export default Food;