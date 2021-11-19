import React from "react";
import billionaireStyles from "../styles/Billionaire.module.scss";

const Billionaire = (props) => {
  return (
    <div className={billionaireStyles.card}>
        <img src={props.photo} alt={props.imageAltText} />
        <div className={billionaireStyles.content}>
          <h2>{props.name}</h2>
          <span>{props.age}</span>
          <span>{props.rank}</span>
          <span>{props.netWorth}</span>
        </div>
    </div>
  );
};

export default Billionaire;
