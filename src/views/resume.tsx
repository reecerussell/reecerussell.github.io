import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import content from "../_content";

const Resume = () => {
    const { title, education, experience } = content.resume;

    return (
        <Card>
            <CardHeader>
                <h2>{title}</h2>
            </CardHeader>
            <CardBody id="resume">
                <div className="rounded-icon">
                    <i className="las la-graduation-cap"></i>
                </div>
                <div className="resume-items">
                    {education.map((item, key) => (
                        <div className="resume-item" key={key}>
                            <h2>{item.title}</h2>
                            <span className="date">
                                {item.date.start} - {item.date.finish}
                            </span>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="rounded-icon">
                    <i className="las la-briefcase"></i>
                </div>
                <div className="resume-items">
                    {experience.map((item, key) => (
                        <div className="resume-item" key={key}>
                            <h2>{item.title}</h2>
                            <span className="date">
                                {item.date.start} - {item.date.finish}
                            </span>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </CardBody>
            <CardFooter>
                <p
                    dangerouslySetInnerHTML={{ __html: content.copyrightText }}
                ></p>
            </CardFooter>
        </Card>
    );
};

export default Resume;
