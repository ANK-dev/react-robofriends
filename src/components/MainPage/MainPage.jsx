
import React, { useEffect } from 'react';

import CardList from '../../components/Cards/CardList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Scroll from '../../components/Scroll/Scroll'
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry';
import Header from '../../components/Header/Header';

import './MainPage.css'

function MainPage(props) {
    const {
        searchfield,
        onSearchChange,
        onRequestRobots,
        robots,
        isPending
    } = props;

    useEffect(() => {
            onRequestRobots()
        }, [])

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(
            searchfield.toLowerCase()
        );
    })

    if (isPending)
        return (
            <div className='tc'>
                <Header/>
                <h1>Loading...</h1>
            </div>
        );
    else
        return (
            <div className='tc'>
                <Header/>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );

}

export default MainPage;