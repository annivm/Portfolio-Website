import { forwardRef } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import FadeInText from '../Shared/FadeInText/FadeInText';


import './Education.css';


const Education = forwardRef((props, ref) => {

    return (
        <div ref={ref} className="education-box">
            <h1 className="heading">Education</h1>

            <Timeline position='alternate'>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ color: 'var(--secondary)'}}>
                        2023 - Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        ICT Engineer
                        <FadeInText className='timeline-text' delay={300}>
                            Tampere University of Applied Sciences
                            <br/>
                                199/240 ETCs
                        </FadeInText>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ color: 'var(--secondary)'}}>
                        2016 - 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Biomedical Laboratory Scientist
                        <FadeInText className='timeline-text' delay={300}>
                            Tampere University of Applied Sciences
                            <br/>
                            Graduated
                        </FadeInText>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ color: 'var(--secondary)'}}>
                        2012 - 2015
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        General Upper Secondary School
                        <FadeInText className='timeline-text' delay={300}>
                            Järvenpään lukio
                            <br/>
                            Graduated
                        </FadeInText>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>

        </div>
    )
});

export default Education;