import { useState } from 'react'

function ProjectCardv5({project}){

    const renderTechs = project.techs.map( t =>{
        return <p key={t} className=''>{t}</p>
    })

    const [ imageClicked, setImageClick ] = useState(false)

    function toggleImageClick(){
        setImageClick(!imageClicked)
    }



    return ( 
        <div className='p-4'>

            <div className=' sm:w-[67%] grid gap-1 m-auto p-2'>

                <p className='text-lg'>{project.title}</p>

                <img onClick={toggleImageClick} className='grayscale border-2 border-black drop-shadow-xl' alt={project.title} src={project.images[0].image} />


                {/* {
                    imageClicked ? (
                        <video autoPlay muted controls className='grayscale m-auto border border-black' src={project.vid_url} poster={project.images[0].image} type='video/webm' />
                    ):(
                        <img onClick={toggleImageClick} className='grayscale hover:cursor-pointer hover:sm:animate-scale-up border-2 border-black drop-shadow-xl' alt={project.title} src={project.images[0].image} />
                    )
                } */}
                
                
                <div className='grid gap-2 p-2'>
                    <div className='font-extralight text-[12px] flex flex-wrap gap-1 justify-between'>{renderTechs}</div>
                    <p className='text-sm'>{project.description}</p>
                   
                    <div id='projectDetails' 
                        className='flex gap-6 place-self-end font-extralight'>
                        <a href={project.demo} className='text-xs hover:sm:animate-scale-up border border-black p-1 bg-white w-[50px] text-center drop-shadow-md'>demo</a>
                        <a href={project.git} className='text-xs hover:sm:animate-scale-up border border-black p-1 bg-white w-[50px] text-center drop-shadow-md'>git</a>
                    </div>
                </div>

            </div>
            
        </div>
     );
}

export default ProjectCardv5;