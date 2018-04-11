import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { NavigationBarComponent } from './NavigationBar';

configure({ adapter: new Adapter() });

describe('Navigation Bar', () => {
  let subject;

  describe('Not logged in', () => {
    beforeEach(() => {
      subject = shallow(<NavigationBarComponent />);
    });

    it('Render component', () => {
      expect(subject.find(Navbar)).toHaveLength(1);
      expect(subject.find(NavDropdown)).toHaveLength(0);
    });
  });

  describe('Logged in', () => {
    beforeEach(() => {
      subject = shallow(<NavigationBarComponent
        user={{ username: 'John' }}
      />);
    });

    it('Render component', () => {
      expect(subject.find(Navbar)).toHaveLength(1);
      expect(subject.find(NavDropdown)).toHaveLength(1);
      expect(subject.find(NavDropdown).props().title).toEqual('John');
    });
  });
});
