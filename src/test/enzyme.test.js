import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import TestComp from '../components/TestComp/TestComp';

// configure({
    //     adapter: new Adapter
    // })
    
    // describe('TestComponent:', ()=>{
        //     it('should exist', ()=>{
            //         // console.log(wrapper.find('div'));
            //         // expect(wrapper.find('div')).to.equal(true);
            //         // expect(wrapper.find('div')).to.have.lengthOf(1);
            //         expect((shallow(<AuthNav />)).find('ul').length).to.be.true;
            //         // expect((shallow(<AuthNav />)).to.equal(true));
            //     })
            // })
            

 

configure({ adapter: new Adapter() })

describe('Dummy test block:', function() {
 it('should pass dummy TestComp', () => {
 const wrapper = shallow(<TestComp />)
 expect(wrapper.contains(<div>Hello</div>)).to.be.true;
 })
})