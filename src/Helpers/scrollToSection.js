function scrollToSection(sectionId){
    const section = document.getElementById(sectionId.toLowerCase());
    section.scrollIntoView({ behavior: 'smooth' });
}

export default scrollToSection;