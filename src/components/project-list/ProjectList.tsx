import {projectDetails} from "../project-details/ProjectDetails.tsx";

export function ProjectList() {

    return (
        <>
            {projectDetails.map((project) => (
                <div className="ProjectWrapper flex flex-col items-center">
                    <h3 className="pr-10 pb-6 text-xl">{project.title}</h3>

                    <div id="proj" className="mx-12">
                        <div className="Overlay flex justify-center">
                            <div className="Links flex flex-col justify-center text-white align-middle  gap-2 p-4 underline">
                                <a href={project.projectUrl.map((url) => (url))[0]}>
                                    <i className="bi bi-link-45deg"></i> <b>Source code</b>
                                </a>

                                {project.projectUrl[1] != null ?
                                    <>
                                        <a href={project.projectUrl.map((url) => (url))[1]}>
                                            <i className="bi bi-link-45deg"></i> <b> Live Demo</b>
                                        </a>
                                    </>
                                    : <></>
                                }
                            </div>
                        </div>

                        <div className="ProjectInfo">
                            <div>
                                <img className="project-img" src={project.imageUrl}/>
                            </div>
                            <p className=" p-4 text-start">{project.description}</p>

                            <div className="grid grid-cols-3 gap-2 p-4">
                                {project.tech.map((techStack) => (
                                    <button className="techStack border rounded-lg p-1">{techStack}</button>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            ))}
        </>
    )
}