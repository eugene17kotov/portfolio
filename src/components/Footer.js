import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import telegramIcon from '../assets/img/telegram.svg';
import linkedinIcon from '../assets/img/linkedin.svg';
import facebookIcon from '../assets/img/facebook.svg';
import instagramIcon from '../assets/img/instagram.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
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
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
