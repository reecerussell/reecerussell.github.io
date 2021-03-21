import classNames from "classnames";
import React, { FunctionComponent } from "react";
import { Card, CardHeader, CardBody, CardFooter, Row, Col } from "reactstrap";
import { setTitle } from "../utils/page";
import content from "../_content";

const Projects: FunctionComponent = () => {
    const { title, items: projects } = content.projects;
    setTitle(title);

    return (
        <Row id="projects">
            {projects.map((project, key) => (
                <Col
                    md="6"
                    lg="4"
                    key={key}
                    className={classNames({
                        "pt-3": key > 0,
                        "pt-md-0": key === 1,
                        "pt-lg-0": key === 2,
                        "pt-xl-0": key < 3,
                    })}
                >
                    <Card className="h-100">
                        <CardHeader>
                            <h4>{project.name}</h4>
                        </CardHeader>
                        <CardBody>{project.description}</CardBody>
                        <CardFooter>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View source
                            </a>
                            <div className="float-right">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        className="badge badge-secondary"
                                        key={idx}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Projects;
