import * as actionTypes from "../Actions/type"

export const todoReducers = (state=[], action) =>{

    switch(action.type){
            case actionTypes.ADDNEW_TODO:
                return[action.payload, ...state]

        default:
            return state;
    }

}