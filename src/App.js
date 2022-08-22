import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { driverListDataStart } from './Redux/Action/Action';
import FindArray from './array/findArray';
import MockData from './mockData'

function App() {
  // console.log(process.env.REACT_APP_API_URL);
  // let dispatch = useDispatch()
  // const { landingData } = useSelector((state) => state.driverPageReducer)
  // console.log(landingData);
  // useEffect(() => {
  //   dispatch(driverListDataStart())
  // }, [dispatch])


  return (
    <div className="App">

      <h1>Redux-saga</h1>
      {/* {landingData.splice(0, 5).map((card) => (
        <p>{card.title}</p>
      ))} */}
      {/* <FindArray /> */}
      < MockData />

    </div>
  );
}

export default App;
