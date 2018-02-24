import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from '../../../client/src/App.jsx';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import descriptionSample from '../../../db/data/description_sample.js';

configure({ adapter: new Adapter() });

describe('App', () => {
  // const flushPromises = () => new Promise(resolve => setImmediate(resolve));

  var mock = new MockAdapter(axios);
  const data = descriptionSample;
  mock.onGet('/rooms/2736358/description').reply(200, data);

  it('should render correctly', async () => {
    const output = shallow(
      <App roomId="2736358"></App>
    );
    output.update();
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
