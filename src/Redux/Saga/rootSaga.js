import { put, takeLatest, all, call } from 'redux-saga/effects';
import actionTypes from '../Action/actionTypes';
import { driverListDataSuccess,driverListDataError } from '../Action/Action';
import { HomeData} from '../Api';


function* watchdriveList(){
   
}

function* FetchDriverListData(){
    try {
        const response = yield call(HomeData.fetchHomeData);
        const { data } = response;
        console.log("show data of redux-saga  =>", data);
        yield put(driverListDataSuccess(data));
    } catch (error) {
        yield put(driverListDataError());
    }

}

export default function* rootSaga(){
    yield takeLatest(
        actionTypes.GET_DATA_START,
        FetchDriverListData
    )
    // yield all([
    //     watchdriveList()
    // ])
}