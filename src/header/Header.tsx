import './Header.css';

export function Header() {
    return (
        <div className="bg-slate-900">
            <header className=" flex justify-around pt-10  text-white items-center h-24">
                <div id="title" className="text-5xl">Hasara Thilakarathna <sub className="text-xs">Portfolio</sub></div>

                <nav id="nav-bar" className="list-none flex justify-center gap-14">
                    <li>Home</li>
                    <li>About me</li>
                    <li>Projects</li>
                    <li>Contact me</li>
                </nav>
            </header>
            <div className="pt-10 mx-32">
                <hr className=""/>
            </div>
        </div>

    );
}