import React from "react";
import "./home.css";
import {Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"; // Import the faGithub icon

export default function Home() {
    return (
        <>
            <div className="home">
                {/* <img className="home-bg" src='/images/Neon-Background.jpg' alt=""/> */}
                <Container>
                    <Row>
                        <div className="home-top">
                        <h1 className="name-header">Spencer Lott</h1>

                            <div className="img-container">
                                <img className="profile-img" src="/images/Spencer-Lott-Headshot-Copy-SQ.jpeg" alt="no image"/>
                            </div>
                            
                        </div>
                    </Row>
                    <Row>
                        <div className="info-bar">
                            <div className="info-bar-details">
                                <h2>Junior Full-Stack Developer</h2>
                                <div>
                                    <h3 className="h3-details">Huntington-Charleston, WV area |
                                        <a href="https://github.com/spencer-lott" style={{color: "#000"}}><FontAwesomeIcon icon={faGithub}/> Github </a> |
                                        <a href="https://www.linkedin.com/in/spencer-k-lott/"><FontAwesomeIcon icon={faLinkedin}/>
                                            LinkedIn</a>
                                    </h3>
                                </div>
                            </div>
                        </div>

                    </Row>
                </Container>
            </div>
        </>
    );
}


{ /* <div className="ui container observer"></div> */
} { /* <div class="ui container">
                <div class="ui grid">
                    <div class="row">
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                        <div class="column"><button class="ui fluid button">Button</button></div>
                    </div>
                </div>
            </div> */
}
