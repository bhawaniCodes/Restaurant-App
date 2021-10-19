import { useState } from 'react'
import './Form.css'

export default function Form({handleFormData}){
    const [formData, setFormData] = useState({});

    const handleChange=(e)=>{
        const {name, value} = e.target;
        console.log('name, value:', name, value)
        setFormData({...formData, [name]: value})
    }
    function temp(e){
        e.preventDefault();
        alert('Restaurant added successfully');
        handleFormData(formData)
    }
    
    return (
        <div className='form'>
        <form action="" onSubmit={temp}  >
            <input name='name' onChange={handleChange} type="text" placeholder='Add Restaurant name' required/><br />
            <input name='dish_name' onChange={handleChange} type="text" placeholder='Enter Food Type' required/><br />
            <input name='votes' onChange={handleChange} type="number" placeholder='Enter Votes' required/><br />
            <input name='for' onChange={handleChange} type="number" placeholder='Enter Person' max={3} required/><br />
            <input name='reviews' onChange={handleChange} type="number" placeholder='Enter Reviews' required/><br />
            <input name='cost' onChange={handleChange} type="number" placeholder='Enter Cost for Person' required/><br />
            <input name='rating' step='any' onChange={handleChange} type="number" placeholder='Enter Rating' max={5} required/><br />
            <input name='image' onChange={handleChange} type="url" placeholder='Enter image URL'required /><br />
            <input name='country_dish' onChange={handleChange} type="text" placeholder='Specific National dish ' required/><br />
            <input name='time' onChange={handleChange} type="number" placeholder='Enter delivery time' max={60} required/><br />
            <input name='delivery' onChange={handleChange} type="number" placeholder='Enter Delivery Charge' max={100} required/><br />
            <div className='payment'>
                <p>Choose Payment method :</p> <br />
                <label htmlFor="cash">Cash : </label> &nbsp;
                <select name="cash" id="cash" onChange={handleChange} required>
                    <option value="" disabled selected>Select your option</option>
                    <option value={true} onChange={handleChange}>COD Available</option>
                    <option value={false} onChange={handleChange}>Not Available</option>
                </select>
                <br />
                <label htmlFor="card">Card : </label> &nbsp;
                <select name="card" id="card" onChange={handleChange}  required>
                    <option value="" disabled selected>Select your option</option>
                    <option value={true} onChange={handleChange}>Card Available</option>
                    <option value={false} onChange={handleChange} >Not Available</option>
                </select>
                <br />
                <label htmlFor="upi">UPI : </label> &nbsp; &nbsp;
                <select name="upi" id="upi" onChange={handleChange} required>
                    <option value="" disabled selected>Select your option</option>
                    <option value={true} onChange={handleChange}>UPI Available</option>
                    <option value={false} onChange={handleChange} >Not Available</option>
                </select>
            </div>
            <input type="submit" value='Submit' className='submitBtn'/>
        </form>
        </div>
    )
}


