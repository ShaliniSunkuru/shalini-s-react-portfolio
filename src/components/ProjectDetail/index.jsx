import { useParams } from 'react-router-dom';
import projects from '../../projects.json';


function ProjectDetail(){
    const {id} = useParams();
    console.log(id);
    const currentProject = projects.filter((project) => project.id == id ? project : null);
    console.log(projects);
    console.log(currentProject);
    return( 
        
        <div>
            This is project {id}
        </div>
    )
}

export default ProjectDetail;