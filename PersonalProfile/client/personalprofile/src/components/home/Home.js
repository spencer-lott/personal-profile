import "./home.css"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faTwitter} from "@fortawesome/free-brands-svg-icons"; // Import the Twitter icon from the free-brands-svg-icons package


export default function Home() {
    return (
        <div className='home'>
            <h1>Welcome to the home page</h1>
            <div class="ui vertically divided grid">
                <div class="two column row">
                    <div class="column"><img src="https://cms-tc.pbskids.org/global/mezzanines/shows/curious-george.jpg" class="ui image"/></div>
                    <div class="column"><img src="https://cms-tc.pbskids.org/global/mezzanines/shows/curious-george.jpg" class="ui image"/></div>
                </div>
                <div class="row">
                    <h1>My projects</h1>
                    <h2 className="ui header">
                        {/* <FontAwesomeIcon icon={faTwitter}/> */}
                        <div className="content">Learn More</div>
                    </h2>
                </div>
                <div class="three column row">
                    <div class="column"><img src="https://cms-tc.pbskids.org/global/mezzanines/shows/curious-george.jpg" class="ui image"/></div>
                    <div class="column"><img src="https://cms-tc.pbskids.org/global/mezzanines/shows/curious-george.jpg" class="ui image"/></div>
                    <div class="column"><img src="https://cms-tc.pbskids.org/global/mezzanines/shows/curious-george.jpg" class="ui image"/></div>
                </div>
            </div>
        </div>
    )
}
