function ProjectDetail({toggle, project}) {
    return ( 
    <div className={
        `${!toggle && 'hidden'} h-[100%] w-[100%] bg-black opacity-[90%] absolute  top-0 z-10 text-white font-bold p-5 text-xs`
        // `${!toggle && 'hidden'} fixed top-[50%]  left-[50%] -translate-y-[50%] -translate-x-[50%] h-[95vh] w-[95vw] z-30 bg-black opacity-80 text-white font-bold rounded-3xl`
        
        }>
        <p>{project.title}</p>
        <p>{project.description}</p>
    </div> 
    );
}

export default ProjectDetail;