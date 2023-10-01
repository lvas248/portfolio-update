import ImageGallery from "./ImageGallery";

function ProjectDetail({ selectedProjectId, project}) {



    const renderTechs = project?.techs.map( t => {
        return <p className='p-1 bg-white text-black w-fit text-[8px] font-bold' key={t}>{t}</p>
    })

    return ( 

  
            <div 
                className={
                `${(selectedProjectId !== project.id) && 'opacity-0'} transition-opacity duration-500 h-[100%] w-[100%] absolute top-0 text-white  p-5 text-xs drop-shadow-md hover:cursor-default`
                }>
                    

                    <div className='absolute h-[100%] w-[100%] bg-black top-0 left-0 p-8'>

                        <ImageGallery images={project.images} />

                        <div className='grid gap-4 mt-4'>
                            <p className='font-bold text-lg'>{project.title}</p>   
                            <p>{project.description}</p>        

                            <div className='flex flex-wrap gap-2 '>
                                {renderTechs}
                            </div>

                        </div>

                        <div className='underline font-bold mt-8 flex gap-2 place-content-end'>
                            <a href={project.demo}>demo</a>
                            <p href={project.git}>code</p>
                       </div>


                    </div>
            
            </div> 

    );
}

export default ProjectDetail;