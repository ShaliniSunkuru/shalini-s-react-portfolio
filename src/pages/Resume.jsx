import './pages.css';

function Resume(){
    return(
        <div className='page'>
                <object className="pdf" width="100%" height="600" data="/images/ShaliniSunkuru.pdf" type="application/pdf">Shalini's Resume</object>               
        </div>
    )
}

export default Resume;