import actionTypes from "./actionTypes";


export const driverListDataStart = ()=>({
  type:actionTypes.GET_DATA_START
})

export const driverListDataSUCCESS = (data)=>({
    type:actionTypes.GET_DATA_SUCCESS,payload: data
  })

export const driverListDataERROR = ()=>({
    type:actionTypes.GET_DATA_ERROR
  })