import React, { useState } from "react";

const ListProducts = () => {
    const [items, setItems] = useState([1, 2, 3]);

    return (
        <>
            <div id="device" className="gridalicious">
                {items &&
                    items.map((item, index) => (
                        <div
                            className="galcolumn"
                            id="item0tf4SX"
                            style={{
                                width: "33.3333%",
                                paddingLeft: "0px",
                                paddingBottom: "0px",
                                float: "left",
                                boxSizing: "border-box",
                            }}
                            key={index}
                        >
                            <div
                                className="item"
                                style={{
                                    marginBottom: "0px",
                                    zoom: 1,
                                    opacity: 1,
                                }}
                            >
                                <a href="blog-single.html">
                                    <figure className="blogbox">
                                        <img
                                            src="assets/img/33.jpg"
                                            alt=""
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                        />
                                        <figcaption>
                                            <div>
                                                <h2>
                                                    Join nature, forget
                                                    everything
                                                </h2>
                                            </div>
                                            <div>
                                                <h3>Life Stories, People</h3>
                                                <h3>Read more</h3>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    ))}
                <div
                    id="cleartf4SX"
                    style={{
                        clear: "both",
                        height: "0px",
                        width: "0px",
                        display: "block",
                    }}
                />
            </div>
        </>
    );
};

export default ListProducts;
