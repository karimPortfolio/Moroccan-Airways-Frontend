import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyAppContext from './components/appContext/myAppContext';
import {BrowserRouter} from 'react-router-dom';
//import { Provider } from 'react-redux';
import AuthContext from './components/appContext/AuthContext';
import ReservationContext from './components/appContext/ReservationContext';
import ContactContext from './components/appContext/ContactContext';
import NotificationsContext from './components/appContext/NotificationsContext';
import TimeAgo from 'javascript-time-ago';
import en from "javascript-time-ago/locale/en.json"
import ru from "javascript-time-ago/locale/ru.json"

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <Provider store={store}> */}
        <BrowserRouter>
            <AuthContext>
                    <MyAppContext>
                        <ReservationContext>
                            <ContactContext>
                                <NotificationsContext>
                                   <App />
                                </NotificationsContext>
                            </ContactContext>
                        </ReservationContext>
                    </MyAppContext>
            </AuthContext>
        </BrowserRouter>
     {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
