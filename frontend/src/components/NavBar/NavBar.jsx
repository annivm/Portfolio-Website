import { useEffect, useState } from 'react';
import Button from '../Shared/Button/Button';
import './NavBar.css';

const NavBar = ({ onIntro, onExp, onEdu, onProj, onContact }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect( () => {
        const handleScroll = () => setIsSticky(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
    })

    return(
        <div className={`navbar ${isSticky ? 'is-sticky' : ''}`}>
            <Button size="big" onClick={onIntro}>
                Introduction
            </Button>
            <Button size="big" onClick={onExp}>
                Experience
            </Button>
            <Button size="big" onClick={onEdu}>
                Education
            </Button>
            <Button size="big" onClick={onProj}>
                Projects
            </Button>
            <Button size="big" onClick={onContact}>
                Contact
            </Button>
        </div>
    )
}

export default NavBar;