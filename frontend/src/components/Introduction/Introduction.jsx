import { forwardRef } from 'react';
import FadeInText from '../Shared/FadeInText/FadeInText';
import './Introduction.css';

const Introduction = forwardRef((props, ref) => {
    return (
    <section ref={ref} className="introduction">
        <section className='introduction-section'>
            <FadeInText component='h1' className='heading fade-in' delay={1000}>Anni Mustonen</FadeInText>
            <img src="/images/Mustonen_Anni_sq.png" alt="Anni Mustonen" className="introduction-image" />
        </section>
        <p className="introduction-text">
            ICT student graduating in 2026 with a background in biomedical laboratory science.
            I have hands-on experience from healthcare IT operations and practical coding experience gained through studies and projects, focusing on web development with React, Node.js, and SQL databases.
            <br />
            <br />
           I'm seeking a junior or entry-level software developer role.
        </p>
    </section>
    )
});

export default Introduction;