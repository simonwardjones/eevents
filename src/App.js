import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EventPage from "./components/pages/EventPage";
import NewEventPage from "./components/pages/NewEventPage";
import Navbar from "./components/custom/navigation/Navbar";

function App() {
    const Index = Home;

    return (
        <Router basename={`${process.env.REACT_APP_PUBLIC_PATH}`}>
            <div className="App">
                <Navbar />
                <Route exact path="/" component={Index} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/event-1" component={EventPage} />
                <Route exact path="/new-event" component={NewEventPage} />
            </div>
        </Router>
    );
}

export default App;
