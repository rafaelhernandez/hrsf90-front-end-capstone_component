import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Summary from '../../../client/src/Summary.jsx';
import descriptionSample from '../../../db/data/description_sample.js';

configure({ adapter: new Adapter() });

describe('Summary', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Summary desc={descriptionSample.summary}></Summary>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
