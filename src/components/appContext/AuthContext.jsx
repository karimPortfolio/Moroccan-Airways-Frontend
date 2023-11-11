import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NotificationsCont } from './NotificationsContext';

export const myAuthContext = createContext();

export default function AuthContext(props) {

    // Login States
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [dataLogin, setDataLogin] = useState('');

    //Register States
    const [messageRegister, setMessageRegister] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emptyInputs, setEmptyInputs] = useState('');

    //Dashboard Info
    const [logedUserName, setLogedUserName] = useState('');
    const [logedUserEmail, setLogedUserEmail] = useState(dataLogin.email);

    //Auth
    const [isAuthincated, setIsAuthincated] = useState(false);
    const authStatus = window.localStorage.getItem('auth');

    //navigation
    const navigate = useNavigate();

    //verify loading
    const [loading, setLoading] = useState(false);

    //user reservations
    const [userReserv, setUserReserv] = useState("");

    //session expire
    const [expireMsg, setExpireMsg] = useState("");
    const buttonExpire = useRef();


    //Register function
    const handleSubmitRegister = e => {
        setLoading(true);
        e.preventDefault();
        setTimeout(() => {
            if (email !== '' && password !== '') {
                let data = new FormData();
                data.append('name', name);
                data.append('email', email);
                data.append('password', password);
                let api_url = "https://moroccan-flights.000webhostapp.com/api/users/store";
                axios.post(api_url, data)
                    .then(res => {
                        if (res.status == 200) {
                            setMessageRegister(res.data);
                        }
                    })
                    .catch(err => setMessageRegister({ message: "Oops! something went wrong. try again later." }));
            } else {
                setEmptyInputs('All inputs fields must be full.')
            }
            setLoading(false);
        }, 6000)
    }

    //Login funcition
    const handleSubmitLogin = e => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (emailLogin !== '' && passwordLogin !== '') {
                const userData = new FormData();
                userData.append("email", emailLogin);
                userData.append("password", passwordLogin);


                let api_url = "https://moroccan-flights.000webhostapp.com/api/users/show";
                axios.post(api_url, userData)
                    .then(res => {
                        if (res.status === 200) {
                            setDataLogin(res.data);
                            if (res.data.message == "Loged successfuly") {
                                setIsAuthincated(true);
                                setTimeout(() => {
                                    window.location = "/";
                                }, 300);
                            }
                        }
                    })
                    .catch(err => setDataLogin({ message: "something went wrong, try again later." }));
            } else {
                setEmptyInputs('All input fields must be full.')
            }
        }, 4000)

    }

    //checking Auth

    useEffect(() => {
        if (dataLogin !== '' || messageRegister !== '') {

            if (dataLogin.message == 'Loged successfuly') {
                setLogedUserName(dataLogin.user.name);
                window.localStorage.setItem('user-name', dataLogin.user.name);
                window.localStorage.setItem('user-id', dataLogin.user.id);
                window.localStorage.setItem('user-email', dataLogin.user.email);
                window.localStorage.setItem('auth', 'true')
            }
            else if (messageRegister.message == 'Your Account successfuly created') {
                setTimeout(() => {
                    navigate('/signin', {replace:true});
                }, 3000);

            }
        }

    }, [dataLogin, messageRegister])


    useEffect(() => {
        if (authStatus == "true") {
            setIsAuthincated(true);
        }
    }, [dataLogin, messageRegister, isAuthincated])

    useEffect(() => {
        if (isAuthincated) {
            //get user reservations
            var userID = window.localStorage.getItem('user-id');
            var url3 = `https://moroccan-flights.000webhostapp.com/api/users/reservations/${userID}`;
            axios.get(url3)
                .then(res => setUserReserv(res.data))
                .catch(err => { console.log("Aww! Something happened") })
        }
    }, [isAuthincated])

    //handle activity

    const [active, setActive] = useState(false);

    const handleChangeActivity = status => {
        setActive(status)
    }

    //dashboard API call
    const [numBooks, setNumBooks] = useState(0);
    const [totalMoneySpends, setTotalMoneySpends] = useState(0);

    useEffect(() => {
        var userID = window.localStorage.getItem('user-id');
        const url = `https://moroccan-flights.000webhostapp.com/api/dashboard/${userID}/count`;
        const url2 = `https://moroccan-flights.000webhostapp.com/api/dashboard/${userID}/total`;
        axios.get(url)
            .then(res => {
                if (res.status === 200) {
                    setNumBooks(res.data);
                }
            })

        axios.get(url2)
            .then(res => {
                if (res.status === 200) {
                    setTotalMoneySpends(res.data);
                }
            })
    }, [])

    const values = {
            messageRegister, setMessageRegister, name,
            setName, email, setEmail, password, emptyInputs,
            setPassword, dataLogin, setDataLogin, userReserv,
            passwordLogin, setPasswordLogin, loading,
            emailLogin, setEmailLogin, logedUserName, setLogedUserName,
            logedUserEmail, setLogedUserEmail, setIsAuthincated,
            isAuthincated, handleSubmitLogin, handleSubmitRegister, active,
            handleChangeActivity, expireMsg, buttonExpire, numBooks, totalMoneySpends
    }

    return (
        <myAuthContext.Provider value={values}>
            {props.children}
        </myAuthContext.Provider>
    )
}
