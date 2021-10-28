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
                            <img src="assets/img/GHO_4443.jpg" alt="" style={styles.image}/>
                            <figcaption>
                                <div className="border one">
                                    <div></div>
                                </div>
                                <div className="border two">
                                    <div></div>
                                </div>
                                <h3>{'Tên: '+ item.name}</h3>
                                <p>{'Mô tả: '+ item.description}</p>
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
                            <img src="assets/img/GHO_4443.jpg" alt="" style={styles.image} />
                            <figcaption>
                                <div className="border one">
                                    <div></div>
                                </div>
                                <div className="border two">
                                    <div></div>
                                </div>
                                <h3>{'Tên: ' + item.house_name}</h3>
                                <p>{'Hướng phòng: ' + item.door_direction}</p>
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

const styles = {
    image: {
        width: '100%',
        height: '360px',
        objectFit: 'cover',
        objectPosition: 'center'
    }
}

export default List;
