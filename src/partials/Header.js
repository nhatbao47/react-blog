import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="bgded overlay" style ={{backgroundImage: 'url(/images/demo/backgrounds/01.png)'}}>
            <div className="wrapper row1">
                <header id="header" className="hoc clear">
                    <div id="logo" className="fl_left">
                        <h1><a href="index.html">Basend</a></h1>
                    </div>
                    <nav id="mainav" className="fl_right">
                        <ul className="clear">
                            <li className="active"><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about-us">About Us</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Header;