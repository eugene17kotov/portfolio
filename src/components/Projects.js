import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import slimmom from '../assets/img/slimmom.avif';
import filmoteka from '../assets/img/filmoteka.avif';
import phonebook from '../assets/img/phonebook.avif';
import weather from '../assets/img/weather.avif';
import imageGenerator from '../assets/img/image-generator.avif';
import iceCream from '../assets/img/ice-cream.avif';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const projects = [
    {
        title: '🥦 Slim Mom 🍽',
        technologies: 'React, JSS, Node.JS',
        description:
            '- helps balancing diet for weight loss📉, store your nutrition🗒, advices you unwholesome group of food🛑🍔',
        imgUrl: slimmom,
        projectUrl: 'https://github.com/eugene17kotov/slimmom-app',
    },
    {
        title: '🎞 Filmoteka 📽',
        technologies: 'HTML, CSS, JavaScript',
        description:
            '- the best choice to figure out all one about movie which you interested in and latest news🗞 from the world of cinema✅',
        imgUrl: filmoteka,
        projectUrl: 'https://github.com/eugene17kotov/filmoteka',
    },
    {
        title: '📱 PhoneBook 📖',
        technologies: 'React, JSS',
        description: '- helps store and organize your contacts 📖',
        imgUrl: phonebook,
        projectUrl: 'https://github.com/eugene17kotov/phonebook',
    },
    {
        title: '🌦️ Weather 🌡️',
        technologies: 'HTML, CSS, JavaScript, Node.JS',
        description:
            '- a vanilla JS based weather app used a proxy on Node.js to access the weather API',
        imgUrl: weather,
        projectUrl: 'https://github.com/eugene17kotov/weather-app-js',
    },
    {
        title: '🖼️Image Generator🧠 ',
        technologies: 'Node.JS, Handlebars',
        description:
            '- image generator based on OpenAI power 🖥️, implemented with Node.js and a template engine Handlebars.js〰️',
        imgUrl: imageGenerator,
        projectUrl: 'https://github.com/eugene17kotov/ai-image-generator',
    },
    {
        title: '🍧IceCream 📃',
        technologies: 'HTML, CSS, JavaScript',
        description:
            '- a single page example of team website layout project used HTML5, SASS, vanilla JS and Parcel module bundler',
        imgUrl: iceCream,
        projectUrl: 'https://github.com/eugene17kotov/icecream',
    },
];

export const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={isVisible ? 'animate__animated animate__fadeIn' : ''}
                                >
                                    <h2>Projects</h2>
                                    <p>
                                        These projects highlight my versatility as a Full Stack
                                        Developer and demonstrate my ability to tackle diverse
                                        challenges while delivering high-quality solutions. Dive in
                                        and explore the showcase of my work, which showcases my
                                        commitment to crafting cutting-edge applications that
                                        combine seamless user experiences with robust functionality.
                                    </p>
                                    <Row>
                                        {projects.map((project, index) => {
                                            return <ProjectCard key={index} {...project} />;
                                        })}
                                    </Row>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img
                className="background-image-right"
                src={colorSharp2}
                alt="background gradient"
            ></img>
        </section>
    );
};
