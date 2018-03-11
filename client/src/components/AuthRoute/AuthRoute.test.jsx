import React from 'react';
import AuthRoute from './AuthRoute';
import '../../setupTests';

describe('Authenticaion Route', () => {
  it('Can Mount', () => {
    const mockComponent = {};
    const subject = shallow(<AuthRoute
      Component={mockComponent}
    />);
    expect(subject).toHaveLength(1);
  });

  it('Redirects to URL', () => {
    const mockComponent = {};
    const subject = shallow(<AuthRoute
      Component={mockComponent}
    />);
    expect(subject.text()).toEqual('<Route />');
  });

  it('Renders Component', () => {
    class mockComponent extends React.PureComponent {
      componentWillMount() {
      }
    }
    const subject = shallow(<AuthRoute
      Component={mockComponent}
      pageStatus="login_success"
    />);
    expect(subject.text()).toEqual('<Route />');
  });
});
