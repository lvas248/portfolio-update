import ProjectDetail from "./ProjectDetail";

function ProjectCard({project, selectedProjectId, updateSelectedProjectId}) {

    function select(){
        updateSelectedProjectId(project.id)        
    }
 
    return ( 

        <div
            className={`drop-shadow-xl `}
        >

            <div onClick={select} className={`relative hover:cursor-pointer border-black border-2 max-w-[670px] m-auto h-[25vh] sm:h-[33vh] ${selectedProjectId === project.id && 'h-[65vh] sm:h-[75vh]'} transition-height duration-500`}>

                <img className='object-cover h-full w-full grayscale' alt='proj' src={project.card_image} />
                <p className='text-center absolute inset-0 flex items-center justify-center text-[40px] sm:text-[50px] lg:text-[60px] text-white font-bold  shadow-xl'>{project.title}</p>
                
                <ProjectDetail selectedProjectId={selectedProjectId} updateSelectedProjectId={updateSelectedProjectId} project={project} />

            </div> 

        </div>

    );
}

export default ProjectCard;