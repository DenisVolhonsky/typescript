import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow, mount, render } from 'enzyme'
import App from './App'

configure({ adapter: new Adapter() });

describe("App component testing:", () => {

  it("- check App rendering", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').length).toEqual(1);
  });

});
