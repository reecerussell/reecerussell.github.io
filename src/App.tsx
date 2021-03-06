import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import classNames from "classnames";
import routes from "./routes";
import content from "./_content";
import * as profilePicture from "./assets/profile.JPG";
import Navigation from "./components/navigation";
import MobileNavigation from "./components/mobile-navigation";

const App = () => (
    <Router>
        <MobileNavigation />
        <Container>
            <Row>
                <Col lg="3" md="4">
                    <Card id="profile">
                        <img src={profilePicture} alt="Reece Russell" />
                        <CardHeader tag="header" id="heading">
                            <h2>Reece Russell</h2>
                            <h4>Software Developer</h4>
                        </CardHeader>
                        <CardBody id="socials">
                            <div className="r-social-links">
                                {content.socials.map((item, key) => (
                                    <a
                                        href={item.url}
                                        title={item.title}
                                        key={key}
                                    >
                                        <i
                                            className={classNames(
                                                "lab",
                                                item.icon
                                            )}
                                        />
                                    </a>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="9" md="8">
                    <Navigation />

                    <Switch>
                        <Suspense fallback={<p>Loading...</p>}>
                            {routes.map((route, key) => (
                                <Route {...route} exact key={key} />
                            ))}
                        </Suspense>
                    </Switch>
                </Col>
            </Row>
        </Container>
    </Router>
);

export default App;
