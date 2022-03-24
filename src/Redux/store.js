import { createStore } from "redux";
import { STAFFS } from "../shared/staffs";


const reducer = (state = {
    staffList : STAFFS
}, action) => {
    switch(action.type){
        case 'ADD_NEW_EMPLOYEE':
            return state.staffList = STAFFS.push(action.payload)
        default:
            return state
    }

}
export const store = createStore(reducer)