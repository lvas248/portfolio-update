import { useState } from 'react'
import ImageGallery from './ImageGallery'

function ProjectCard({project, selectedProjectId, updateSelectedProjectId}){

    const [ cardSelected, setCardSelected ] = useState(false)


    function toggleCardSelected(){
        setCardSelected(!cardSelected)
    }



    const renderTechs = project?.techs.map( t => {
        return <p className='p-1 bg-white text-black w-fit text-[8px] font-bold' key={t}>{t}</p>
    })
    

 
    return ( 

        <div
            className={`relative drop-shadow-xl m-auto border-b-2 border-x-2 bg-black text-white overflow-hidden grid place-content-start h-[30vh] sm:h-[40vh] max-w-[546px] ${cardSelected && 'h-[80vh] sm:h-[75vh] '} sm:transform-all sm:duration-500 animate-fade-in`}
        >
                
                <button onClick={toggleCardSelected} className={`${cardSelected && 'hidden'} z-40 absolute flex text-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-white w-fit `}>{project.title}</button>


                <ImageGallery images={project.images} cardSelected={cardSelected} toggleCardSelected={toggleCardSelected}/>
                
                <div className={`p-4 text-sm ${!cardSelected && 'hidden'}`}>

                    <div className='grid gap-4 mt-4 m-auto'>
                       
                        <p className='font-bold text-lg'>{project.title}</p>   
        
                        <p>{project.description}</p>        

                        <div className='flex flex-wrap gap-2 '>
                            {renderTechs}
                        </div>

                    </div>

                    <div className='underline font-bold my-8 px-4 flex gap-2 place-content-end'>
                        <a className='hover:animate-scale-up' href={project.demo}>demo</a>
                        <a className='hover:animate-scale-up' href={project.git}>code</a>
                    </div>

                    <p className='text-white text-[9px] text-right'>*demo may take a minute to spin up</p>

                </div>




            {/* <div className={`relative ${cardSelected && 'hidden'} bg-black`}>
                <img className='grayscale h-[40vh] m-auto' alt={project.title} src={project.images[0].image}/>
                <p className='absolute flex text-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center text-[40px] sm:text-[50px] lg:text-[60px] text-white font-bold'>{project.title}</p>
            </div>

    
            <div>
                <ProjectDetail selectedProjectId={selectedProjectId} updateSelectedProjectId={updateSelectedProjectId} project={project} />
            </div> */}

        </div>


        // <div
        //     className={`drop-shadow-xl `}
        // >

        //     <div onClick={select} className={`relative hover:cursor-pointer border-black border-2 max-w-[670px] m-auto h-[25vh] sm:h-[33vh] ${selectedProjectId === project.id && 'h-[65vh] sm:h-[75vh]'} transition-height duration-500`}>

        //         <img className='object-cover h-full w-full grayscale' alt='proj' src={project.card_image} />
        //         <p className='text-center absolute inset-0 flex items-center justify-center text-[40px] sm:text-[50px] lg:text-[60px] text-white font-bold  shadow-xl'>{project.title}</p>
                
        //         <ProjectDetail selectedProjectId={selectedProjectId} updateSelectedProjectId={updateSelectedProjectId} project={project} />

        //     </div> 

        // </div>

    );
}

export default ProjectCard;