import React from "react";

const Navbar = () => {
    return (
        <nav className="activ">
            {/* logo */}
            <div className="logo-box">
                <a href="index.html" className="logo logo-img">
                    <img src="assets/img/logo.png" alt="logo" />
                </a>
            </div>
            {/* mobile */}
            <button
                type="button"
                aria-label="Toggle Navigation"
                className="menu-button-mobile lines-button x2"
            >
                <span className="lines" />
            </button>
            {/* Menu */}
            <div
                className="menu-box my-scrollbar"
                style={{ maxHeight: "467px" }}
            >
                <div id="dl-menu" className="dl-menuwrapper">
                    <ul className="dl-menu dl-menuopen">
                        <li>
                            <a href="index.html">home</a>
                        </li>
                        <li>
                            <a href="about.html">about</a>
                        </li>
                        <li>
                            <a href="contact.html">contact</a>
                        </li>
                        <li className="submenu">
                            <a href="#">House</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="gallery.html">Villa</a>
                                </li>
                                <li>
                                    <a href="testimonials.html">Tube House</a>
                                </li>
                                <li>
                                    <a href="rooms-single.html">Apartment</a>
                                </li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="#">Room</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="gallery.html">Bedroom</a>
                                </li>
                                <li>
                                    <a href="testimonials.html">Kitchen</a>
                                </li>
                                <li>
                                    <a href="rooms-single.html">Toilet</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            {/* End Menu */}
            <footer className="footer" style={{}}>
                <ul className="social-icons">
                    <li>
                        <a href="#" target="_blank">
                            <i className="fa fa-facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i className="fa fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i className="fa fa-pinterest" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i className="fa fa-yelp" />
                        </a>
                    </li>
                </ul>
                <div className="copyright">
                    © 2016 <a href="index.html">Pension</a>.
                </div>
            </footer>
        </nav>
    );
};

export default Navbar;
