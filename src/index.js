import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ProfileForm} from './personalProfile';
import {Personal} from './components/personal';
import {Contact} from './components/contact';
import {Education} from './components/education';
import {Progress} from './components/progress';
import {Remarks} from './remarksForStudents'
import { ElementLoginPage } from './login';
// import { ElementLoginSuccessfull } from './loginSucces';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Remarks/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
