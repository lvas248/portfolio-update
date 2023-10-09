import { skills } from '../../Data/skillsData'
import SkillCard from './SkillCard';

function Skills() {

    const renderSkills = skills.map( s => {
        return <SkillCard key={s.id} skill={s} />
    })


    return ( 
        <div id='skills'
            className='py-[10vh] relative '
        >
            <div className='banner'>SKILLS</div>

            <div className='p-[5vh] max-w-[1050px] m-auto flex flex-wrap gap-4 place-content-center'>

               
                {renderSkills}
                    
            </div>
         
        </div>
     );
}

export default Skills;