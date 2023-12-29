import './Home.css';
import React, {useState} from "react";
import Typewriter from "react-ts-typewriter";

export function Home() {

    return (
        <main className="bg-slate-900 h-[795px] flex flex-col justify-around">
            <div className="flex justify-around pt-20">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl pt-20">Hello, I'm Hasara Thilakarathna</h1>
                    <h1 className="text-xl text-red-700 italic"><Typewriter text={["Front End Developer","Back End Developer","Tech Enthusiast"]}loop={true}
                                                                     delay={2000}
                                                                     speed={100}/></h1>
                    <h1 className="pt-20">Welcome to my Digital Domain.</h1>
                    <h1 className="pt-5 text-center px-5">In this digital portfolio, you'll embark on a visual and interactive
                        exploration of my projects, </h1>
                    <h1 id="para-2" className="pt-5 text-center px-5">each a testament to my dedication to innovation and
                        problem-solving.</h1>

                </div>
                <div className="flex flex-col items-center gap-4">
                    <div id="picture-wrapper">
                        <img id="profile-picture" className="shadow-2xl shadow-cyan-200 h-96 w-96 rounded-full"
                             src="../../src/assets/IMG_9312.jpg"/>
                    </div>
                    <div className="flex gap-2">
                        <a target="_blank" href="https://www.linkedin.com/in/hasara-thilakarathna">
                            <img alt="linkedin-icon" className=" icon hover:scale-125 hover:cursor-pointer"
                                 src="../../src/assets/linkedin.png"/>
                        </a>
                        <a target="_blank" href="https://github.com/Hasara-Thilakarathna">
                            <img alt="github-icon" className="icon hover:scale-125 hover:cursor-pointer"
                                 src="../../src/assets/github.png"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-grow-0 bg-pink-900 h-5 w-auto">
            </div>
        </main>
    );
}