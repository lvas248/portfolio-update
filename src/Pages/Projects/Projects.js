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
            className='pt-[10vh] relative'
        >
            <div className='banner'>PROJECTS</div>

            <div className='grid md:grid-cols-2 gap-2 px-2'>
                { renderProjectCards }
            </div>

        </div> 
    );
}

export default Projects;