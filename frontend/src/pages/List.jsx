import React, { useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
    const [items] = useState([1, 2, 3, 4]);

    return (
        <>
            {items &&
                items.map((item, index) => (
                    <Link to="/detail" key={index}>
                        <figure className="roombox">
                            <img src="assets/img/1.jpg" alt="" />
                            <figcaption>
                                <div className="border one">
                                    <div></div>
                                </div>
                                <div className="border two">
                                    <div></div>
                                </div>
                                <h3>Indigo Violet</h3>
                                <p>$360/per week</p>
                            </figcaption>
                        </figure>
                    </Link>
                ))}
            {/* FOOTER Section */}
        </>
    );
};

export default List;
