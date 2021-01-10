import React from "react";

const Navbar = () => {
    return (
        <div>
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
        </div>
    );
};

export default Navbar;
