import React, {Component} from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor() {
        super ()
        this.state = {
            robots: [],
            searchField: ''
        }
        // console.log('1 - constructor')
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users') //fetch is a method from window object
            .then(response => {
                return response.json();
            })
            .then(users => this.setState({robots: users}))
        // console.log('2 - mount')
    }
    
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const {robots, searchField} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        // console.log('3 - render')


        //if the list of robots is too big and takes a long time to load, this appears:
        return !robots.length ? 
        <h1>Loading...</h1> :
        ( 
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}  

export default App;