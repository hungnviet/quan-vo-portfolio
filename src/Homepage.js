
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="homepage">
            <Navbar />
            <table>
                <td className="column1">
                    <th className="introduction">ABOUT <br /> ME</th>
                    <img src="https://avatars.githubusercontent.com/u/32785143?v=4" className="picture"></img>
                    <p className="chao"> HI!<br />I'M QUAN VO<br />A SOFTWARE ENGINEER</p>
                    <div className="aboutme">
                        <a href="https://www.facebook.com/votrung.quan.75"><img src="https://i.pinimg.com/564x/1a/1a/a1/1a1aa162e286baa94871e0724cda27ee.jpg" ></img></a>
                        <a href="https://www.linkedin.com/in/quanvotr/"><img src="https://i.pinimg.com/736x/19/40/ab/1940abcfbcbdbdb11b1b8fdbf2f01973.jpg" ></img></a>
                        <a href="https://github.com/votrungquan1999"><img src="https://i.pinimg.com/564x/9b/21/22/9b212265fa5d36694df8db3f453a99d8.jpg" ></img></a>
                        <p>
                            a quan viet van vo day nea quan viet van vo day nea quan viet van vo day nea quan viet van vo day nea
                            quan viet van vo day ne  a quan viet van vo day nea a quan viet van vo day nea a quan viet van vo day nea
                        </p>
                        <div className="face">FaceBook</div>
                        <div className="Linkedin">Linkedin</div>
                        <div className="GitHub">GitHub</div>
                    </div>

                </td>
                <td className="column2">
                    <div className="muc1">
                        <h2>TECHNOLOGY I FAMILIAR WITH</h2>
                        <div className="technology">
                            <ul>
                                <li>Python</li>
                                <li>Django</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Sqlite</li>
                                <li>Java</li>
                                <li>C/C++</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JvaScript</li>
                                <li>Flutter</li>
                                <li>Dart</li>
                                <li>R</li>
                                <li>Perl</li>
                                <li>Android</li>
                            </ul>
                        </div>
                    </div>
                    <div className="duong_dan">
                        <div className="link">
                            <Link to="Project">SOME OF MY MAJOR PROJECTS</Link>

                        </div>
                        <div className="link">
                            <Link to="Experience">MY EXPERIENCE IN WORKING</Link>

                        </div>
                    </div>
                    <div className="contact">
                        <h2 className="dau_muc">CONTACT ME HERE</h2>
                        <ul>
                            <li>Phone number: 1234567891</li>
                            <li>Email: votrungquan1999@gmail.com</li>
                        </ul>
                    </div>

                </td>
            </table>
        </div>);
}

