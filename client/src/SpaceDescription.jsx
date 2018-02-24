import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const SpaceDescription = (props) => (
  <div className="div-description-space-description">
    <div className="div-description-open-fold">
      <a href="#">Read more about the space <Glyphicon glyph="chevron-down"/></a>
    </div>
    <div>
      {props.desc}
    </div>
    <div className="div-description-hide-fold">
      <a href="#">Hide <Glyphicon glyph="chevron-up"/></a>
    </div>
  </div>
);

export default SpaceDescription;
