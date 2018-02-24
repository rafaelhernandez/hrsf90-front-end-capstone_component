import React from 'react';
import Header from './Header.jsx';
import Summary from './Summary.jsx';
import SpaceDescription from './SpaceDescription.jsx';
import ContactHost from './ContactHost.jsx';
import Amenities from './Amenities.jsx';
import HouseRules from './HouseRules.jsx';
import Cancellations from './Cancellations.jsx';

const Description = (props) => (
  <div className="div--description-description">
    <Header desc={props.desc.description}></Header>
    <Summary summary={props.desc.description.summary}></Summary>
    <SpaceDescription desc={props.desc.description.description}></SpaceDescription>
    <ContactHost></ContactHost>
    <Amenities amenities={props.desc.description.amenities}></Amenities>
    <HouseRules desc={props.desc.description}></HouseRules>
    <Cancellations cancellationPolicy={props.desc.description.cancellation_policy}></Cancellations>
  </div>
);

export default Description;
