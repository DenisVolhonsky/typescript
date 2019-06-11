import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow, mount, render } from 'enzyme'
import AuthNav from './AuthNav'

configure({ adapter: new Adapter() });

describe("AuthNav component testing:", () => {

  it("- check AuthNav rendering", () => {
    const wrapper = shallow(<AuthNav />);
    expect(wrapper.find('.AuthNav_nav').length).toEqual(1);
  });

});
