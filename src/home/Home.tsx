import './Home.css';
import React, {useState} from "react";

export function Home() {

    return (
        <main>
            <div className="flex justify-around pt-20">
                <div className="flex flex-col items-center">
                    <h1>Hello, I'm Hasara Thilakarathna</h1>

                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="bg-pink-900 h-96 w-96 rounded-full">

                    </div>
                    <div className="flex gap-2">
                        <img className="icon hover:scale-125 hover:cursor-pointer" src="../../src/assets/linkedin.png"/>
                        <img className="icon hover:scale-125 hover:cursor-pointer" src="../../src/assets/github.png"/>
                    </div>
                </div>
            </div>


        </main>
    );
}