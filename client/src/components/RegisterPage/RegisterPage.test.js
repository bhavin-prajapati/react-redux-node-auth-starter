import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';
import { REGISTER_SUCCESS } from '../../utils/constants';
import { RegisterComponent } from './RegisterPage';

configure({ adapter: new Adapter() });

describe('Register Page', () => {
  let subject;
  let mockRegister;

  beforeEach(() => {
    mockRegister = jest.fn();
    subject = shallow(<RegisterComponent history={{ push: () => { } }} register={mockRegister} />);
  });

  it('Render component', () => {
    expect(subject).toHaveLength(1);
    expect(subject.find(ControlLabel).length).toEqual(3);
    expect(subject.find(ControlLabel).at(0).children().text()).toEqual('Username');
    expect(subject.find(ControlLabel).at(1).children().text()).toEqual('Email');
    expect(subject.find(ControlLabel).at(2).children().text()).toEqual('Password');
    expect(subject.find(Button).length).toEqual(2);
    expect(subject.find(Button).at(0).children().text()).toEqual('Register');
    expect(subject.find(Button).at(1).children().text()).toEqual('Sign In');
  });

  it('should handle input', () => {
    subject.find(FormControl).at(0).simulate('change', { target: { id: 'username', value: 'john' } });
    subject.find(FormControl).at(1).simulate('change', { target: { id: 'email', value: 'john@example.com' } });
    subject.find(FormControl).at(2).simulate('change', { target: { id: 'password', value: 'password' } });
    expect(subject.state()).toEqual({
      username: 'john',
      email: 'john@example.com',
      password: 'password'
    });
  });

  it('render notification if error', () => {
    subject.setProps({ error: 'server error' });
    expect(subject.find(Alert).html()).toEqual('<div role="alert" class="alert alert-danger"><p>server error</p></div>');
  });

  it('render notification if message', () => {
    subject.setProps({ error: null, message: 'registration success', pageStatus: REGISTER_SUCCESS });
    expect(subject.find(Alert).html()).toEqual('<div role="alert" class="alert alert-warning"><p>registration success</p></div>');
  });

  it('click register button', () => {
    subject.find(Button).at(0).simulate('click');
    subject.find(Button).at(1).simulate('click');
    expect(mockRegister).toHaveBeenCalled();
  });
});
