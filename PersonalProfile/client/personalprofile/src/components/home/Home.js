import React from "react";
import "./home.css";
import { Container, Row } from "reactstrap";

export default function Home() {
    return (
        <>
        <div className="home">
            <img className="home-bg" src='/images/NewRiverGorge-Cover.jpg' alt=""/>
            <Container>
                <Row>
                    <div className="home-top">
                        <img className="profile-img" src="/images/Snowy-Profile-Shot-Cropped.jpg" alt="" />
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
