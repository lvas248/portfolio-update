import scrollToSection from "../../Helpers/scrollToSection";
import github from '../../Assets/icons/icons8-github-100.png'
import linkedIn from '../../Assets/icons/icons8-linkedin-100.png'
import medium from '../../Assets/icons/icons8-medium-100.png'

function Home() {
    return ( 
        <div id='home'
            className='pt-[10vh]'
        >
            <div className='banner'>HOME</div>
            
            <div className='h-[67vh] grid px-5'>

                <h1 className='font-bold text-center text-[60px] sm:text-[70px] w-fit m-auto'>FULL STACK SOFTWARE ENGINEER</h1>

                <div className='homeIconContainer'>
                    <a href='https://github.com/lvas248'>
                        <img className='homeIcon' alt='git' src={github}/>
                    </a>

                    <a href='https://www.linkedin.com/in/lvas248/'>
                        <img className='homeIcon' alt='linkedin' src={linkedIn}/>
                    </a>

                    <a href='https://medium.com/@lvas248'>
                        <img className='homeIcon' alt='medium' src={medium}/>
                    </a>

                </div>
                
                <p className='text-center text-sm'>I construct end-to-end web applications that are dependable, scalable, and prioritize an exceptional user experience.</p>
            
                <button onClick={()=>scrollToSection('contact')} className='border-2 border-black max-h-[150px] w-[67vw] max-w-[750px] bg-white mx-auto font-bold text-md drop-shadow-xl'>GET IN TOUCH</button>

            </div>


        </div> 
    );
}

export default Home;