import { forwardRef } from 'react';
import { MdOutlineTaskAlt } from "react-icons/md";
import ExpandableCard from '../Shared/ExpandableCard/ExpandableCard';
import './Experience.css';

const Experience = forwardRef((props, ref) => {

    return (
        <div ref={ref} className="exp-box">
            <h1 className="exp-heading">Experience</h1>
            <div className='exp-section'>
                <ExpandableCard title="IT Trainee" period="5/2025 - Current (Fixed-term 04/2026)" company="Fimlab Laboratoriot Oy">
                    <p>Working as an IT trainee at Fimlab Laboratoriot Oy, gaining hands-on experience in IT operations within a healthcare laboratory.</p>
                    <p>Initially hired as a summer trainee, the contract extended for autumn and again for spring based on performance and company needs.</p>
                    <p className='list-text'>
                    <MdOutlineTaskAlt /> Worked as part of a large-scale system renewal project<br/>
                    <MdOutlineTaskAlt /> Participated in the customer account transition team<br/>
                    <MdOutlineTaskAlt /> User management<br/>
                    <MdOutlineTaskAlt /> IT Support tasks
                    </p>
                </ExpandableCard>

                <ExpandableCard title="Biomedical Laboratory Scientist" period="12/2019 - Current (Permanent position, currently on study-leave)" company="Fimlab Laboratoriot Oy">
                    <p>Worked as a biomedical laboratory scientist in hematology department at Fimlab Laboratoriot Oy, Finland's largest medical laboratory service provider.</p>
                    <p className='list-text'>
                    <MdOutlineTaskAlt /> 24/7 Laboratory work in central laboratory<br/>
                    <MdOutlineTaskAlt /> CBC & body fluid analysis, Differential count<br/>
                    <MdOutlineTaskAlt /> Blood sampling, EKG, patient service<br/>
                    <MdOutlineTaskAlt /> Quality control and maintenance of laboratory equipment
                    </p>
                </ExpandableCard>
            </div>
        </div>
    )
});

export default Experience;