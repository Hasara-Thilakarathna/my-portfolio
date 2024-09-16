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
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/java.png" title="Java"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/javascript.png" title="Javascript"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/typescript.png" title="Typescript"/>
            </div>
            <hr/>
            <h3>
                <b>Frameworks & Libraries</b>
            </h3>
            <div className="flex gap-8">
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/react.png" title="React"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/angular.png" title="Angular"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/css.png" title="CSS"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/html.png" title="HTML"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/nodejs.png" title="NodeJS"/>
                <img className="tech-icon"
                     src="/my-portfolio/assets/img/tech-stack/Microsoft.VisualStudio.Services.Icons.Default" title="Spring Boot"/>
            </div>
            <hr/>
            <h3>
                <b>Databases</b>
            </h3>
            <div className="flex gap-8">
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/postgresql.png" title="PostgreSQL"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/mysql.png" title="MySQL"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/mongodb.png" title="MongoDB"/>
            </div>
            <hr/>
            <h3>
                <b>Development Tools & Others</b>
            </h3>
            <div className="flex gap-8">
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/github.png" title="Github"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/firestore.png" title="Firestore"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/postman.png" title="Postman"/>
                <img className="tech-icon" src="/my-portfolio/assets/img/tech-stack/maven.png" title="Maven"/>
            </div>
        </>
    )
}
