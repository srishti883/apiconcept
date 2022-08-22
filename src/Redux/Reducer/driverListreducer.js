import UserActionTypes from "../Action/actionTypes";


const initialState = {
    
    error: false,
   
    landingData: [],
};

const driverPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.GET_DATA_START:
            return { ...state, error: false };
        case UserActionTypes.GET_DATA_SUCCESS:
            return {
                ...state,
                landingData: action.payload,
            };
        case UserActionTypes.GET_DATA_ERROR:
            return { ...state, error: true };

        default: return state
    }

    
};

export default driverPageReducer;
