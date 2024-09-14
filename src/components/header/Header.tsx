import './Header.css';

export function Header() {
    return (
        <div id="header-container" className="px-8 bg-slate-800 w-svw">
            <header id="header" className="flex justify-between gap-36 pt-6 text-white items-center h-24">
                <div id="title" className="text-5xl cursor-pointer">
                    <a href="#home">
                        Hasara
                    </a>
                </div>

                <nav id="nav-bar" className="list-none flex justify-center gap-14">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about-me">About me</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contactme">Contact me</a>
                    </li>
                </nav>

            </header>
            <div className="pt-4 mx-32">
                <hr className=""/>
            </div>
        </div>

    );
}