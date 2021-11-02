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
                                            src={`${process.env.REACT_APP_API_HOST}/${room.image_url}`}
                                            alt=""
                                            style={{
                                                width: "100%",
                                                height: "300px",
                                            }}
                                        />
                                        <figcaption>
                                            <div>
                                                <h2>
                                                    {`${room.room_category_name} ${room.house_name}`}
                                                </h2>
                                            </div>
                                            <div>
                                                <h3>Xem thông tin</h3>
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
