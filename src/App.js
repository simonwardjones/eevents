import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventPage from "./components/pages/EventPage";
import NewEventPage from "./components/pages/NewEventPage";

function App() {
    const Index = Home;

    return (
        <Router basename={`${process.env.REACT_APP_PUBLIC_PATH}`}>
            <div className="App">
                <div>Test 1</div>
                <div>
                    <Link to="/"> Go to home page</Link>
                </div>
                <div>
                    <Link to="/event-1"> Go to event page</Link>
                </div>
                <div>
                    <Link to="/new-event"> Go to new event page</Link>
                </div>
                <Route exact path="/" component={Index} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/event-1" component={EventPage} />
                <Route exact path="/new-event" component={NewEventPage} />
            </div>
        </Router>
    );
}

export default App;
