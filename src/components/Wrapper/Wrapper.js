import React from "react";
import "./Wrapper.css";

const Wrapper = props => {
<div className="wrapper">
{props.children}


<p>Is this working???</p>
</div>
};

export default Wrapper;
