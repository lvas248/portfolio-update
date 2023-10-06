import scrollToSection from '../Helpers/scrollToSection'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'


function Navbar(){

    const [ isOpen, setOpen ] = useState(false)

    function toggleOpen(){
        setOpen(!isOpen)
    }

    function scrollTo(e){
        toggleOpen()
        scrollToSection(e.target.name)
    }

    return ( 

        <div className='fixed w-full m-auto z-50 bg-white drop-shadow-sm' >

            <div className={`flex flex-col sm:flex-row justify-between items-center max-w-[1050px] m-auto`}>

                <div className={`flex w-full items-center justify-between p-4`}>

                    <p className=' text-xl font-bold text-left'>Luis Vasquez</p>

                    <div className='sm:hidden'>
                        <Hamburger toggled={isOpen} onToggle={setOpen} />
                    </div>

                </div>

                <div className={`text-xs w-full flex flex-col sm:flex-row justify-between ${!isOpen && 'hidden sm:flex flex-col'}  `}>

                    <button name='home' className='navItem border-t' onClick={scrollTo}>HOME</button>
                    <button name='projects' className='navItem' onClick={scrollTo}>PROJECTS</button>
                    <button name='skills' className='navItem' onClick={scrollTo}>SKILLS</button>
                    <button name='contact' className='navItem' onClick={scrollTo}>CONTACT</button>
                
                </div>

            </div>

        </div> 
    );
}

export default Navbar;