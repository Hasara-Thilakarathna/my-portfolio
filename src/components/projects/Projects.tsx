import './Projects.css';
import {ProjectList} from "../project-list/ProjectList.tsx";

export function Projects() {
    return (
        <main id="projects" className="p-40 ml-72">
            <h1 className="text-center text-5xl pb-10">
               <span className="">Projects</span>
            </h1>
            <div id="proj-wrapper" className="grid grid-cols-3">
                <ProjectList/>
            </div>

        </main>
    );
}