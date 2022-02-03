//Wrapper component which return <section>

const Wrapper = ({children})=>{
    return(
        <section className='flex'>
            {/* children prop run */}
         {children}
        </section>
    )
}

//exported as default
export default Wrapper;