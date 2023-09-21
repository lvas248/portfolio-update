import ProjectDetail from "./ProjectDetail";
import ScrollAnimation from "react-animate-on-scroll";

function ProjectCard({project, selectedProjectId, updateSelectedProjectId}) {

 
    return ( 

        <ScrollAnimation
            animateIn='bounceInRight'
        >

            <div onClick={()=>updateSelectedProjectId(project.id)} className='relative hover:cursor-pointer border-black border-2 max-w-[670px] m-auto animate-wiggle-in'>

                <img className='object-cover h-full w-full grayscale' alt='proj' src={project.card_image} />
                <p className='text-center absolute inset-0 flex items-center justify-center text-[40px] sm:text-[50px] lg:text-[60px] text-white font-bold  shadow-xl'>{project.title}</p>
                

                <ProjectDetail selectedProjectId={selectedProjectId} updateSelectedProjectId={selectedProjectId} project={project} />

            </div> 

        </ScrollAnimation>

    );
}

export default ProjectCard;