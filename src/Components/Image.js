import { useState } from "react";

function Image({src}) {
    
    const [ loaded, setLoaded ] = useState(false)
    
    function toggleLoaded(){
        setLoaded(!loaded)
    }
    
    return ( 
        <div className='aspect-video'>
            <img onLoad={toggleLoaded} alt='bird' src={src} className={`${!loaded ? 'invisible':'visible'} object-cover border bg-slate-100 border-black animate-fade-in grayscale`} />
        </div>

     );
}

export default Image;