import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RegisterComponent } from './RegisterPage';

configure({ adapter: new Adapter() });

describe('Register Page', () => {
  let subject;
  let mockRegister;

  beforeEach(() => {
    mockRegister = jest.fn();
    subject = shallow(<RegisterComponent register={mockRegister} />);
  });

  it('Can Mount', () => {
    expect(subject).toHaveLength(1);
  });
});
