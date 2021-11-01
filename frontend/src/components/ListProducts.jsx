import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListProducts = (props) => {
    const {rooms} = props
    const [items, setItems] = useState([1, 2, 3]);

    return (
        <>
            <div id="device" className="gridalicious">
                {rooms &&
                    rooms.map((room, index) => (
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
                                <Link to={`/room?room_id=${room.id}`}>
                                    <figure className="blogbox">
                                        <img
                                            src={`http://localhost:4001/${room.image_url}`}
                                            alt=""
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                        />
                                        <figcaption>
                                            <div>
                                                <h2>
                                                    {room.house_name}
                                                </h2>
                                            </div>
                                            <div>
                                                <h3>Life Stories, People</h3>
                                                <h3>Read more</h3>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </Link>
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
