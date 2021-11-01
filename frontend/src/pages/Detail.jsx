import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ListProducts from "../components/ListProducts";
import houseApi from "../service.api/house";
import roomApi from "../service.api/room";

const Detail = () => {
    const search = useLocation().search;
    const houseId = new URLSearchParams(search).get('house_id');
    const roomId = new URLSearchParams(search).get('room_id');

    const [item, setItem] = useState(null);
    const [rooms, setRooms] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            try {
                if(houseId != null) {
                    const fetchedHouse = await houseApi.findById(houseId);
                    setItem(fetchedHouse.data.house)
                    const fetchedRooms = await roomApi.findByHouseId(houseId);
                    setRooms(fetchedRooms.data.rooms)
                } else {
                    const fetchedRoom = await roomApi.findById(roomId);
                    setItem(fetchedRoom.data.room)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetch()
    }, [houseId, roomId])

    const renderHouse = () => {
        return (
            item && <>
            {console.log(item.image_url)}
                <header
                    className="page-header full-image-background"
                    style={{ backgroundImage: `url(http://localhost:4001/${item.image_url[0]})` }}
                >
                    <div className="container-fluid">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="text-center">
                                <h2 className="white">
                                    {/* Room Indigo - $67/per night */}
                                    {item.house_category_name}
                                </h2>
                            </div>
                            <div className="header-intro">
                                {/* Cosy Nights. Wood Fire. */}
                                {item.name}
                                <br />
                            </div>
                        </div>
                    </div>
                </header>
                <section className="afterintro padding-bottom-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h2>Description</h2>
                                <p>
                                    {/* This room is perfect for couples! Cabin sed
                                    augue feugiat, accumsan quam vitae, mollis quam.
                                    Praesent ultrices purus nec sollicitudin
                                    hendrerit. Donec vel ex mauris. Aliquam pharetra
                                    arcu in purus elementum venenatis. Praesent et
                                    nibh tristique, posuere justo placerat,
                                    scelerisque orci. */}
                                    {item.description}
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h2>Infomations</h2>
                                <ul className="col-md-6 unstyle checklist">
                                    <li>Area: {item.area} m2</li>
                                    <li>Address: {item.address}</li>
                                    <li>Floors: {item.floors}</li>
                                </ul>
                                <ul className="col-md-6 unstyle checklist">
                                    <li>Year: {item.year}</li>
                                    <li>Country: {item.country}</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h2>
                                    Status -{" "}
                                    <span className="text-khaki">{item.status ? "DONE" : "UNDONE"}</span>
                                </h2>
                                <a href="contact.html">
                                    <h2 className="actionbutton">
                                        <span>
                                            Call us at 0123 456 789 or contact online{" "}
                                            <i className="fa fa-long-arrow-right" />
                                        </span>
                                    </h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <h1>Rooms</h1>
                <ListProducts rooms={rooms}/>
            </>
        )
    }

    const renderRoom = () => {
        return (
            item && <>
            <header
                className="page-header full-image-background"
                style={{ backgroundImage: `url(http://localhost:4001/${item.image_url[0]})` }}
            >
                <div className="container-fluid">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="text-center">
                            <h2 className="white">
                                Room Indigo - $67/per night
                            </h2>
                        </div>
                        <div className="header-intro">
                            {/* Cosy Nights. Wood Fire. */}
                            {item.area}
                            <br />
                            Comfort Stay.
                        </div>
                    </div>
                </div>
            </header>
            <section className="afterintro padding-bottom-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>Description</h2>
                            <p>
                                This room is perfect for couples! Cabin sed
                                augue feugiat, accumsan quam vitae, mollis quam.
                                Praesent ultrices purus nec sollicitudin
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2>Informations</h2>
                            <ul className="col-md-6 unstyle checklist">
                                <li>Area: {item.area}</li>
                                <li>Window: {item.window}</li>
                            </ul>
                            <ul className="col-md-6 unstyle checklist">
                                <li>Doors: {item.door}</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h2>
                                Status -{" "}
                                <span className="text-khaki">DONE</span>
                            </h2>
                            <a href="contact.html">
                                <h2 className="actionbutton">
                                    <span>
                                        Call us at 0123 456 789 or contact online{" "}
                                        <i className="fa fa-long-arrow-right" />
                                    </span>
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
        )
    }
    
    return (
        <>
            {
                houseId != null ? renderHouse() : renderRoom()
            }
        </>
    );
};

export default Detail;
