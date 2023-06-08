import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import telegramIcon from '../assets/img/telegram.svg';
import linkedinIcon from '../assets/img/linkedin.svg';
import facebookIcon from '../assets/img/facebook.svg';
import instagramIcon from '../assets/img/instagram.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = value => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
                <Container>
                    <Navbar.Brand href="/" className="navbar-link">
                        <img src={logo} alt="Portfolio" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="#home"
                                className={
                                    activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                                }
                                onClick={() => onUpdateActiveLink('home')}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={
                                    activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                                }
                                onClick={() => onUpdateActiveLink('skills')}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={
                                    activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
                                }
                                onClick={() => onUpdateActiveLink('projects')}
                            >
                                Projects
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://t.me/eugene17kotov"
                                >
                                    <img src={telegramIcon} alt="telegram icon" />
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/yevhenii-kobets/"
                                >
                                    <img src={linkedinIcon} alt="linkedin icon" />
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.facebook.com/profile.php?id=100007590557241"
                                >
                                    <img src={facebookIcon} alt="facebook icon" />
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.instagram.com/eugene17kotov/"
                                >
                                    <img src={instagramIcon} alt="instagram icon" />
                                </a>
                            </div>
                            <HashLink to="#connect">
                                <button>
                                    <span>Let’s Connect</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
