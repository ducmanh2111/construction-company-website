import React from "react";

const Slider = () => {
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
        </>
    );
};

export default Slider;
