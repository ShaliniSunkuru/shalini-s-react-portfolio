import './pages.css';

const styles ={
    image: {
        width: '200px',
        height: '220px',
        border: '1px solid black',
        borderRadius: '50%'
    },
    text: {
        lineHeight: '2',
        fontSize: '1.1rem'
    }
}
function About(){
    return(
        <div className='page'>
            <h4>Hello! I am Shalini, an enthusiastic web developer!</h4>
            <img style={styles.image} src="/images/Shalini.jpeg" alt="profile picture" />
            
            <p style={styles.text} > 
                I am a qualified Bachelor of Technology in Manufacturing Engineering.<br/>
                I started my career as a software developer in C# .Net and SAP ABAP.<br/> 
                I am currently enjoying an intensive bootcamp in frontend web development technologies so that I can pursue my interest in web development.<br/>
                I am leveraging my skills in HTML, CSS, Bootstrap, Javascript, JQuery, Node.js, React.<br/>
                I am passionate about writing and have experience in content creation and technical writing. <br/>
                I have a few of my poems and haiku published in various magazeines and e-zines.<br/>
                I am trained in Indian (Carnatic) Classical music.<br/>
            </p>
        
        </div>
    )
}

export default About;