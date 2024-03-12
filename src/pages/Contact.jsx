import {react, useState } from 'react';
import './pages.css';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../components/Footer';


function Contact(){

    const [ visitorName, setVisitorName ] = useState('');
    
    return(
        <div>
            <form className='contactForm'>
            <h3>Contact Me</h3>
            <div className='mx-5'>
                <input type="text" className='form-control my-3' id='visitornName' placeholder='Your name please' required/>                              
                <input type="email" className="form-control mb-3" id="visitorEmail" placeholder="Enter your email id" required/>
                <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder='Type your message here' required></textarea>
                <button type="submit" class="btn btn-secondary mb-3" id='submitBtn' >Send Message</button>
            </div>         
        </form>

        <Footer></Footer>

        </div>
        
    )
}

export default Contact;