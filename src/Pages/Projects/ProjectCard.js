import ProjectDetail from "./ProjectDetail";
import { useState } from 'react'

function ProjectCard({project}) {

    const [ projectDetailToggle, setProjectDetailToggle ] = useState(false)

    function toggleProjectDetail(){
        setProjectDetailToggle(!projectDetailToggle)
    }

    return ( 
        <div onClick={toggleProjectDetail} className='relative hover:cursor-pointer border-black border-2'>

            <img className='object-cover h-full w-full grayscale' alt='proj' src={project.card_image} />
            <div className='absolute inset-0 '></div>
            <p className='text-center absolute inset-0 flex items-center justify-center text-[40px] sm:text-[50px] lg:text-[60px] text-white font-bold  shadow-xl'>{project.title}</p>
            

            <ProjectDetail toggle={projectDetailToggle} project={project}/>

        </div> 
    );
}

export default ProjectCard;