import React from 'react';
import './style.css'
import ProjectDetail from '../ProjectDetail';

function Project(props){
    return (
        <>
        <div className='card project-card'>
            <div className='card-body content'>
                <h4 className='card-title title'>{props.title}</h4>
                <p className='card-text caption'>{props.caption}</p>
                <button href="#" className='btn btn-info'>View</button>    
            </div>
        </div>
        </>
    )
}

export default Project;