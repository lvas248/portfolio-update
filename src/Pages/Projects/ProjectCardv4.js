function ProjectCardv4({project}) {

    const renderTechs = project.techs.map( t => {
        return <p key={t} className='p-1'>{t}</p>
    }) 

    return ( 
    <div className='relative group max-w-[500px] m-auto drop-shadow-xl border-2 border-black rounded-xl'>

        <img alt='project' src={project.images[0].image} className='rounded-xl' />
        
        <div className='absolute top-0 bg-cover bg-black h-full w-full opacity-40 group-hover:opacity-90 transform-opacity sm:duration-[500ms] rounded-xl'></div>
        
        <h1 className='centerInRelativeCont font-bold text-white text-[40px] group-hover:opacity-0 transform-opacity sm:duration-[500ms] whitespace-nowrap'>{project.title}</h1>
        
        <div className='centerInRelativeCont text-white font-bold opacity-0 group-hover:opacity-100 transform-opacity sm:duration-[500ms] grid gap-5'>
            
            <p className=' text-sm '>{project.description}</p>

            <div className='flex flex-wrap gap-1 text-[10px] font-extralight m-auto'>
                {renderTechs}
            </div>

            <div id='projectDetails' 
                className='flex gap-2 justify-around'>
                <a href={project.demo} className='border-4 p-1 text-center text-xs hover:bg-white hover:text-black w-[150px] rounded'>demo</a>
                <a href={project.git} className='border-4 p-1 text-center text-xs hover:bg-white hover:text-black w-[150px] rounded'>git</a>
            </div>

        </div>

    </div> );
}

export default ProjectCardv4;