// import ScrollAnimation from "react-animate-on-scroll";

function SkillCard({skill}) {
    
    
    return ( 
        <div

        >
            <div className='bg-black p-3 h-[100px] min-w-[100px] sm:h-[200px] sm:min-w-[200px] w-fit grid place-content-center'>
                <img className='h-[5vh]' alt='skill' src={skill.logo} />
                <p className='text-white text-center'>{skill.name}</p>
            </div> 
           
        </div>
    );
}

export default SkillCard;