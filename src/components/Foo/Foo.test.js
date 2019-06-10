
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow, mount, render } from 'enzyme'
import Foo from './Foo'

configure({ adapter: new Adapter() });

describe("Component tests:", function() {
  it("test1", function() {
    expect(shallow(<Foo />).contains(<div className="foo" />)).toBe(true);
  });

  it("test2", function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it("test3", function() {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });
});


