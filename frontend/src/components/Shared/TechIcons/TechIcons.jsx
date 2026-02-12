import { React, NodeJs, Figma, ExpressJsLight, PostgreSQL, Cloudinary, JavaScript, TypeScript, Kotlin, Android, Java } from "developer-icons";
import './TechIcons.css';

const TechIcons = ({ tech = [] }) => {

    const icons = {
        React,
        TypeScript,
        JavaScript,
        NodeJs,
        ExpressJsLight,
        PostgreSQL,
        Cloudinary,
        Figma,
        Kotlin,
        Android,
        Java
    }

    return (
        <section>
            <p>Technologies used:</p>
            {/* Map through the tech array and render the icons */}
            <div className="tech-icons">
                {tech.map((name) => {
                    const Icon = icons[name];
                    return Icon ? <Icon key={name} size={32} /> : null;
                })}
            </div>
        </section>
    )
}

export default TechIcons;