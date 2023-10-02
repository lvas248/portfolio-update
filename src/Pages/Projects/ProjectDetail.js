import ImageGallery from "./ImageGallery";

function ProjectDetail({ selectedProjectId, project}) {



    const renderTechs = project?.techs.map( t => {
        return <p className='p-1 bg-white text-black w-fit text-[8px] font-bold' key={t}>{t}</p>
    })

    return ( 

  
            <div 
                className={
                    ` text-black  text-xs border-b-2 border-x-2 w-min`
                }>
                    

                    <div>

                        <ImageGallery images={project.images} />

                        <div className='grid gap-4 mt-4 w-[80%] m-auto'>
                            <p className='font-bold text-lg'>{project.title}</p>   
                            <p>{project.description}</p>        

                            <div className='flex flex-wrap gap-2 '>
                                {renderTechs}
                            </div>

                        </div>

                        <div className='underline font-bold my-8 px-4 flex gap-2 place-content-end'>
                            <a href={project.demo}>demo</a>
                            <p href={project.git}>code</p>
                       </div>


                    </div>
            
            </div> 

    );
}

export default ProjectDetail;