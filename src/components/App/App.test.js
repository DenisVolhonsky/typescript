import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow, mount, render } from 'enzyme'
import App from './App'
import Header from '../Header/Header'
// import Header from './Header'

configure({ adapter: new Adapter() });

describe("App component testing:", function() {
  it("App test1", function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').length).toEqual(1);
    // console.log('WRAPPER', wrapper.debug());
    

    // expect(wrapper.find(<div className="App" />)).toBe(true);
  });

  it("App test2", function() {
    // expect(shallow(<App />).is('.App')).toBe(true);
  });

  it("App test3", function() {
    // expect(mount(<App />).find('.App').length).toBe(1);
  });
});
