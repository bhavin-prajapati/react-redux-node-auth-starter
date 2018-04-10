import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DashboardComponent } from './DashboardPage';

configure({ adapter: new Adapter() });

describe('Dashboard Page', () => {
  let subject;
  let history;
  let mockGetUser;
  let mockLoadDashboard;

  describe('Load dashboard', () => {
    beforeEach(() => {
      history = { push: () => { } };
      mockGetUser = jest.fn();
      mockLoadDashboard = jest.fn();
      subject = shallow(<DashboardComponent
        history={history}
        getUser={mockGetUser}
        loadDashboard={mockLoadDashboard}
      />);
    });

    it('Render', () => {
      expect(subject).toHaveLength(1);
    });
  });

  describe('Render component', () => {
    beforeEach(() => {
      history = { push: () => { } };
      mockGetUser = jest.fn();
      subject = shallow(<DashboardComponent
        history={history}
        getUser={mockGetUser}
        dashboard={{ data: 'testing 123' }}
      />);
    });

    it('Render', () => {
      expect(subject).toHaveLength(1);
    });
  });

  describe('Get User', () => {
    beforeEach(() => {
      history = { push: () => { } };
      mockGetUser = jest.fn();
      document.cookie = '_sid=12345;max-age=60';
      subject = shallow(<DashboardComponent
        history={history}
        getUser={mockGetUser}
        dashboard={{ data: 'testing 123' }}
      />);
    });

    it('Render', () => {
      expect(subject).toHaveLength(1);
    });
  });
});
