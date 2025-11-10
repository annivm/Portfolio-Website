import { forwardRef, useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


import './Education.css';

const Education = forwardRef((props, ref) => {

    const [isHovered, setIsHovered] = useState(null);

    return (
        <div ref={ref} className="box">
            <h1 className="heading">Education</h1>

            <Timeline position='alternate'>
                <TimelineItem
                    onMouseEnter={() => setIsHovered(0)}
                    onMouseLeave={() => setIsHovered(null)}
                >
                    <TimelineOppositeContent sx={{ color: 'var(--secondary)'}}>
                        2023 - Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        ICT Engineer
                        <p className={`timeline-text ${isHovered === 0 ? 'hovered' : ''}`}>
                            Tampere University of Applied Sciences
                            <br/>
                                199/240 ETCs
                        </p>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem
                    onMouseEnter={() => setIsHovered(1)}
                    onMouseLeave={() => setIsHovered(null)}
                >
                    <TimelineOppositeContent sx={{ color: 'var(--secondary)'}}>
                        2016 - 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Biomedical Laboratory Scientist
                        <p className={`timeline-text ${isHovered === 1 ? 'hovered' : ''}`}>
                            Tampere University of Applied Sciences
                            <br/>
                            Graduated
                        </p>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem
                    onMouseEnter={() => setIsHovered(2)}
                    onMouseLeave={() => setIsHovered(null)}
                >
                    <TimelineOppositeContent sx={{ color: 'var(--secondary)'}}>
                        2012 - 2015
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        General Upper Secondary School
                        <p className={`timeline-text ${isHovered === 2 ? 'hovered' : ''}`}>
                            Järvenpään lukio
                            <br/>
                            Graduated
                        </p>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>

        </div>
    )
});

export default Education;