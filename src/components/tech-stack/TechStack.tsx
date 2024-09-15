import './TechStack.css';

export function TechStack() {

    return (
        <>
            <b className=" text-xl">Tech Stack</b>
            <div className="h-1 bg-white text-white w-20"></div>
            <hr/>

            <h3>
                <b>Programming Languages</b>
            </h3>
            <div className="flex gap-8">
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/java.png"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/javascript.png"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/typescript.png"/>
            </div>
            <hr/>
            <h3>
                <b>Frameworks & Libraries</b>
            </h3>
            <div className="flex gap-8">
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/react.png"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/angular.png"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/css.png"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/html.png"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/nodejs.png"/>
                <img className="tech-icon"
                     src="/my-portfolio/assets/img/tech-stack/Microsoft.VisualStudio.Services.Icons.Default"/>
            </div>
            <hr/>
            <h3>
                <b>Databases</b>
            </h3>
            <div className="flex gap-8">
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/postgresql.png"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/mysql.png"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/mongodb.png"/>
            </div>
            <hr/>
            <h3>
                <b>Development Tools & Others</b>
            </h3>
            <div className="flex gap-8">
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/github.png"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/firestore.png"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/postman.png"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/maven.png"/>
            </div>
        </>
    )
}
