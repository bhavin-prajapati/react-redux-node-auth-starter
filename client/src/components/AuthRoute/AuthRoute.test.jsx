import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AuthRoute } from './AuthRoute';

configure({ adapter: new Adapter() });

describe('Authenticaion Route', () => {
  let subject;
  let mockComponent;

  beforeEach(() => {
    mockComponent = () => {};
    subject = shallow(<AuthRoute
      component={mockComponent}
    />);
  });

  it('Can Mount', () => {
    expect(subject).toHaveLength(1);
  });

  it('Redirects to URL', () => {
    expect(subject.text()).toEqual('<Route />');
  });
});
