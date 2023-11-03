import { useState } from 'react'
import Image from '../../Components/Image'

function ProjectCardv5({project}){

    const renderTechs = project.techs.map( t =>{
        return <p key={t} className=''>{t}</p>
    })

    return ( 

            <div className=' sm:w-[67%] grid gap-1 m-auto p-2'>

                <p className='text-lg font-bold'>{project.title}</p>

                <Image alt='project' src={project.images[0].image} />
                                
                <div className='grid gap-2 p-2'>

                    <div className='font-extralight text-[12px] flex flex-wrap gap-2 '>{renderTechs}</div>
                    <p className='text-sm'>{project.description}</p>
                   
                    <div id='projectDetails' 
                        className='flex gap-6 place-self-end font-extralight'>
                        <a href={project.demo} className='text-xs hover:sm:animate-scale-up border border-black p-1 bg-white w-[50px] text-center drop-shadow-md'>demo</a>
                        <a href={project.git} className='text-xs hover:sm:animate-scale-up border border-black p-1 bg-white w-[50px] text-center drop-shadow-md'>git</a>
                    </div>
                </div>

            </div>

     );
}

export default ProjectCardv5;