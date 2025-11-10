import { forwardRef } from 'react';
import './Education.css';

const Education = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="box">
            <h1 className="heading">Education</h1>
        </div>
    )
});

export default Education;