import React from 'react';

const Header = (props) => (
  <div className="div-description-header">
    <div className="div-description-property-type">{props.desc.room_type_category === 'entire_home' ? ('Entire ' + props.desc.property_type).toUpperCase() : props.desc.property_type.toUpperCase()}</div>
    <div className="div-description-name">{props.desc.name}</div>
    <div className="div-description-city">{props.desc.city}</div>
    <div className="div-description-user-thumbnail_url">{props.desc.user.thumbnail_url}</div>
    <div className="div-description-guests">{props.desc.person_capacity === 1 ? '1 guest' : props.desc.person_capacity.toString() + ' guests'}</div>
    <div className="div-description-bedrooms">{props.desc.bedrooms === 0 ? 'Studio' : props.desc.bedrooms === 1 ? '1 Bedroom' : `${props.desc.bedrooms} Bedrooms`}</div>
    <div className="div-description-beds">{props.desc.beds === 1 ? '1 bed' : props.desc.beds.toString() + ' beds'}</div>
    <div className="div-description-bathrooms">{props.desc.bathrooms === 1 ? '1 bath' : props.desc.bathrooms.toString() + ' bathrooms'}</div>
  </div>
);

export default Header;
