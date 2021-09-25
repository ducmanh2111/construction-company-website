import React from "react";

const Footer = () => {
    return (
        <>
            <div className="bottomfooter">
                <div className="col-md-4">
                    © Template by{" "}
                    <a href="https://www.wowthemes.net/premium-themes-templates/">
                        WowThemes.net
                    </a>
                </div>
                <div className="col-md-4">
                    <i className="fa fa-phone" /> Book Now 202-555-0114
                    <br />
                    <i className="fa fa-envelope" />{" "}
                    <a href="mailto:donotsendthisemail@gmail.com">
                        hello@pension.com
                    </a>
                </div>
                <div className="col-md-4">
                    <i className="fa fa-map-marker" />
                    940 North Georgia, Blue Ridge
                    <br />
                    Mountain Resorts Cabin
                </div>
                <div className="clearfix"></div>
            </div>
            <section id="page-ajax-prev" />
        </>
    );
};

export default Footer;
