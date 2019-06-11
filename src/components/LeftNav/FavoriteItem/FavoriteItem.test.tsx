import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow, mount, render } from 'enzyme'
import sinon from 'sinon'
import FavoriteItem from './FavoriteItem'

configure({ adapter: new Adapter() });

describe("FavoriteItems component testing:", () => {
    const props = {
        id: 320288,
        title: 'Dark Phoenix',
        release_date: '2019-06-05',
        vote_average: 6.2,
        poster_path: '/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg',
        deleteFavoriteItem: () => {}
    }

    it(' -check rendering', () => {
        const wrapper = shallow(<FavoriteItem {...props} />)
        expect(wrapper.find('.FavoriteItem').length).toEqual(1)
    // console.log('WRAPPER', wrapper.debug());
    })

    it(' -check delete button', () => {
        const mockOnClick = sinon.spy()
        const wrapper = shallow(<FavoriteItem  {...props} deleteFavoriteItem={mockOnClick} />)
        wrapper.find('button').simulate('click')
        // console.log(mockOnClick)
        expect(mockOnClick.calledOnce).toEqual(true)
    })
});
