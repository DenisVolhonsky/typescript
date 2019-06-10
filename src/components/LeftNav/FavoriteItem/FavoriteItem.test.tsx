import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow, mount, render } from 'enzyme'
import FavoriteItem from './FavoriteItem'
import sinon from 'sinon'

configure({ adapter: new Adapter() });

describe("App component testing:", function() {
    const props = {
        id: 232,
        title: 'LALA',
        release_date: '123',
        vote_average: 123,
        poster_path: '123',
        deleteFavoriteItem: () => {}
    }

    it("App test1", function() {
        const wrapper = shallow(<FavoriteItem {...props} />)
        expect(wrapper.find('.FavoriteItem').length).toEqual(1)
    // console.log('WRAPPER', wrapper.debug());
    })
    it('should delete to favourite list', () => {
        const mockOnClick = sinon.spy()
        const wrapper = shallow(<FavoriteItem  {...props} deleteFavoriteItem={mockOnClick} />)
        wrapper.find('button').simulate('click')
        console.log(mockOnClick)
        expect(mockOnClick.calledOnce).toEqual(true)
    })
});
