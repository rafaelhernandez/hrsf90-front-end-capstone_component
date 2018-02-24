import React from 'react';
import AmenityItem from './AmenityItem.jsx';

const Amenities = (props) => (
  <div className="div-description-amenities">
    {props.amenities.map((amenity, idx) => <AmenityItem key={idx} amenity={amenity}></AmenityItem>)}
  </div>
);
export default Amenities;
