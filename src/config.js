import Home from "./components/pages/Home";
import EventPage from "./components/pages/EventPage";
import NewEventPage from "./components/pages/NewEventPage";

import HomeIcon from "@material-ui/icons/Home";
import BookIcon from "@material-ui/icons/Book";
import PlusIcon from "@material-ui/icons/Add";

const config = {
    pages: [
        {
            order: "0",
            path: "home",
            name: "Home",
            Component: Home,
            Icon: HomeIcon,
        },
        {
            order: "0",
            path: "event-page",
            name: "Event Page",
            Component: EventPage,
            Icon: BookIcon,
        },
        {
            order: "1",
            path: "new-event-page",
            name: "New Event Page",
            Component: NewEventPage,
            Icon: PlusIcon,
        },
    ],
};

export default config;
