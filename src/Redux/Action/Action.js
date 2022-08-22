import actionTypes from "./actionTypes";


export const driverListDataStart = ()=>({
  type:actionTypes.GET_DATA_START
})

export const driverListDataSuccess = (data)=>({
    type:actionTypes.GET_DATA_SUCCESS,
    payload: data
  })

export const driverListDataError = ()=>({
    type:actionTypes.GET_DATA_ERROR
  })