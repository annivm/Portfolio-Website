import { forwardRef } from 'react';
import { FaGithub, FaFigma } from "react-icons/fa";
import './Projects.css';
import '../Experience/Experience.css';
import ExpandableCard from '../Shared/ExpandableCard/ExpandableCard';
import ImageCarousel from '../Shared/ImageCarousel/ImageCarousel';

const Projects = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="project-box">
            <h1 className="project-heading">Projects</h1>
            <section className='project-section'>
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
                <ExpandableCard title="Design project" description="Niitty website redesign" other="School project, teamwork">
                    <p>This is the course project for the design and accessibility course. </p>
                    <p>
                        The aim was to make a better version of an existing website with improved accessibility and design principles. (Original website:
                        <a
                            href="https://sites.tuni.fi/perheinfo/"
                            target="_blank"
                            rel="noopener noreferrer">
                            perheinfo.fi</a>)
                    </p>
                    <p>We had a actual customer for this and competed against other teams who also worked on the same project. At the end of the course, we presented our work for the customer and other teams, and voted for the best one. Ours won! </p>
                    <p>This was made with Figma. Along the process, we had meetings with the customer and got feedback and requests for improvements.</p>
                    <a
                        href="https://www.figma.com/proto/vxJ6OUat5h4qBHtblg1n0Y/NIITTY2?node-id=2006-2&t=J4lXsLztXXk8r4Kn-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFigma />
                        View sitemap draft on Figma (password: niitty)
                    </a>
                    <a
                        href="https://www.figma.com/proto/vxJ6OUat5h4qBHtblg1n0Y/NIITTY2?node-id=4-3&t=arX6qdsiEROYTyxk-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A2&starting-point-node-id=4%3A3"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFigma />
                        View desktop prototype on Figma (password: niitty)
                    </a>
                    <a
                        href="https://www.figma.com/proto/vxJ6OUat5h4qBHtblg1n0Y/NIITTY2?node-id=48-132&p=f&t=FBlSziF0ZANRKqE9-1&scaling=min-zoom&content-scaling=fixed&page-id=48%3A34&starting-point-node-id=48%3A132"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFigma />
                        View mobile prototype on Figma (password: niitty)
                    </a>
                    < br/>
                    <ImageCarousel project="niitty"/>
                </ExpandableCard>
                <ExpandableCard title="Coming soon" description="Stay tuned"></ExpandableCard>
            </section>
        </div>
    )
});

export default Projects;