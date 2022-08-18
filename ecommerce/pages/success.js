import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runSchoolPride } from '../lib/utils';
const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities}=useStateContext();
useEffect(()=>{
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runSchoolPride();
},[]);
    return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>Thank you...visit again</h2>
            <p className='email-msg'>
                Check your email
            </p>
<p className='description'>
    Any ques? Please email
<a className='email' href='mailto:nanda4world@gmail.com'>nanda4world@gmail.com</a>
</p>
<Link href="/">
        <button type='button' width="300px" className='btn'>
            Continue Shopping
        </button>
</Link>

            </div>
    </div>
  )
}

export default Success