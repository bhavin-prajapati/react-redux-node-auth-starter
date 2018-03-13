import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DashboardComponent } from './DashboardPage';

configure({ adapter: new Adapter() });

describe('Dashboard Page', () => {
  let subject;
  let mockLogout;

  beforeEach(() => {
    mockLogout = jest.fn();
    subject = shallow(<DashboardComponent logout={mockLogout} />);
  });

  it('Can Mount', () => {
    expect(subject).toHaveLength(1);
  });
});
