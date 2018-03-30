import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DashboardComponent } from './DashboardPage';

configure({ adapter: new Adapter() });

describe('Dashboard Page', () => {
  let subject;
  let history;

  beforeEach(() => {
    history = { push: () => { } };
    subject = shallow(<DashboardComponent history={history} />);
  });

  it('Can Mount', () => {
    expect(subject).toHaveLength(1);
  });
});
