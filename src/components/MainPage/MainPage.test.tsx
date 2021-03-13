import MainPage from './MainPage';
import React from 'react';
import {shallow} from 'enzyme';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchfield: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>);
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})