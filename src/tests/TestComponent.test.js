import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
import TestComponent from '../components/TestComponent/TestComponent';

configure({
    adapter: new Adapter
})

describe('TestComponent:', ()=>{
    it('should exist', ()=>{
        // console.log(wrapper.find('div'));
        // expect(wrapper.find('div')).to.equal(true);
        // expect(wrapper.find('div')).to.have.lengthOf(1);
        expect( (shallow(<TestComponent />)).find('div.container').length).toBe(1);
    })
})