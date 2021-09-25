import React from "react";

const Slider = () => {
    return (
        <>
            <div
                className="Modern-Slider slick-initialized slick-slider"
                role="toolbar"
            >
                <button
                    className="PrevArrow slick-arrow"
                    style={{ display: "block" }}
                />
                {/* Item */}
                <div aria-live="polite" className="slick-list">
                    <div
                        className="slick-track"
                        role="listbox"
                        style={{ opacity: 1, width: 3465 }}
                    >
                        <div
                            className="item slick-slide slick-current slick-active"
                            data-slick-index={0}
                            aria-hidden="false"
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide00"
                            style={{
                                width: 1155,
                                position: "relative",
                                left: 0,
                                top: 0,
                                zIndex: 999,
                                opacity: 1,
                            }}
                        >
                            <div className="img-fill">
                                <img src="assets/img/1.jpg" alt />
                                <div className="info">
                                    <div className="container">
                                        <span className="line-1">
                                            Peaceful escape from the city
                                        </span>
                                        <h1 className="line-2">Pension</h1>
                                        <span className="line-3">
                                            Mountain Cabin
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
