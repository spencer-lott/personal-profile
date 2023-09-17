import React from "react";
import "./home.css";
import { Col, Container, Row } from "reactstrap";

export default function Home() {
    return (
        <>
        <div className="home">
            {/* <img className="home-bg" src='/images/Neon-Background.jpg' alt=""/> */}
            <Container>
                <Row>
                    <div className="home-top">
                        <div className="col1">
                            <h1>Spencer Lott</h1>
                            <h2>Junior Full-Stack Developer</h2>
                            <h3>Huntington-Charleston, WV area</h3>
                         </div>
                         <div className="col2">
                            <img className="profile-img" src="/images/Spencer-Lott-Headshot-Copy-SQ.jpeg" alt="no image" />
                         </div>
                    </div>
                </Row>
            </Container>
        </div>
        </>
    );
}



            {/* <div className="ui container observer"></div> */}
            {/* <div class="ui container">
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
            </div> */}
