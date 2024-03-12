import React from "react";
import './style.css';

function Footer(){
    return (
        <footer className='socialButtons mt-3'> 
            <a className='btn btn-primary py-1 px-2 mx-3' href="https://www.linkedin.com/in/shalini-sunkuru/" target='_blank'>
                <i className='fa fa-linkedin-square'></i>
            </a>
            <a className='btn btn-dark py-1 px-2 mx-3' href="https://github.com/ShaliniSunkuru/" target='_blank'>
                <i className='fa fa-github'></i>
            </a>
            <a className='btn btn-info py-1 px-2 mx-3' id="mailBtn" href="mailto:shalini.sunkuru@gmail.com" target='_blank'>
                <i className='fa fa-envelope'></i>
            </a>
            <a className='btn btn-info py-1 px-2 mx-3' id="wordpressBtn" href="https://awordsmithsbreath.wordpress.com/" target='_blank'>
                <i className='fa fa-wordpress'></i>
            </a>
        </footer> 
    )
}

export default Footer;
