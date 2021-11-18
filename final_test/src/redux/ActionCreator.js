import * as Actiontype from "./Actiontype";

export const fetchStaff = () => (dispatch) => {
    return fetch('https://rjs101xbackend.herokuapp.com/staffs')
    .then((response) => response.json())
    .then((response) => dispatch(addStaff(response)))
}

export const addStaff = (staff) => ({
    type: Actiontype.ADD_STAFF,
    payload: staff,
})