import React, {Component} from 'react';
import store from '../store';
import { habitDeleted } from '../actions';
import '../styles/Habit.css';

class Habit extends Component{
    constructor(props){
        super(props);
        
        // Bind the functions to maintain the correct context
        this.handleDelete = this.handleDelete.bind(this);
    }

    // Bind the functions to maintain the correct context
    handleDelete(){
        // Dispatch the habitDeleted action with the id of the habit to be deleted to the reducer
        store.dispatch(habitDeleted(this.props.id))
        this.props.rerender();
    }

    render(){
        return(
            <div>
                <div className='flex-display habit'>
                    <div className='description'>
                        {/* Display the description of the habit */}
                        <li id="list-item">{this.props.description}</li>
                    </div>
                    {/* Delete button for the habit */}
                    <div id='delete-btn'>
                        <button id='delete' onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        );        
            
    }
}

export default Habit;