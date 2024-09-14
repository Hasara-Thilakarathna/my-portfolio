import './AboutMe.css';
import {AnimationOnScroll} from 'react-animation-on-scroll';
import {TechStack} from "../tech-stack/TechStack.tsx";

export function AboutMe() {

    return (

            <div id="about-me" className="pt-36 ml-72 text-white flex flex-col animate__fadeIn animate__animated">
                <div className="flex flex-col justify-around items-center">

                    <div className=" pb-10">
                        <span className="text-5xl pl-32">About Me</span>
                    </div>

                    <div className="flex justify-between text-center">
                        <div className="AboutMeWrapper"></div>
                        <div className="text-center text-xl pr-52">I'm
                            a passionate Full Stack Developer with a keen eye for front-end and back-end technologies.
                            As a
                            Full Stack Developer, I have a strong understanding of both front-end and back-end
                            development,
                            and I'm looking forward to put my skills to use in a professional setting. I am a quick
                            learner
                            and a team player, and I am confident that I can be a valuable asset to any web development
                            team.
                        </div>
                    </div>

                    <div className="p-20 pl-52 flex items-center gap-4 flex-col">
                        <TechStack/>
                    </div>
                </div>
            </div>


    );
}