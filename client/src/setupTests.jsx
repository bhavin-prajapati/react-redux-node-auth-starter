/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';

export const expect = unexpected.clone().use(unexpectedReact);
const mockStore = configureStore([thunkMiddleware]);

configure({ adapter: new Adapter() });

export function connectSetup(Component, propsData, storeData) {
  const props = propsData;
  const store = mockStore(storeData);
  return shallow(<Component {...props} store={store} />);
}

export function setup(Component, propsData, options = {}) {
  const props = propsData;
  return shallow(<Component {...props} />, options);
}

global.shallow = shallow;
global.mount = mount;
global.render = render;
