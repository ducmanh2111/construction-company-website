import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="bottomfooter">
                <div className="col-md-4">
                    © Template by{" "}
                    <Link to="#">
                        House Design
                    </Link>
                </div>
                <div className="col-md-4">
                    <i className="fa fa-phone" /> Liên hệ ngay 0123 456 789
                    <br />
                    <i className="fa fa-envelope" />{" "}
                    <a href="#">
                        housedesign@gmail.com
                    </a>
                </div>
                <div className="col-md-4">
                    <i className="fa fa-map-marker" />
                    1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội
                    <br />
                    House Design - Đại học Bách Khoa Hà Nội
                </div>
                <div className="clearfix"></div>
            </div>
            <section id="page-ajax-prev" />
        </>
    );
};

export default Footer;
