import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import houseApi from "../service.api/house";
import roomApi from "../service.api/room";

const List = () => {
    const search = useLocation().search;
    const houseCatId = new URLSearchParams(search).get('house_cat_id');
    const roomCatId = new URLSearchParams(search).get('room_cat_id');

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                if (houseCatId != null) {
                    const fetchedHouses = await houseApi.findByCatId(houseCatId)
                    console.log(fetchedHouses);
                    setItems(fetchedHouses.data.houses)
                } else {
                    const fetchedRooms = await roomApi.findByCatId(roomCatId);
                    setItems(fetchedRooms.data.rooms)
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetch();
        
    }, [houseCatId, roomCatId])

    const renderHouses = () => {
        return (
            items &&
                items.map((item, index) => (
                    <Link to={`/house?house_id=${item.id}`} key={index}>
                        <figure className="roombox">
                            <img src="assets/img/1.jpg" alt="" />
                            <figcaption>
                                <div className="border one">
                                    <div></div>
                                </div>
                                <div className="border two">
                                    <div></div>
                                </div>
                                <h3>{'name: '+ item.name}</h3>
                                <p>{'Description: '+ item.description}</p>
                            </figcaption>
                        </figure>
                    </Link>
                ))
        )
    }

    const renderRooms = () => {
        return (
            items &&
                items.map((item, index) => (
                    <Link to={`/room?room_id=${item.id}`} key={index}>
                        <figure className="roombox">
                            <img src="assets/img/1.jpg" alt="" />
                            <figcaption>
                                <div className="border one">
                                    <div></div>
                                </div>
                                <div className="border two">
                                    <div></div>
                                </div>
                                <h3>{'Area: ' + item.area + ' m2'}</h3>
                                <p>{'Door direction: ' + item.door_direction}</p>
                            </figcaption>
                        </figure>
                    </Link>
                ))
        )
    }
    
    return (
        <>
        {
            houseCatId != null ? renderHouses() : renderRooms()
        }
            {/* FOOTER Section */}
        </>
    );
};

export default List;
