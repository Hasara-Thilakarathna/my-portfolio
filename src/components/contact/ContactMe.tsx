import './ContactMe.css';
import {FormEvent, useState} from "react";

export function ContactMe() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <main id="contactme" className="p-52 items-center ml-80 flex justify-center">
            <div className="bg-cyan-100 text-black rounded-2xl px-80 py-4 grid grid-cols-1 text-center">
                <h1 className="pb-10 flex flex-col">
                    <span className="text-5xl">Contact Me</span>
                    <span className="text-xl text-center">Let's Get in touch!</span>
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input className="p-2 rounded-lg outline-0" type="text" placeholder="Email"/>
                    <textarea className="p-2 rounded-lg outline-0" placeholder="Your message"/>
                    <button className="bg-slate-900 text-white mx-32 rounded-lg hover:bg-slate-600 py-2">Send</button>
                    {message && <span>Thank you, I'll reply ASAP</span>}
                </form>
                <div className="flex flex-col text-center">
                    <span className="flex gap-4 text-center">
                        <i className="bi bi-envelope-at"></i>
                        hasarathilakarathnaa4@gmail.com
                    </span>
                </div>
            </div>


        </main>
    );
}