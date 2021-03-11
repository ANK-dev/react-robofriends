import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div
            className='pa2'
            style={{
                boxShadow: '0 15px 15px #222',
                position: 'relative',
                zIndex: '1'
            }}
        >
            <input
                aria-label='Search Robots'
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;