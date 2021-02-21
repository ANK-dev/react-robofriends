import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import CardList from '../../components/Cards/CardList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Scroll from '../../components/Scroll/Scroll'
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry';
import './App.css'
import {setSearchfield, requestRobots} from '../../actions'

const mapStateToProps = state => {
    return {
        searchfield: state.searchRobots.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch =>  {
    return {
        onSearchChange: event => dispatch(setSearchfield(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

function App(props) {
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
                <h1 className='f1'>RoboFriends</h1>
                <h1>Loading...</h1>
            </div>
        );
    else
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );

}


export default connect(mapStateToProps, mapDispatchToProps)(App);