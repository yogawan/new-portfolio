import { Link } from 'react-router-dom'

const FooterLayouts = () => {
    return (
        <footer>
            <div className='content'>
                <h3>About Me</h3>
                <hr />
                <p className='p'>
                    I have expertise in the field of art, since childhood I have had above average talent in drawing. Because I like computers. I decided to study Graphic Design. I have internship experience as a Graphic Design at a company in Klaten. I felt unsatisfied, so I finally learned Front-End Web Dev and UI Design.
                 </p>
            </div>
            <div className='content'>
                <h3>Links</h3>
                <hr />
                <li><Link to="/">Home</Link></li>
                <li><Link to="/certificate">Certificate</Link></li>
                <li><Link to="/project">Project</Link></li>
            </div>
            <div className='content'>
                <h3>Social</h3>
                <hr />
                <li><a href="https://github.com/yogawan">GitHub</a></li>
                <li><a href="https://g.dev/yogawan">GD Profile</a></li>
                <li><a href="#">Linkedin</a></li>
            </div>
            <div className='content'>
                <h3>Project</h3>
                <hr />
                <li><a href="#">Verdex</a></li>
                <li><a href="#">Akudav</a></li>
                <li><a href="#">JawirAI</a></li>
            </div>
        </footer>
    );
};

export default FooterLayouts;