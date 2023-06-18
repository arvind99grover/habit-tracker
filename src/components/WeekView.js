import React, {Component} from "react";
import Week from "./Week";
import store from "../store";
import { v4 as uuid } from 'uuid';

class WeekView extends Component{
    constructor(props){
        super(props);
        // Getting the state of the habits from the store and setting the initial state with it
        this.state = {
            currentHabits: store.getState()
        }
        
        // Function binding
        this.rerenderWeekView = this.rerenderWeekView.bind(this);
    }

    // Rerender the component whenever the state of a child component changes
    rerenderWeekView(){
        this.setState({
            currentHabits: store.getState()
        });
    }

    render(){
        return(
            <div>
                <div>
                    {/* Get the current month */}
                    <h3 style={{ borderRightWidth: '4px', borderRightStyle: 'solid', borderLeftWidth: '4px', borderLeftStyle: 'solid', borderTopWidth: '4px', borderTopStyle: 'solid', borderBottomWidth: '4px', borderBottomStyle: 'solid', marginRight: '250px', marginLeft: '260px', color: 'rgb(203, 27, 27)'
}}>{new Date().toLocaleString('default', { month: 'long' })}</h3>
                </div>
                <ul style={{listStyleType: "none", marginBlockStart: "0px", paddingInlineStart: "0px"}}>
                    {/* Map over the list of habits and create a Week component for each habit */}
                    {this.state.currentHabits.map(habit => (
                        <Week
                            description={habit.description} 
                            key={uuid()}
                            id={habit.id}
                            weekStatus={habit.weekStatus}
                            rerenderWeekView={this.rerenderWeekView}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default WeekView;