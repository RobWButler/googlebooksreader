import React from "react";

function Result(props){
    return(
        <div className="resultcard clearfix">
            <button className="resultsbtn btn btn-secondary" {...props}>{props.label}</button>
            <img className="img img-thumbnail float-left mr-2" alt={props.booktitle} title={props.booktitle} src={props.image}/>
            <h4><a href={props.url}>{props.booktitle}</a></h4>
            <h5 className="lead">{props.author}</h5>
            <p>{props.description}</p>
        </div>
    )
}


export default Result;