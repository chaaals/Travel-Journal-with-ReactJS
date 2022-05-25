import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Entry.css";

export default function Entry(props) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props.item;

  const coverImg = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="entry-component">
        <div className="entry-img" style={coverImg}></div>

        <div className="entry-content">
          <div className="entry-content-location spacing-xs">
            <div>
              <FontAwesomeIcon
                className="entry-content-icon small-text"
                icon={faLocationDot}
              />
              <p className="location upper-case letter-space small-text">
                {location}
              </p>
            </div>
            <a className="small-text" href={googleMapsUrl}>
              View on Google Maps
            </a>
          </div>

          <h1 className="medium-text spacing-l">{title}</h1>
          <p className="bold small-text spacing-s">
            {startDate} - {endDate}
          </p>
          <p className="entry-content-description regular small-text line-height">
            {description}
          </p>
        </div>
      </div>
      <div className="border-bottom spacing-l"></div>
    </>
  );
}
