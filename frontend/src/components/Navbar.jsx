import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { categories, roomCategories } = props;

  return (
    <nav className="activ">
      {/* logo */}
      <div className="logo-box">
        <a href="index.html" className="logo logo-img">
          <img src="assets/img/logo2.png" alt="logo" />
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
      <div className="menu-box my-scrollbar" style={{ maxHeight: "467px" }}>
        <div id="dl-menu" className="dl-menuwrapper">
          <ul className="dl-menu dl-menuopen">
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <a href="about.html">about</a>
            </li>
            <li>
              <a href="contact.html">contact</a>
            </li>
            <li className="submenu">
              <a href="#">Nhà</a>
              <ul className="sub-menu">
                {categories &&
                  categories.map((cat) => (
                    <li key={cat.id}>
                      <Link to={`/houses?house_cat_id=${cat.id}`}>{cat.name}</Link>
                    </li>
                  ))}
              </ul>
            </li>
            <li className="submenu">
              <a href="#">Phòng</a>
              <ul className="sub-menu">
              {roomCategories &&
                  roomCategories.map((room) => (
                    <li key={room.id}>
                      <Link to={`/rooms?room_cat_id=${room.id}`}>{room.name}</Link>
                    </li>
                  ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* End Menu */}
      <footer className="footer" style={{}}>
        <ul className="social-icons">
          <li>
            <Link to="#" target="_blank">
              <i className="fa fa-facebook" />
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank">
              <i className="fa fa-twitter" />
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank">
              <i className="fa fa-pinterest" />
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank">
              <i className="fa fa-yelp" />
            </Link>
          </li>
        </ul>
        {/* <div className="copyright">
                    © 2021 <Link to="#"></Link>
                </div> */}
      </footer>
    </nav>
  );
};

export default Navbar;
