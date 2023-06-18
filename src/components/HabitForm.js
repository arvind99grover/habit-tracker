import React, {Component} from 'react';
import '../styles/HabitForm.css';
import store from '../store';
import { habitAdded } from '../actions';

class HabitForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            habit: ""
        }
        // Bind the functions to maintain the correct context
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Function to keep track of the changes in the input through React state
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    // Function to keep track of the changes in the input through React state
    handleSubmit(evt){
        evt.preventDefault();
        // Dispatch the habitAdded action with the description of the habit to be added to the reducer
        store.dispatch(habitAdded(this.state.habit));
        this.setState({
            habit: ""   // Reset the form value
        });
        
        this.props.rerender();
    }

    render(){
        return(
            <div>
                {/* Form for creating a habit */}
                <form id="form" onSubmit={this.handleSubmit}>
                    {/* Label for the habit input */}
                    <label id="label" htmlFor='habit'>Add a Habit </label>
                    {/* Inputbox for habit */}
                    <input
                        id='habit' 
                        name='habit'
                        value={this.state.habit}
                        onChange={this.handleChange}
                        placeholder='Add a Habit...'
                        required
                    />
                    {/* Button To Add the Habit. */}
                    <button id="add-btn" style={{ marginLeft: '17px', paddingRight: '9px', paddingLeft: '11px' }} >  Add </button>

                </form>
            </div>
        );
    }
}

export default HabitForm;