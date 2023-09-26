import scrollToSection from '../Helpers/scrollToSection'

function Navbar(){

    return ( 
        <div className='fixed w-full z-50  bg-white drop-shadow-sm '>

            <div className='flex justify-between items-center h-[10vh] border-b-2 pr-2max-w-[1050px] m-auto'>
                <p className=' px-5 text-xl font-bold text-left'>Luis Vasquez</p>
                

                <div className='flex gap-2 mt-[5vh] text-[8px] sm:text-xs px-5 font-bold place-content-end'>

                    <button onClick={()=> scrollToSection('home')}>HOME</button>
                    <button onClick={()=> scrollToSection('projects')}>PROJECTS</button>
                    <button onClick={()=> scrollToSection('skills')}>SKILLS</button>
                    <button onClick={()=> scrollToSection('contact')}>CONTACT</button>
                
                </div>

            </div>
            


        </div> 
    );
}

export default Navbar;