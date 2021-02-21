import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import CardList from '../../components/Cards/CardList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Scroll from '../../components/Scroll/Scroll'
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry';
import './App.css'
import {setSearchfield} from '../../actions'

const mapStateToProps = state => {
    return {
        searchfield: state.searchfield
    }
}

const mapDispatchToProps = dispatch =>  {
    return {
        onSearchChange: event => dispatch(setSearchfield(event.target.value))
    }
}

function App(props) {
    const [robots, setRobots] = useState([]);
    const { searchfield, onSearchChange } = props;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)});
        }, [])

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(
            searchfield.toLowerCase()
        );
    })

    if (robots.length === 0)
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