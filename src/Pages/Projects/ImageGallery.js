import { useState } from 'react'

function ImageGallery({images, cardSelected, toggleCardSelected}) {


    const [ selectedImage, setSelectedImage ] = useState(images[0].image)

    const renderSmallImages = images.map( i =>{
        return <button key={i.id} onClick={()=>setSelectedImage(i.image)}> <img className={`h-[30px] sm:h-[50px] border-white border-2 hover:animate-scale-large`} alt={i.id} src={i.image} /></button>
    })

    function close(){
        setSelectedImage(images[0].image)
        toggleCardSelected()
    }

    return ( 
        <div className='flex flex-col gap-2 m-auto '>

            <img onClick={close} alt='large' className={`max-h-[40vh] w-full m-auto border-white border-2 ${!cardSelected && 'grayscale hover:animate-scale-up'} hover:cursor-pointer `}  src={selectedImage} />

            <div className='flex flex-wrap px-5 gap-2 m-auto '>
                {renderSmallImages}
            </div>

        </div>
     );
}

export default ImageGallery