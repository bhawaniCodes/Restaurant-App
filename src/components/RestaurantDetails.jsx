import { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import './RestaurantDetails.css'
export default function RestaurantDetails( {data, gotoForm}){
    let [rate, setRate] = useState(1);
    let [rateStatus, setRateStatus] = useState(false);
    let [payment, setPayment] = useState('');
    let [sortBy2, setSortBy2] = useState('');

    
    function handleRatingSort(rate1){
        setRate(rate1)
        setRateStatus(true)       
        
    }
    function handlePaymentSort(type){
        setPayment(type)
    }
    const handleHtoLSort = (srt) =>{
        console.log('srt:', srt)
        setSortBy2(srt)
    }

    return (
        <>
        <div className='barForSort'>
            <h3  >Sort By Rating</h3> 
            <div className='ratingDiv'>
                <span className={rate >= 1 ? 'checked': ''} onClick={()=>handleRatingSort(1)}><FaStar /></span>
                <span className={rate >= 2 ? 'checked': ''} onClick={()=>handleRatingSort(2)}><FaStar /></span>
                <span className={rate >= 3 ? 'checked': ''} onClick={()=>handleRatingSort(3)}><FaStar /></span>
                <span className={rate >= 4 ? 'checked': ''} onClick={()=>handleRatingSort(4)}><FaStar /></span>
            </div>
            <h3>Sort By payment</h3>
            <button className='paymentSort' onClick={()=>handlePaymentSort('cash')}>Check Cash only</button>
            <button className='paymentSort'  onClick={()=>handlePaymentSort('card')}>Check Card only</button>
            <button className='paymentSort'  onClick={()=>handlePaymentSort('all')}>All payments</button>

            <button className='paymentSort' onClick={()=>handleHtoLSort('inc')}>Check Low to High</button>
            <button className='paymentSort'  onClick={()=>handleHtoLSort('dec')}>Check High to Low</button>
        </div>
        <div className='grid'>
            {sortBy2 === '' ? 
            data.filter((item)=> item.rating > rate)
            .sort((a, b)=> rateStatus ? a.rating - b.rating: true)
            .filter((el)=> payment === "cash" ? el.cash === "true" : payment === 'card' ? el.card === "true" : true)
            
            .map((el)=> { 
                return (
                <div key={el.id} className='item'>
                   <div> <img className='images' src={el.image} alt="" /></div> 
                   <div className='details'>
                        <h3>{el.name}</h3>
                        <p className='blur'>{el.dish_name}, {el.country_dish}</p>
                        <p className='blur'>Cost ₹{el.cost} for {el.for}</p>
                        <p>Min ₹{el.delivery} Up to {el.time} min</p>
                        <p>Accepts {el.card === "true" ? "Card" : ''} {el.upi === "true" ? "- UPI" : ''} {el.cash === "true" ? "- COD" : ''}</p>
                    </div> 
                   <div className='ratings'>
                       <p className='rating'> {el.rating}</p>
                       <p className='blur fonts'> {el.votes} votes</p>
                       <p className='blur fonts'> {el.reviews} reviews</p>
                       <button className='orderBtn' >Order Online {'>'} </button>
                   </div> 
                </div>
                )
            })
            : 
            data.filter((item)=> item.rating > rate)
            .filter((el)=> payment === "cash" ? el.cash === "true" : payment === 'card' ? el.card === "true" : true)
            .sort((a, b)=> sortBy2 === 'inc' ? (a.cost - b.cost) : sortBy2 === 'dec' ? (b.cost - a.cost) : true)
            .filter((el3)=> el3.for === 2)
            
            .map((el)=> { 
                return (
                <div key={el.id} className='item'>
                   <div> <img className='images' src={el.image} alt="" /></div> 
                   <div className='details'>
                        <h3>{el.name}</h3>
                        <p className='blur'>{el.dish_name}, {el.country_dish}</p>
                        <p className='blur'>Cost ₹{el.cost} for {el.for}</p>
                        <p>Min ₹{el.delivery} Up to {el.time} min</p>
                        <p>Accepts {el.card === "true" ? "Card" : ''} {el.upi === "true" ? "- UPI" : ''} {el.cash === "true" ? "- COD" : ''}</p>
                    </div> 
                   <div className='ratings'>
                       <p className='rating'> {el.rating}</p>
                       <p className='blur fonts'> {el.votes} votes</p>
                       <p className='blur fonts'> {el.reviews} reviews</p>
                       <button className='orderBtn' >Order Online {'>'} </button>
                   </div> 
                </div>
                )
            })}

            <div className='addCenter' onClick={gotoForm}><span className='addSign'>+</span></div>
        </div>
        </>
    )
}