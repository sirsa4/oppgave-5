//Wrapper component which return <section>

const Wrapper = ({children})=>{
    return(
        <section>
            {/* children prop run */}
         {children}
        </section>
    )
}

//exported as default
export default Wrapper;