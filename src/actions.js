import * as actions from './actionTypes';

// Action for adding a habit
export function habitAdded(description){
    return{
        type: actions.HABIT_ADDED,      // Set the type of the action to HABIT_ADDED from actionTypes.js
        payload: {
            description: description    // Provide the description as payload for the action
        }
    };
}

// Action for deleting a habit based on the habit ID
export function habitDeleted(id){
    return {
        type: actions.HABIT_DELETED,
        payload: {
            id: id
        }
    }
}

// Action for changing the status of a day based on the habit ID and the index of the day in the weekStatus array
export function statusChanged(id, idx){
    return {
        type: actions.STATUS_CHANGED,
        payload: {
            id: id,
            idx: idx,
        }
    }
}