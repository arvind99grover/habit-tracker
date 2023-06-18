import React, { Component } from "react";
import store from "../store";
import { statusChanged } from '../actions';
import '../styles/Day.css';

class Day extends Component{
    constructor(props){
        super(props);
        // Bind the function to maintain the correct context
        this.changeStatus = this.changeStatus.bind(this);
    }
    // Function for toggling the status of the day
    changeStatus(){
        // Dispatch the statusChanged action to update the habit's status in the store
        store.dispatch(statusChanged(this.props.id, this.props.idx));
        this.props.rerenderWeekView();
    }

    render(){
        return(
            <div className={(this.props.date.getDate() === new Date().getDate()) ? "today day" : "day"}>
                {/* Display the day of the week */}
                <div>
                    {this.props.date.toString().split(' ')[0]}
                </div>
                {/* Display only the date of the day */}
                <div>
                    {this.props.date.getDate()}
                </div>
                {/* Display only the date of the day */}
                <div id="status" onClick={this.changeStatus}>
                    {
                        // Set the icon based on the status
                        (this.props.weekStatus[this.props.idx] === "done") ?
                            <i id="check-icon" className="fa fa-check-circle"></i>
                        : (this.props.weekStatus[this.props.idx] === "not-done" && <i id="cross-icon" className="fa fa-times-circle"></i> )
                    }
                </div>
            </div>
        );
    }
}

export default Day;