import Card from './Card';
import React from 'react';
import {shallow} from 'enzyme';

it('expect to render Card component', () => {
    expect(shallow(<Card/>)).toMatchSnapshot();
});