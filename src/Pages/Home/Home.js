import scrollToSection from "../../Helpers/scrollToSection";

function Home() {
    return ( 
        <div id='home'
            className='pt-[10vh]'
        >
            <div className='banner'>HOME</div>
            
            <div className='h-[67vh] grid px-5'>

                <h1 className='font-bold text-center text-[60px] sm:text-[70px] w-fit m-auto'>FULL STACK ENGINEER</h1>
                
                <p className='text-center text-sm'>I construct end-to-end web applications that are dependable, scalable, and prioritize an exceptional user experience.</p>
            
                <button onClick={()=>scrollToSection('contact')} className='border-2 border-black max-h-[150px] w-[67vw] max-w-[750px] bg-white mx-auto font-bold text-md'>GET IN TOUCH</button>

            </div>


        </div> 
    );
}

export default Home;