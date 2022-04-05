import * as ActionTypes from "./ActionTypes"
import { baseUrl } from "../shared/baseUrl"
import Department from "../components/Department"
import { actions } from "react-redux-form"

export const addNewEmployee = (newEmployee) => ({
    type: ActionTypes.ADD_NEW_EMPLOYEE,
    payload: newEmployee
}) 

// fetch staff from server

export const fetchStaffs = () => (dispatch) => { 
    
    dispatch(staffLoading(true));
    
  fetch( baseUrl + 'staffs')    
    .then(response => {
        console.log('response', response)
        if (response.ok) {
        return response;
        } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        response = error.response
        throw error;
        }
    })
    .then(response => response.json())
    .then(staff => dispatch(addStaff(staff)))
    .catch(error => dispatch(staffLoadingFailed(error.message)) )       
}

export const addStaff = (staff) => ({
    type: ActionTypes.LOAD_STAFFS,
    payload: staff
})

export const staffLoading = () => ({
    type: ActionTypes.STAFFS_LOADING,
})

export const staffLoadingFailed = (errMess) => ({
    type: ActionTypes.STAFFS_LOADING_FAILED,
    payload: errMess
})

// fetch departments from the server

export const fetchDepartments = () => (dispatch) => {
    return fetch(baseUrl + 'departments')
            .then(Response => Response.json())
            .then(deparments => dispatch(loadDepartments(deparments)))
}

export const loadDepartments = (departments) => ({
    type: ActionTypes.LOAD_DEPARTMENTS,
    payload: departments
})

// fetch staff salary

export const fetchSalary = () => (dispatch)=> {
    return fetch (baseUrl + 'staffsSalary')
            .then(response => response.json())
            .then(staffSalary => dispatch(loadStaffSalary(staffSalary)))
}

export const loadStaffSalary = (staffSalary) => ({
    type: ActionTypes.LOAD_STAFF_SALARY,
    payload: staffSalary
})