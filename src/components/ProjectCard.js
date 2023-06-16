import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, technologies, description, imgUrl, projectUrl }) => {
    return (
        <Col size={11} sm={6} md={4}>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <p>{technologies}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </Col>
    );
};
