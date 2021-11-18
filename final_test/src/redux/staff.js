/* eslint-disable no-fallthrough */
import * as Actiontype from "./Actiontype";

export const staffs = (state = {
    staff: [],
}, action) => {
    switch (action.type) {
        case Actiontype.ADD_STAFF:
            return { ...state, staff: action.payload}    
        default:
            return state
    }
}