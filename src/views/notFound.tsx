import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import content from "../_content";

const NotFound = () => {
    const { title } = content.notFound;

    return (
        <Card>
            <CardHeader>
                <h1>{title}</h1>
            </CardHeader>
            <CardBody>
                <p>
                    The page you're looking for was not found! Check the URL, or
                    click <Link to="/">here</Link> to go to my about page.
                </p>
            </CardBody>
            <CardFooter>
                <p
                    dangerouslySetInnerHTML={{ __html: content.copyrightText }}
                ></p>
            </CardFooter>
        </Card>
    );
};

export default NotFound;
