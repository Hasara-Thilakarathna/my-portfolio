import './Home.css';
import Typewriter from "react-ts-typewriter";
import {Header} from "../header/Header.tsx";

export function Home() {

    return (
        <>
            <Header/>
            <main id="home" className="ml-72 flex flex-col justify-center">


                <div className="flex justify-around pl-40 items-center gap-10 pt-20">
                    <div id="left-container"
                         className="flex flex-col items-center animate__animated animate__slideInLeft">
                        <h1 className="text-2xl pt-20">Hello, I am Hasara Thilakarathna</h1>

                        {/*importing typewriter component*/}

                        <h1 className="text-xl text-red-700 italic"><Typewriter
                            text={["Front End Developer", "Back End Developer", "Tech Enthusiast"]} loop={true}
                            delay={1000}
                            speed={80}/>
                        </h1>


                        <h1 className="text-xl text-center pt-20 pb-10 ">
                            Welcome to my Digital Domain.
                            <br/><br/>
                            In this digital portfolio, you'll embark on a
                            visual and
                            interactive
                            exploration of my projects,<br/>
                            each a testament to my dedication
                            to innovation
                            and
                            problem-solving.</h1>

                        <button
                            className="bg-gradient-to-l border-blue-200 border p-2 rounded-2xl hover:bg-gradient-to-r from-cyan-100 to-transparent hover:text-black">
                            <a target="_blank" href="/src/assets/HASARA_THILAKARATHNA.pdf">Download CV</a>
                        </button>

                    </div>

                    <div id="right-container"
                         className="flex flex-col items-center gap-4">
                        <div id="picture-wrapper">
                            <img id="profile-picture" className="shadow-2xl shadow-cyan-200 h-96 w-96 rounded-full"
                                 src="/my-portfolio/IMG_9312.jpg"/>
                        </div>
                        <div className="flex gap-4">
                            <a target="_blank" href="https://www.linkedin.com/in/hasara-thilakarathna">
                                <img alt="linkedin-icon" className=" icon "
                                     src="/src/assets/img/tech-stack/linkedin.png"/>
                            </a>
                            <a target="_blank" href="https://github.com/Hasara-Thilakarathna">
                                <img alt="github-icon" className="icon "
                                     src="/src/assets/img/tech-stack/github.png"/>
                            </a>

                        </div>
                    </div>
                </div>
            </main>
        </>

    );
}