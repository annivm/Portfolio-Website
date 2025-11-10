import { forwardRef } from 'react';
import './Experience.css';

const Experience = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="box">
            <h1 className="heading">Experience</h1>
        </div>
    )
});

export default Experience;