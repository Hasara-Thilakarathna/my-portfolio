import './Header.css';

export function Header() {
    return (
        <header className="flex justify-around p-2 bg-slate-900 text-white items-center h-24">
            <div className="text-3xl">Hasara Thilakarathna <sub className="text-xs">Portfolio</sub></div>
            <nav id="nav-bar" className="list-none flex justify-center gap-14">
                <li>Home</li>
                <li>About me</li>
                <li>Projects</li>
                <li>Contact me</li>
            </nav>
        </header>
    );
}