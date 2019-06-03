import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
import Header from '../Header/Header';

configure({
    adapter: new Adapter
})

describe('TestComponent:', ()=>{
    it('should exist', ()=>{
        // console.log(wrapper.find('div'));
        // expect(wrapper.find('div')).to.equal(true);
        // expect(wrapper.find('div')).to.have.lengthOf(1);
        expect( (shallow(<Header />)).find('header').length).toBe(1);
    })
})