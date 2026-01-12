import { forwardRef } from 'react';
import { FaGithub } from "react-icons/fa";
import './Projects.css';
import '../Experience/Experience.css';
import ExpandableCard from '../Shared/ExpandableCard/ExpandableCard';
import ImageCarousel from '../Shared/ImageCarousel/ImageCarousel';

const Projects = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="project-box">
            <h1 className="project-heading">Projects</h1>
            <section className='project-section'>
                <ExpandableCard title="Coming soon" description="Stay tuned"></ExpandableCard>
                <ExpandableCard title="Marketplace application" description="Fullstack project - Knit&Sell" other="School project">
                    <p>A fullstack web application for buying and selling handmade items. The application consists of a frontend built with React, a backend built with Node.js and Express and a database using PostgreSQL. Images are uploded to Cloudinary.</p>
                    <br />
                    <p>This project not only taught me fullstack development but also how to dockerize the application, build pipelines and deploy it to production.</p>
                    <br />
                    <a
                        href="https://github.com/annivm/knit-and-sell"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub />
                        Check it on GitHub
                    </a>
                    <br />
                    <ImageCarousel project="knitandsell"/>
                </ExpandableCard>
                <ExpandableCard title="Coming soon" description="Stay tuned"></ExpandableCard>
                <ExpandableCard title="Portfolio Website" description="Personal portfolio website built with React and CSS" other="Personal project">
                    <p>This is the portfolio website you are currently viewing. Started as a personal project to showcase my skills and projects.</p>
                    <br />
                    <p>The website is built with React and CSS, focusing on responsive design and user experience.</p>
                    <br />
                    <p>This project was fun but also educational as I experimented with my visions and learned how to implement them.</p>
                    <br />
                    <a
                        href="https://github.com/annivm/Portfolio-Website"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub />
                        Check it on GitHub
                    </a>
                </ExpandableCard>
            </section>
        </div>
    )
});

export default Projects;