import React , {useContext, useState} from 'react'
import img1 from '../../../images/verifiedbyvisa.webp'
import img2 from '../../../images/mastercardVerified.webp'
import img3 from '../../../images/visa.png'
import img4 from '../../../images/mastercard.png'
import LoadingButton from '@mui/lab/LoadingButton';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AddCardIcon from '@mui/icons-material/AddCard';
import Alert from '@mui/material/Alert';
import { myReservationContext } from '../../appContext/ReservationContext'


export default function ResPayments({priceTotalToPay}) {

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [cardType , setCardType] = useState('');
    const {extras} = useContext(myReservationContext);
    const {bookPicked} = useContext(myReservationContext);
    const {numChildrenPrice} = useContext(myReservationContext);
    const {numAdultesPrice} = useContext(myReservationContext);
    const {passeAdultes} = useContext(myReservationContext);
    const {passChild} = useContext(myReservationContext);
    const {classChoice} = useContext(myReservationContext);
    const {cardNumber ,setCardNumber} = useContext(myReservationContext);
    const {cvvNum, SetCvvNum} = useContext(myReservationContext);
    const {cardOwnerName, setCardOwnerName} = useContext(myReservationContext);
    const {dateExpirMonth, setDateExpirMonth} = useContext(myReservationContext);
    const {dateExpirYear, setDateExpirYear} = useContext(myReservationContext);
    const {handlePayments} = useContext(myReservationContext);
    const {checkCard} = useContext(myReservationContext);
    const {generateTestCreditCard} = useContext(myReservationContext);

    const handleClick = () => {
        setLoading(true);
        setTimeout( () => {
            setLoading(false);
            handlePayments();
        } , 5000)
    }


    const handleCardsType = e => {

        setCardNumber(e.target.value);

        if (cardNumber[0] == 4)
        {
            setCardType('visa');
        }
        else if (cardNumber[0] == 5)
        {
          setCardType('mastercard')
        }
        else{
          setCardType('');
        }
    } 

    const handleGenerating = () => {
      setLoading2(true);
      setTimeout( () => {
          setLoading2(false);
          generateTestCreditCard()
          handleCardsType();
      } , 5000)
    }

  return (
    <div>
          <div className='row w-100 m-0'>
               <div className="col-lg-7 mt-4 mt-lg-0 order-1 order-lg-1">
                    <div className='d-flex justify-content-start ps-3 ps-sm-5 ms-md-5 mt-5'>
                         <img src={img1} alt="" style={{ width:"120px" , height:"45px" }} /> 
                         <img src={img2} alt="" style={{ width:"120px" , height:"70px" }} className='ms-4 pb-3' /> 
                    </div>
                    <div className='ms-md-5 ps-sm-5 px-3 pe-sm-5 me-md-5 mt-4 resPaymentsForm'>
                        <form>
                             <div className="mb-3 d-flex justify-content-start align-items-start flex-column">
                               <label for="exampleInputEmail1" className="form-label text-start">Credit Card N°</label>
                                <span style={{ width:'27px' , height:'20px' }}>{cardType !== '' ? cardType == 'visa' ? (<img src={img3} alt="" />) : (<img src={img4} alt="" />) : ''}</span> 
                                <input type="text" value={cardNumber} className="form-control cardNumberInput" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleCardsType} placeholder='0000-0000-0000-0000' />
                             </div>
                             <div className="mb-3 d-flex justify-content-start align-items-start flex-column">
                               <label for="exampleInputEmail1" className="form-label text-start">CVV Number</label>
                               <input type="text" value={cvvNum} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='000' onChange={e=>SetCvvNum(e.target.value)} />
                             </div>
                             <div className="mb-3 d-flex justify-content-start align-items-start flex-column">
                               <label for="exampleInputEmail1" className="form-label text-start">Name In Card</label>
                               <input type="text" value={cardOwnerName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name in card' onChange={e=>setCardOwnerName(e.target.value)} />
                             </div>
                             <div className="mb-1 d-flex justify-content-start align-items-start flex-column">
                               <label for="exampleInputEmail1" class="form-label text-start">Expiry Date</label>
                               <div className='d-flex'>
                                   <input type="text" value={dateExpirMonth} className="form-control me-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Month' onChange={e=>setDateExpirMonth(e.target.value)} />
                                   <span className='pt-2 mt-1'>/</span>
                                   <input type="text" value={dateExpirYear} className="form-control ms-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Year' onChange={e=>setDateExpirYear(e.target.value)} />
                               </div>
                             </div>
                             <div className='mt-5'>
                                {
                                  checkCard !== '' ? checkCard === 'Card Valide' ? (<Alert severity="success">{checkCard}</Alert>) : <Alert severity="error">{checkCard}</Alert> : ''
                                }
                             </div>
                             <div className='d-flex justify-content-start flex-column flex-md-row mt-4'>
                                <LoadingButton size="large" onClick={handleClick} startIcon={<VerifiedUserIcon />} loading={loading} loadingPosition="start" style={{ backgroundColor:'green' , color:'white' }} variant="contained">
                                     <span>{loading ? 'Checking Card' : 'Confirm Payment'}</span>
                                </LoadingButton>
                                <LoadingButton size="large" onClick={handleGenerating} startIcon={<AddCardIcon />} loading={loading2} loadingPosition="start" style={{ backgroundColor:'#ac0068' , color:'white' }} className='ms-md-4 mt-3 mt-md-0' variant="contained">
                                     <span>{loading2 ? 'Auto Generating' : 'Generate Test Card'}</span>
                                </LoadingButton>
                             </div>
                        </form>
                    </div>
               </div>
               <div className="col-lg-4 order-0 order-lg-1 pt-5 mt-5 d-flex justify-content-center align-items-center flex-column">
                    <div className='totCalcPay'>
                           <div className='mb-4'>
                               <h5 className='text-start'>Price Breakdown</h5>
                           </div>
                           <div className='calcPrice order-0'>
                               <table className='w-100'>
                                   <tr><td className='w-75'><p className='fw-semibold text-start'>Reservation price ({classChoice !== '' ? (classChoice) : ("Economy")})</p></td><td><p className='text-start text-secondary'>{classChoice == 'Premium' ? bookPicked.pricePremuim : bookPicked.priceEconomy}$</p></td></tr>
                                   <tr><td className='w-75'><p className='fw-semibold text-start'>Passengers Adults x{passeAdultes}</p></td><td><p className='text-start text-secondary'>{numAdultesPrice}$</p></td></tr>
                                   <tr><td className='w-75'><p className='fw-semibold text-start'>Passengers Childs (-10%) x{passChild}</p></td><td><p className='text-start text-secondary'>{numChildrenPrice}$ </p> </td></tr>
                                   <tr><td className='w-75'><p className='fw-semibold text-start'>Extras</p></td><td><p className='text-start text-secondary'>+{extras}$</p></td></tr>
                                   <tr><td className='w-75'><p className='fw-semibold text-start'>Administration fee</p></td><td><p className='text-start text-secondary'>+{7}$</p></td></tr>
                               </table>
                           </div>
                           <div className='mt-5'>
                               <hr />
                           </div>
                           <div className='totPrice'>
                                <table className='w-100'>
                                     <tr>
                                       <td className='w-75'><h5 className='text-start'>Total To Pay</h5></td>
                                       <td><h5 className='text-start text-secondary'>{priceTotalToPay}$ </h5></td>
                                     </tr>
                                </table>
                           </div>
                    </div>
               </div>
          </div>
    </div>
  )
}
