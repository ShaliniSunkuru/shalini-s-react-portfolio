import {react, useState } from 'react';
import './pages.css';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../components/Footer';


function Contact(){

    const [ formData, setFormData ] = useState({
        visitorName: '',
        visitorEmail: '',
        message: ''
    });
    
    const handleInputChange = (event) => {
        //setting variables name and value to event.target.name and event.target.value
        //i.e, getting the name and value of input which triggered change
        const {name, value} = event.target;

        //set formData to current values
        setFormData({
            // copy of object - formData
            ...formData,
            [name]: value,
        });
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert(
            `Hello ${formData.visitorName}! Glad to meet you! I am sorry this functianlity is under progess! Please use the email button below to send me a message!`
        );
        
    }
    return(
        <div>   
            <h3>Contact Me</h3>
            <form className='contactForm  mx-5'>
                <input
                    type="text" 
                    className='form-control my-3' 
                    id='visitornName' 
                    placeholder='Your name please' 
                    required
                    name='visitorName'
                    value={formData.visitorName}
                    onChange={handleInputChange}
                />  
                <div className='valid-feedback'>Valid</div>
                <div className='invalid-feedback'>Invalid</div>                            
                <input 
                    type="email" 
                    className="form-control mb-3" 
                    id="visitorEmail" 
                    placeholder="Enter your email id" 
                    required
                    name='visitorEmail'
                    value={formData.visitorEmail}
                    onChange={handleInputChange}
                />
                <textarea 
                    className="form-control mb-3" 
                    id="message" 
                    rows="3" 
                    placeholder='Type your message here' 
                    required
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                ></textarea>
                <button 
                    type="submit" 
                    className="btn btn-secondary mb-3" 
                    id='submitBtn'
                    onClick={handleFormSubmit}
                >
                    Send Message
                </button>
            </form>         
        <Footer></Footer>

        </div>
        
    )
}

export default Contact;