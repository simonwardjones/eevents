import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import EventPage from "./components/pages/EventPage";
// import NewEventPage from "./components/pages/NewEventPage";

import Navbar from "./components/generic/navigation/NavBars";
import AllRoutes from "./components/generic/navigation/AllRoutes";

function App() {
    const Index = Home;

    return (
        <Router basename={`${process.env.REACT_APP_PUBLIC_PATH}`}>
            <div className="App">
                <Navbar imgSrc="logo512.png" />

                <Route exact path="/" component={Index} />

                <AllRoutes />
            </div>
        </Router>
    );
}

export default App;
