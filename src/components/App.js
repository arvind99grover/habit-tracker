import React, { Component } from 'react';
import '../styles/App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import WeekView from './WeekView';
import Habits from './Habits';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* Navigation links for different sections of the application */}
        <nav className='App-nav'>
          <NavLink activeclassname="active" className="links" exact="true" to="/">Home</NavLink>
          <NavLink activeclassname="active" className="links" exact="true" to="/week-view">Week View</NavLink>
        </nav>

        {/* Setting up routes for different sections of the application */}
        <Routes>
          {/* Default route that directs users to the Habits page */}
          <Route path='/' element={<Habits />} /> 
          {/* Route for displaying the status of each habit for the entire week */}
          <Route path='/week-view' element={<WeekView />}/>
        </Routes>
      </div>
    );
  }
}

export default App;

