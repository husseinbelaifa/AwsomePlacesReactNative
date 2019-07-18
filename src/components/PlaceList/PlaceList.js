import React from "react";
import ListItem from "../ListItem/ListItem";
const PlaceList = props => {
  return props.places.map((place, i) => {
    return <ListItem key={i} placeName={place} />;
  });
};

export default PlaceList;
