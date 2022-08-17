import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
// import './index.css';
import App from './App';
import BaiTapComponent from './pages/Component/BaiTapComponent/BaiTapComponent';
import BaiTapGlasses from './pages/State/BaiTapGlasses/BaiTapGlasses';
import ExerciseCart from './pages/Props/BaiTapGioHang/ExerciseCart';
import reportWebVitals from './reportWebVitals';
import WelcomePage from './pages/Welcome/WelcomePage';
//
import {Provider} from 'react-redux';
import BaiTapRedux from './pages/ReactJS_Form/BaiTapRedux/BaiTapRedux';
import { store } from './redux/configStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<WelcomePage />}></Route>
          <Route path="*" element={<Navigate to="" />}></Route>
          <Route path="component" element={<BaiTapComponent />}></Route>
          <Route path="glasses" element={<BaiTapGlasses />}></Route>
          <Route path="exercisecart" element={<ExerciseCart />}></Route>
          <Route path="redux" element={<BaiTapRedux />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
{/* 
      <BaiTapGlasses/>
      <ExerciseCart/> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
