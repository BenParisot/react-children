import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../src/components/Sidebar';

describe('Sidebar component', () => {
  it('creates a sidebar', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper).toMatchSnapshot();
  });
});
