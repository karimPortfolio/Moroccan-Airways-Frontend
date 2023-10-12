import axios from 'axios';
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { flightContext } from './myAppContext';
import { myAuthContext } from './AuthContext';

export const myReservationContext = createContext();

export default function ReservationContext(props) {

  const [reserIdd, setReserId] = useState(0);
  const [title, setTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationality, setNationality] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [passport, setPassport] = useState('');
  const [countryResidence, setCountryResidence] = useState('');
  const [emailAddr, setEmailAddr] = useState('');
  const [mobilenum, setMobileNum] = useState('');
  const [mobileCode, setMobileCode] = useState('');
  const [checkAlert, setCheckAlert] = useState(false);
  const [extras, setExtras] = useState(0);
  const [passeAdultes, setPassAdultes] = useState(1)
  const [passChild, setPassChild] = useState(0)
  const [priceTotalToPay, setPriceTotalToPay] = useState(0);
  const [bookPicked, setBookPicked] = useState({})
  const extrasLugg = useRef([]);
  const [numAdultesPrice, setNumAdultesPrice] = useState(0);
  const [numChildrenPrice, setNumChildrenPrice] = useState(0);
  const [classChoice, setClassChoice] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvvNum, SetCvvNum] = useState('');
  const [cardOwnerName, setCardOwnerName] = useState('');
  const [dateExpirMonth, setDateExpirMonth] = useState('');
  const [dateExpirYear, setDateExpirYear] = useState('');
  const [checkCard, setCheckCard] = useState('');
  const { isAuthincated } = useContext(myAuthContext)
  const [reservationStatus, setReservationStatus] = useState('');
  const [totNumPassengers, setTotNumPassengers] = useState(0);
  const [cancellationMsg, setCancellationMsg] = useState("");
  const [open, setOpen] = React.useState(false);


  const navigate = useNavigate();


  //check all required reservation confirmation details
  const checkAllRequiredResDetails = () => {
    if (title !== '' && fullName !== '' && lastName != '' && nationality !== '' && passport !== '' && countryResidence !== '' && emailAddr !== '' && mobilenum !== '') {
      navigate(`/reservation/${reserIdd}/payments`, { replace: true });
    }
    else {
      setCheckAlert(true);
    }
  }

  //calc the total price to pay

  const calcTotalPrice = () => {
    if (classChoice == 'Premium') {
      console.log(bookPicked.pricePremuim + " " + passeAdultes);
      setNumAdultesPrice(parseInt(passeAdultes) * bookPicked.pricePremuim);
      setNumChildrenPrice(parseInt(passChild) * (bookPicked.pricePremuim - bookPicked.pricePremuim * 10 / 100));
      setPriceTotalToPay(numAdultesPrice + numChildrenPrice + parseInt(extras) + 7);
    } else {
      setNumAdultesPrice(parseInt(passeAdultes) * bookPicked.priceEconomy);
      setNumChildrenPrice(parseInt(passChild) * (bookPicked.priceEconomy - bookPicked.priceEconomy * 10 / 100));
      setPriceTotalToPay(numAdultesPrice + numChildrenPrice + parseInt(extras) + 7);
    }
  }


  const addExtrasLugg = ele => {
    extrasLugg.current.push(ele)
  }

  const selectedExtras = () => {
    extrasLugg.current.forEach(ext => {
      if (ext.checked) {
        setExtras(ext.value);
      }
    })

  }

  const handlePayments = () => {
    const creditCardData = new FormData();
    creditCardData.append("cardNumber", cardNumber);
    creditCardData.append("cvvNumber", cvvNum);
    creditCardData.append("name", cardOwnerName);
    creditCardData.append("expireDate", dateExpirMonth + '/' + dateExpirYear);
    var url = 'https://moroccan-flights.000webhostapp.com/api/creditcards/show';
    axios.post(url, creditCardData)
      .then(res => setCheckCard(res.data.message))
  }

  useEffect(() => {
    if (checkCard == 'Card Valide') {
      setTimeout(() => {
        var reservationInfo = new FormData();
        reservationInfo.append("title", title);
        reservationInfo.append("name", fullName + ' ' + lastName);
        reservationInfo.append("nationality", nationality);
        reservationInfo.append("passport", passport);
        reservationInfo.append("countryResidence", countryResidence);
        reservationInfo.append("email", emailAddr);
        reservationInfo.append("mobile", mobileCode + mobilenum);
        reservationInfo.append("passengersAdultes", passeAdultes);
        reservationInfo.append("passengersChilds", passChild);
        if (classChoice !== "") {
          reservationInfo.append("class", classChoice);
        }
        else {
          reservationInfo.append("class", "Economy");
        }
        if (isAuthincated && window.localStorage.getItem('user-id') !== '') {
          const user_id = window.localStorage.getItem('user-id');
          reservationInfo.append("user_id", user_id);
        }
        reservationInfo.append("extras", extras);
        reservationInfo.append("flight_id", bookPicked.id);

        var url2 = 'https://moroccan-flights.000webhostapp.com/api/reservations/store';
        axios.post(url2, reservationInfo)
          .then(res => {
            setReservationStatus(res.data.message);
            if (res.data.message == "Reservation success") {
              setTimeout(() => {
                navigate(`/reservationinformations`, { replace: true });
              })
            }
          })
      }, 3000)
    }
  }, [checkCard])

  //cancel reservation from user dashboard
  const handleCancelRes = id => {
    const url = `https://moroccan-flights.000webhostapp.com/api/reservations/destroy/${id}`;
    console.log(id);
    axios.post(url)
      .then(res => {
        if (res.status == 200) {
          setCancellationMsg(res.data)
          setTimeout(() => {
            window.location = "/dashboard";
          }, 3400);
        }
      })
      .catch(err => setCancellationMsg("Something went worng"))

  }

  //msg after cancellation alert
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  //handle auto generate test credit card
  const testCardNum = '4567456745674567';
  const testCardCvv = '645';
  const testCardName = 'Mohamed Karim Balla';
  const testCardMonth = '09';
  const testCardYear = '25';

  const generateTestCreditCard = () => {
      setCardNumber(testCardNum);
      SetCvvNum(testCardCvv);
      setCardOwnerName(testCardName);
      setDateExpirMonth(testCardMonth);
      setDateExpirYear(testCardYear);
  }


  return (
    <myReservationContext.Provider
      value={{
        title, setTitle, fullName, setFullName, lastName,
        setLastName, nationality, setNationality, dateBirth, setDateBirth,
        passport, setPassport, countryResidence, setCountryResidence,
        mobilenum, setMobileNum, emailAddr, setEmailAddr, checkAlert,
        mobileCode, setMobileCode, reserIdd, setReserId,
        checkAllRequiredResDetails, calcTotalPrice, priceTotalToPay, passeAdultes,
        setPassAdultes, passChild, setPassChild, bookPicked, setBookPicked,
        extras, setExtras, addExtrasLugg, selectedExtras, numChildrenPrice,
        numAdultesPrice, classChoice, setClassChoice, SetCvvNum,cvvNum, setCardNumber,
        setCardOwnerName, setDateExpirMonth, cardNumber, setDateExpirYear,cardOwnerName,
        dateExpirMonth, dateExpirYear,handlePayments, checkCard, reservationStatus, totNumPassengers,
        setTotNumPassengers,handleCancelRes, cancellationMsg, handleClose, open, handleClick,
        generateTestCreditCard
      }}>
      {props.children}
    </myReservationContext.Provider>
  )
}
