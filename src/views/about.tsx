import React from "react";
import { Row, Col, Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import classNames from "classnames";
import content from "../_content";

const About = () => {
    const { title, info, body, skills, services } = content.about;
    document.title = title + " | " + content.meta.baseTitle;

    const halfLengthOfSkills = Math.ceil(skills.length / 2);
    const firstHalf = skills.slice(0, halfLengthOfSkills);
    const secondHalf = skills.slice(halfLengthOfSkills);

    return (
        <Card>
            <CardHeader>
                <h1>{title}</h1>
            </CardHeader>
            <CardBody>
                <ul className="r-info-list">
                    {info.map((item, key) => (
                        <li key={key}>
                            <span>{item.name} :</span> {item.value}
                        </li>
                    ))}
                </ul>
            </CardBody>
            <CardBody
                className="text"
                dangerouslySetInnerHTML={{
                    __html: `<h3>${body.header}</h3>${body.text}`,
                }}
            ></CardBody>
            <CardBody className="grey skill-list">
                <Row>
                    <Col md="6">
                        <ul className="skills">
                            {firstHalf.map((item, key) => (
                                <li key={key}>
                                    <h4>{item.title}</h4>
                                    <div className="progress">
                                        <div
                                            className="percentage"
                                            style={{
                                                width: item.progress + "%",
                                            }}
                                        ></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col md="6">
                        <ul className="skills">
                            {secondHalf.map((item, key) => (
                                <li key={key}>
                                    <h4>{item.title}</h4>
                                    <div className="progress">
                                        <div
                                            className="percentage"
                                            style={{
                                                width: item.progress + "%",
                                            }}
                                        ></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </CardBody>
            <CardBody className="no-border" id="services">
                <Row>
                    {services.map((service, key) => (
                        <Col md="4" sm="6" key={key}>
                            <i className={classNames("las", service.icon)} />
                            <span>
                                <b>{service.header}</b>
                                <p>{service.description}</p>
                            </span>
                        </Col>
                    ))}
                </Row>
            </CardBody>
            <CardFooter>
                <p
                    dangerouslySetInnerHTML={{ __html: content.copyrightText }}
                ></p>
            </CardFooter>
        </Card>
    );
};

export default About;
