import { forwardRef } from 'react';
import './Projects.css';

const Projects = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="box">
            <h1 className="heading">Projects</h1>
        </div>
    )
});

export default Projects;