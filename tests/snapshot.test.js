import React from 'react';
import { shallow } from 'enzyme';
import Good from '../src/components/Good';

describe('Good component', () => {
  it('returns Good message', () => {
    const wrapper = shallow(<Good />);
    expect(wrapper).toMatchSnapshot();
  });
});
