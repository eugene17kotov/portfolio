import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';

const skillsList = [
    { skill: 'JavaScript', image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
    { skill: 'Node.JS', image: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
    { skill: 'React', image: 'https://cdn-icons-png.flaticon.com/512/1183/1183621.png' },
    { skill: 'Redux', image: 'https://i.ibb.co/0cj9MGy/redux.png' },
    { skill: 'TypeScript', image: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' },
    { skill: 'MongoDB', image: 'https://i.ibb.co/54yxf1R/mongodb.png' },
    { skill: 'MySQL', image: 'https://i.ibb.co/jvtwpC4/mysql.png' },
    { skill: 'Webpack', image: 'https://i.ibb.co/BBxMQQS/webpack.png' },
    { skill: 'HTML5', image: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png' },
    { skill: 'CSS3', image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
    { skill: 'Git', image: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png' },
];

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                I have an analytical, detail-focused mind, but I always look at the
                                big picture.<br></br> Below you can see an example of my skills and
                                I have no limit to their acquisition.
                            </p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                {skillsList.map(({ skill, image }) => (
                                    <div key={skill} className="item">
                                        <img src={image} alt={skill} />
                                        <h5>{skill}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="background gradient" />
        </section>
    );
};
