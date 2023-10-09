import { useState } from 'react';
import { projects }from '../../Data/projectData'
import ProjectCardv4 from './ProjectCardv4';

function Projects(){

    
    const [ selectedProjectId, setSelectedProjectId ] = useState('')

    

    function updateSelectedProjectId(projectId){
        setSelectedProjectId(projectId)
    }

    const renderProjectCards = projects.map( p =>{
        return <ProjectCardv4 key={p.id} project={p} updateSelectedProjectId={updateSelectedProjectId} selectedProjectId={selectedProjectId} />
    })

    return ( 
        <div id='projects'
            className='py-[10vh] relative max-w-[1050px] m-auto'
        >
            <div className='banner'>PROJECTS</div>

            <div className='grid md:grid-cols-2 gap-10 px-2 mt-[5vh]'>
                { renderProjectCards }
            </div>

        </div> 
    );
}

export default Projects;