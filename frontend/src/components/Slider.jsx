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
                        style={{ opacity: 1, width: "3465px" }}
                    >
                        <div
                            className="item slick-slide"
                            data-slick-index={0}
                            aria-hidden="true"
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide00"
                            style={{
                                width: "1155px",
                                position: "relative",
                                left: "0px",
                                top: "0px",
                                zIndex: 998,
                                opacity: 0,
                                transition: "opacity 600ms linear 0s",
                            }}
                        >
                            <div className="img-fill">
                                <img src="assets/img/1.jpg" alt="" />
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
                        <div
                            className="item slick-slide"
                            data-slick-index={1}
                            aria-hidden="true"
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide01"
                            style={{
                                width: "1155px",
                                position: "relative",
                                left: "-1155px",
                                top: "0px",
                                zIndex: 998,
                                opacity: 0,
                                transition: "opacity 600ms linear 0s",
                            }}
                        >
                            <div className="img-fill">
                                <img src="assets/img/2.jpg" alt="" />
                                <div className="info">
                                    <div className="container">
                                        <span className="line-1">
                                            Comfort Stay
                                        </span>
                                        <h1 className="line-2">Pension</h1>
                                        <span className="line-3">
                                            Couple's Holiday
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="item slick-slide slick-current slick-active"
                            data-slick-index={2}
                            aria-hidden="false"
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide02"
                            style={{
                                width: "1155px",
                                position: "relative",
                                left: "-2310px",
                                top: "0px",
                                zIndex: 999,
                                opacity: 1,
                            }}
                        >
                            <div className="img-fill">
                                <img src="assets/img/8.jpg" alt="" />
                                <div className="info">
                                    <div className="container">
                                        <span className="line-1">
                                            All Facilities
                                        </span>
                                        <h1 className="line-2">Pension</h1>
                                        <span className="line-3">
                                            Family Time
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // Item */}
                {/* Item */}
                {/* // Item */}
                {/* Item */}
                {/* // Item */}
                <button
                    className="NextArrow slick-arrow"
                    style={{ display: "block" }}
                />
                <ul
                    className="slick-dots"
                    style={{ display: "block" }}
                    role="tablist"
                >
                    <li
                        className
                        aria-hidden="true"
                        role="presentation"
                        aria-selected="true"
                        aria-controls="navigation00"
                        id="slick-slide00"
                    >
                        <button
                            type="button"
                            data-role="none"
                            role="button"
                            aria-required="false"
                            tabIndex={0}
                        >
                            1
                        </button>
                    </li>
                    <li
                        aria-hidden="true"
                        role="presentation"
                        aria-selected="false"
                        aria-controls="navigation01"
                        id="slick-slide01"
                        className
                    >
                        <button
                            type="button"
                            data-role="none"
                            role="button"
                            aria-required="false"
                            tabIndex={0}
                        >
                            2
                        </button>
                    </li>
                    <li
                        aria-hidden="false"
                        role="presentation"
                        aria-selected="false"
                        aria-controls="navigation02"
                        id="slick-slide02"
                        className="slick-active"
                    >
                        <button
                            type="button"
                            data-role="none"
                            role="button"
                            aria-required="false"
                            tabIndex={0}
                        >
                            3
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Slider;
