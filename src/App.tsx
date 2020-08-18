import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from "reactstrap";
import classNames from "classnames";
import routes from "./routes";
import content from "./_content";
import * as profilePicture from "./assets/profile.JPG";
import "./App.scss";

const App = () => (
    <Container>
        <Row>
            <Col lg="3" md="4">
                <Card>
                    <img src={profilePicture} alt="Profile Picture" />
                    <CardHeader tag="heading" id="heading">
                        <h1>Reece Russell</h1>
                        <h3>Software Developer</h3>
                    </CardHeader>
                    <CardBody id="socials">
                        <div className="r-social-links">
                            {content.socials.map((item, key) => (
                                <a href={item.url} title={item.title} key={key}>
                                    <i
                                        className={classNames("lab", item.icon)}
                                    />
                                </a>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="9" md="8">
                <nav className="r-shadow">
                    <ul>
                        <li className="active">
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Resume</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                    </ul>
                </nav>

                <Router>
                    <Switch>
                        <Suspense fallback={<p>Loading...</p>}>
                            {routes.map((route, key) => (
                                <Route {...route} key={key} />
                            ))}
                        </Suspense>
                    </Switch>
                </Router>
            </Col>
        </Row>
    </Container>
);

export default App;
