import { useParams, useHistory } from 'react-router-dom'
import { projects } from '../../Data/projectData'
import ImageGallery from './ImageGallery';

function FullProjectDetail(){

    const { projectId } = useParams()
    const history = useHistory()

    const project = projects.find( p => p.id === parseInt(projectId))

    const renderTechs = project?.techs.map( t => {
        return <p className='p-2 bg-black text-white w-fit text-xs' key={t}>{t}</p>
    })

    return ( 
    <div className='pt-[10vh] min-h-screen max-w-[750px] m-auto flex flex-col gap-4 px-5'>
       
       <button onClick={()=>history.goBack()} className='underline mt-[3vh] text-xs text-left'>back</button>
        <p className='text-center text-lg '>{project?.title}</p>

        <ImageGallery images={project?.images}/>
        
        <p>{project?.description}</p>

        <div className='flex flex-wrap gap-2 '>
            {renderTechs}
        </div>

        <div className='flex place-content-end gap-5 text-xs font-bold underline px-5'>
            <a href={project?.demo}>DEMO</a>
            <a href={project?.git}>CODE</a>
        </div>

    </div> );
}

export default FullProjectDetail;