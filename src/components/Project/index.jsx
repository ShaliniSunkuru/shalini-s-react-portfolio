import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function Project(props){
    return (
        <>
        <div className='card project-card'>
            <Link to={`/projects/${props.id}`} >
                <img class="card-img-top project-image" src={props.image} alt={props.title} />
            </Link>
            <div className='card-body content'>
                <h5 className='card-title title'>{props.title}</h5>
                <p className='card-text caption'>{props.caption}</p>
                <a href={props.github} class="card-link">Github</a>
                <a href={props.live} class="card-link">Live Project</a>                  
            </div>
        </div>
        </>
    )
}

export default Project;