import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow, mount, render } from 'enzyme'
import Header from './Header'

configure({ adapter: new Adapter() });

describe("Header component testing:", () => {

  it("- check AuthNav rendering", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.Header').length).toEqual(1);
  });

});
