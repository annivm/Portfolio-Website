import Button from '../Shared/Button/Button';
import './NavBar.css';

const NavBar = ({ onIntro, onExp, onEdu, onProj, onContact }) => {
    return(
        <div className="navbar">
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