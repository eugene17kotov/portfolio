import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';
// import { BrowserRouter as Router } from 'react-router-dom';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = 'Full Stack Developer';
    const period = 2000;

    useEffect(() => {
        const tick = () => {
            let updatedText = isDeleting
                ? toRotate.substring(0, text.length - 1)
                : toRotate.substring(0, text.length + 1);

            setText(updatedText);

            if (isDeleting) {
                setDelta(prevDelta => prevDelta / 2);
            }

            if (!isDeleting && updatedText === toRotate) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setDelta(500);
            }
        };

        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, delta, isDeleting]);

    return (
        // <Router>
            <section className="banner" id="home">
                <Container>
                    <Row className="aligh-items-center">
                        <Col xs={10} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible ? 'animate__animated animate__fadeIn' : ''
                                        }
                                    >
                                        <span className="tagline">Welcome to my Portfolio</span>
                                        <h1>
                                            {`Hi! I am Yevhenii, `}
                                            <span className="txt-rotate">{text}</span>
                                        </h1>
                                        <p>
                                            With a passion for crafting innovative and user-centric
                                            web applications, I thrive on transforming complex ideas
                                            into intuitive digital experiences. By leveraging my
                                            extensive knowledge of front-end and back-end
                                            technologies, I deliver high-quality solutions that
                                            drive business growth and user engagement. From
                                            developing scalable server-side systems to creating
                                            seamless user interfaces, I am committed to delivering
                                            exceptional results that exceed expectations. Let's
                                            embark on a journey of cutting-edge development
                                            together.
                                        </p>
                                        <HashLink to="#connect">
                                            <button>
                                                Let’s Connect <ArrowRightCircle size={25} />
                                            </button>
                                        </HashLink>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible ? 'animate__animated animate__zoomIn' : ''
                                        }
                                    >
                                        <img src={headerImg} alt="Header Img" />
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
        // </Router>
    );
};
