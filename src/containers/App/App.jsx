import React from 'react';
import {connect} from 'react-redux'
import {setSearchfield, requestRobots} from '../../actions';

import MainPage from '../../components/MainPage/MainPage';

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
    return <MainPage {...props}/>
}

export default connect(mapStateToProps, mapDispatchToProps)(App);