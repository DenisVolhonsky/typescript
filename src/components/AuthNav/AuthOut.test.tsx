import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow, mount, render } from 'enzyme'
import AuthOut from './AuthNav'

configure({ adapter: new Adapter() });

describe("AuthOut component testing:", () => {

  it("- check AuthOut rendering", () => {
    const wrapper = shallow(<AuthOut />);
    expect(wrapper.find('.AuthNav_nav').length).toEqual(1);
  });

});
