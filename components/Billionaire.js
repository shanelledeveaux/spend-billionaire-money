import React from "react";

const Billionaire = props => {
    return (
    <div className="property-card">
        <img src={props.photo} alt={props.imageAltText}/>
        <span>{props.name}</span>
        <span>{props.age}</span>
        <span>{props.rank}</span>
        <span>{props.netWorth}</span>
    </div>
    )
};

export default Billionaire;