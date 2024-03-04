import React from "react";
import './style.css'


function ProjectGallery(props){
    return (
        <div className="gallery">{props.children}</div>
    )
}

export default ProjectGallery;