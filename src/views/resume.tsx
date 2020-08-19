import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

const Resume = () => (
    <Card>
        <CardHeader>
            <h2>My Resume</h2>
        </CardHeader>
        <CardBody id="resume">
            <div className="rounded-icon">
                <i className="las la-graduation-cap"></i>
            </div>
            <div className="wrapper">
                <div className="resume-item">
                    <h2>Level 4 Diploma Software Languages</h2>
                    <span className="date">2018 - 2019</span>
                    <p>Some information about this course.</p>
                </div>
            </div>
        </CardBody>
    </Card>
);

export default Resume;
