import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import List from "./pages/List";
import houseCategoriesApi from "./service.api/houseCategories";
import roomCategoriesApi from "./service.api/roomCategories";

function App() {
    const [categories, setCategories] = useState([]);
    const [roomCategories, setRoomCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedCategories = await houseCategoriesApi.getAll()
                setCategories(fetchedCategories.data.house_categories)
                const fetchedroomCategories = await roomCategoriesApi.getAll()
                setRoomCategories(fetchedroomCategories.data.room_categories)
            } catch (error) {
                console.log(error);
            }
            
        }
        fetchData()
    }, [])


    return (
        <>
            <Navbar categories={categories} roomCategories={roomCategories}/>
            <div className="page-wrapper">
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/houses" component={List} />
                    <Route exact path="/rooms" component={List} />
                    <Route exact path="/house" component={Detail} />
                    <Route exact path="/room" component={Detail} />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
