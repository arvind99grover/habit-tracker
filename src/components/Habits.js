import React, {Component} from "react";
import store from '../store';
import Habit from './Habit';
import HabitForm from "./HabitForm";

class Habits extends Component{
    constructor(props){
        super(props);

        // Get the initial state of habits from the store
        this.state = {
            habits: store.getState()
        }

        this.rerender = this.rerender.bind(this);
    }


    // Rerender the component whenever the state of a child component changes
    rerender(){
        this.setState({
            habits: store.getState()
        });
        console.log("rerendered");
    }

    render(){
        
        return(
            <div>
                {/* Form for creating a new habit */}
                <HabitForm rerender={this.rerender} habits={this.state.habits}/>
                <ul style={{listStyleType: "none", marginBlockStart: "0px", paddingInlineStart: "0px"}}>
                    
                    {/* Map over the habits array and create a Habit component for each item */}
                    {this.state.habits !== null && this.state.habits.map(habit => (
                        <Habit 
                            description = {habit.description} 
                            key = {habit.id} 
                            id = {habit.id}
                            rerender={this.rerender}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Habits;