import { forwardRef } from 'react';
import FadeInText from '../Shared/FadeInText/FadeInText';
import './Introduction.css';

const Introduction = forwardRef((props, ref) => {
    return (
    <div ref={ref} className="introduction">
        <FadeInText component='h1' className='heading fade-in' delay={1000}>Anni Mustonen</FadeInText>
        <p className='introduction-text'>
            ICT student graduating in 2026 with a passion for problem-solving and continuous learning.
            I have a degree in biomedical laboratory science and experince working in the central laboratory of a university hospital, doing shift work.
            <br></br>
            <br></br>
            I'm looking for a intership or entry-level position in software development.
        </p>
    </div>
    )
});

export default Introduction;