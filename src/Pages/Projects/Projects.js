import { useState } from 'react';
import { projects }from '../../Data/projectData'
import ProjectCard from './ProjectCard';

function Projects(){

    
    const [ selectedProjectId, setSelectedProjectId ] = useState('')

    

    function updateSelectedProjectId(projectId){
        setSelectedProjectId(projectId)
    }
  

    const renderProjectCards = projects.map( p =>{
        return <ProjectCard key={p.id} project={p} updateSelectedProjectId={updateSelectedProjectId} selectedProjectId={selectedProjectId} />
    })

    return ( 
        <div id='projects'
            className='py-[10vh] relative'
        >
            <div className='banner'>PROJECTS</div>

            <div className='grid gap-3 px-2 mt-[5vh]'>
                { renderProjectCards }
            </div>

        </div> 
    );
}

export default Projects;