import { useParams } from 'react-router-dom';
import projects from '../../projects.json';
import './style.css';


function ProjectDetail(){
    const {id} = useParams();
    console.log(id);
    const currentProject = projects.filter((project) => project.id == id ? project : null);
    console.log(projects);
    const {title, description, image, github, live} = currentProject[0];
    console.log(currentProject[0]);
    return( 
        
        <div className='page'>
            <h1>{title}</h1>
            <p className='about'>{description}</p>
            <div className='screenshot-wrap'>
                <img className='screenshot' src={image} alt={`screenshot of ${title}`}/>
            </div>
            
            <div className='links'>
                <a href={github}>Visit github repository</a>
                <a href={live}>View live project</a>
            </div>

        </div>
    )
}

export default ProjectDetail;