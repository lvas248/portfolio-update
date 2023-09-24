
function ProjectDetail({ selectedProjectId, updateSelectedProjectId, project}) {

    // console.log(selectedProjectId)
    return ( 

  
            <div 

                className={
                `${(selectedProjectId !== project.id) && 'hidden'} h-[100%] w-[100%] absolute top-0 text-white  p-5 text-xs animate-fade-in-fast drop-shadow-md`
                }>
                    

                    <div className='absolute h-[100%] w-[100%] bg-black opacity-90 top-0 left-0'></div>
                    
                    <div                
                            className='grid grid-cols-2 h-full'>
                        <div className='grid place-content-center'>
                            <img  className='m-auto bg-cover z-10 border-2 border-white' alt='project screenshot' src={project.images[0].image} />
                        </div>
                        
                        <div className='py-8 px-4 z-10 flex flex-col leading-3 justify-between font-semibold text-[8px] sm:text-xs'>
                            <h3 className='text-xs sm:text-lg font-bold'>{project.title}</h3>
                            <p>{project.description}</p>
                            <button onClick={()=>console.log('clicked')} className='underline text-right'>see more</button>

                        </div>

                    </div>

            
            </div> 

    );
}

export default ProjectDetail;