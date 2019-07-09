import React from "react";

function Jumbotron(props){
    return(
        <div className="jumbotron">
            {props.pagetitle}
        </div>
    )
}

export default Jumbotron;