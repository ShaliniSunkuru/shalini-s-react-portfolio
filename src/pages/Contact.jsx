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
        console.log(`${formData.visitorName} \n ${formData.visitorEmail} \n ${formData.message}`)
    }
    return(
        <div>
            <form className='contactForm'>
            <h3>Contact Me</h3>
            <div className='mx-5'>
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
            </div>         
        </form>

        <Footer></Footer>

        </div>
        
    )
}

export default Contact;