import React from "react";

const Header = props => (

    <div className="main-container"><nav className="navbar sticky-top navbar-light bg-white">
    <h5 className="text-muted">current score:{props.currentScore} | Challenge #: {props.Challenge}      | Reindeer Game #: {props.ReindeerGame}    </h5>
    </nav>
</div>
);

export default Header;

