import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import List from "./pages/List";

function App() {
    return (
        <>
            <Navbar />
            <div className="page-wrapper">
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/list" component={List} />
                    <Route exact path="/detail" component={Detail} />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;