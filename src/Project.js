import Navbar from "./Navbar";
function Project() {
    return (<div>
        <Navbar />
        <div className="project">
            <div className="img">
                <img src="https://quan-vo-portfolio.netlify.app/static/media/tutoringhub.14c649ac.png"></img>
                <div className="content">
                    <h3>TUTORING HUB</h3>
                    <p>Tutoring Hub is a website that allows students to rate the tutors at the Learning Center. Students can write and read reviews about their tutors so they can choose the best tutor for them based on their reviews</p>
                    <a href="https://github.com/coding-hub-org/tutoring-hub"> <img src="https://i.pinimg.com/236x/9b/21/22/9b212265fa5d36694df8db3f453a99d8.jpg" className="icon"></img></a>
                </div>
            </div>
            <div className="img">
                <img src="https://quan-vo-portfolio.netlify.app/static/media/portfolio-image.971e0c61.png"></img>
                <div className="content">
                    <h3>PORTFOLIO</h3>
                    <p>My personal portfolio responsive website, built with react to showcase my experiences, projects and let viewers get to know a little bit more about me</p>
                    <a href="https://github.com/votrungquan1999/portfolio-website"> <img src="https://i.pinimg.com/236x/9b/21/22/9b212265fa5d36694df8db3f453a99d8.jpg" className="icon"></img></a>
                </div>
            </div>
            <div className="img">
                <img src="https://quan-vo-portfolio.netlify.app/static/media/pygame_picture.800b2580.png"></img>
                <div className="content"><h3>BATTLING-GAME</h3>
                    <p>A multiplayer battling game built with Python and Pygame. This project got the first place at the Plattsburgh Hackathon in 2018</p>
                    <a href="https://github.com/nazislam/Hackathon-TGOF"> <img src="https://i.pinimg.com/236x/9b/21/22/9b212265fa5d36694df8db3f453a99d8.jpg" className="icon"></img></a>
                </div>
            </div>
            <div className="img">
                <img src="https://quan-vo-portfolio.netlify.app/static/media/shuttler.f747a84a.png"></img>
                <div className="content"><h3>SHUTTLE</h3>
                    <p>An application that lets students track the school shuttle in realtime using Flutter and Firebase</p>
                    <a href="https://github.com/coding-hub-org/shuttler-flutter"> <img src="https://i.pinimg.com/236x/9b/21/22/9b212265fa5d36694df8db3f453a99d8.jpg" className="icon"></img></a>
                </div>
            </div>
        </div>
    </div>);
}

export default Project;