import { useState } from 'react'

function ImageGallery({images}) {

    const [ selectedImage, setSelectedImage ] = useState(images[0].image)
    
    const renderSmallImages = images.map( i =>{
        return <img onClick={()=>setSelectedImage(i.image)} className={`h-[30px] sm:h-[50px] border-white border-2 ${ selectedImage === i.image && 'border-red-600 border-2'}`} key={i.id} alt={i.id} src={i.image} />
    })

    return ( 
        <div className='flex flex-col gap-2 '>

            <div className='p-5 ' >
                <img alt='large' className='max-w-[750px] w-[100%] m-auto border-white border-2 '  src={selectedImage} />
            </div>

            
            <div className='flex flex-wrap px-5 gap-2 '>
                {renderSmallImages}
            </div>
        </div>
     );
}

export default ImageGallery