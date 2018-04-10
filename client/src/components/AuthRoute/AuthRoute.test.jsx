import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AuthRoute } from './AuthRoute';

configure({ adapter: new Adapter() });

describe('Authenticaion Route', () => {
  let subject;
  let mockComponent;

  describe('Redirect', () => {
    beforeEach(() => {
      mockComponent = () => { };
      subject = shallow(<AuthRoute
        component={mockComponent}
      />);
    });

    it('Redirects to URL', () => {
      expect(subject).toHaveLength(1);
      expect(subject.text()).toEqual('<Redirect />');
    });
  });

  describe('Component', () => {
    beforeEach(() => {
      mockComponent = () => { };
      document.cookie = '_sid=12345;max-age=60';
      subject = shallow(<AuthRoute
        component={mockComponent}
      />);
    });

    it('Renders the component', () => {
      expect(subject).toHaveLength(1);
      expect(subject.text()).toEqual('<mockComponent />');
    });
  });
});
