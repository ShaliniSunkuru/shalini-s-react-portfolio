import projectData from '../projects.json';
import Project from '../components/Project';
import ProjectGallery from '../components/ProjectGallery';
import './pages.css';

function Projects(){
    
    return(
        <div className='page'>
            <ProjectGallery>
                {projectData.map(project => (
                    <Project 
                        id={project.id}
                        key={project.id}
                        title={project.title}
                        caption={project.caption}
                        description={project.description}
                        image={project.image}
                        github={project.github}
                        live={project.live}
                    />
            ))}       
            </ProjectGallery>
            
        </div>
    )
}

export default Projects;