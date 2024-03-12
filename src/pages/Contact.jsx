import {react, useState } from 'react';
import './pages.css';
import 'font-awesome/css/font-awesome.min.css';

function Contact(){

    const [ visitorName, setVisitorName ] = useState('');
    
    return(
        <form className='contactForm'>
            <h3>Contact Me</h3>
            <div className='mx-5'>
                <input type="text" className='form-control my-3' id='visitornName' placeholder='Your name please' required/>                              
                <input type="email" className="form-control mb-3" id="visitorEmail" placeholder="Enter your email id" required/>
                <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder='Type your message here' required></textarea>
                <button type="submit" class="btn btn-secondary mb-3" id='submitBtn' >Send Message</button>
            </div> 
            <footer className='socialButtons mt-3'> 
                <a className='btn btn-primary py-1 px-2 mx-3' href="https://www.linkedin.com/in/shalini-sunkuru/" target='_blank'>
                    <i className='fa fa-linkedin-square'></i>
                </a>
                <a className='btn btn-dark py-1 px-2 mx-3' href="https://github.com/ShaliniSunkuru/" target='_blank'>
                    <i className='fa fa-github'></i>
                </a>
                <a className='btn btn-info py-1 px-2 mx-3' href="mailto:shalini.sunkuru@gmail.com" target='_blank'>
                    <i className='fa fa-envelope'></i>
                </a>

            </footer> 
        </form>
    )
}

export default Contact;