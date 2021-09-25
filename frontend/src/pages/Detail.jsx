import React from "react";

const Detail = () => {
    return (
        <>
            <header
                className="page-header full-image-background"
                style={{ backgroundImage: "url(assets/img/7.jpg)" }}
            >
                <div className="container-fluid">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="text-center">
                            <h2 className="white">
                                Room Indigo - $67/per night
                            </h2>
                        </div>
                        <div className="header-intro">
                            Cosy Nights. Wood Fire.
                            <br />
                            Comfort Stay.
                        </div>
                    </div>
                </div>
            </header>
            <section className="afterintro padding-bottom-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Couple's Perfect</h2>
                            <p>
                                This room is perfect for couples! Cabin sed
                                augue feugiat, accumsan quam vitae, mollis quam.
                                Praesent ultrices purus nec sollicitudin
                                hendrerit. Donec vel ex mauris. Aliquam pharetra
                                arcu in purus elementum venenatis. Praesent et
                                nibh tristique, posuere justo placerat,
                                scelerisque orci.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2>Facilities</h2>
                            <ul className="col-md-6 unstyle checklist">
                                <li>Great Location</li>
                                <li>All facilities</li>
                                <li>Breakfast</li>
                                <li>Baby Sitting</li>
                                <li>Restaurant</li>
                                <li>Camping</li>
                            </ul>
                            <ul className="col-md-6 unstyle checklist">
                                <li>Internet</li>
                                <li>TV</li>
                                <li>Breakfast</li>
                                <li>Baby Sitting</li>
                                <li>Restaurant</li>
                                <li>More</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h2>
                                Status -{" "}
                                <span className="text-khaki">Available</span>
                            </h2>
                            <a href="contact.html">
                                <h2 className="actionbutton">
                                    <span>
                                        Call us at 202-555-0149 or book online{" "}
                                        <i className="fa fa-long-arrow-right" />
                                    </span>
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Detail;
