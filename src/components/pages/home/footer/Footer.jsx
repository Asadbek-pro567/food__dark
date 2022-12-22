import React, { useState } from 'react'
import './Footer.css'

function Footer() {
  let num = JSON.parse(window.localStorage.getItem('ARR1'))
  const [count, setCount] = useState(num)
  window.localStorage.setItem('ARR1', JSON.stringify(count))
  const [id, setId] = useState(0)

  return (
    <div className='container'>
      <div className="footer">
        <div>
          <h3>Orders #{num}</h3>
          <ul className='footer__list'>
            <li className=''>Dine In</li>
            <li>To Do</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className='flex'>
          <h5>Item</h5>
          <div className='flex price'>
            <h5>QTY</h5>
            <h5>Price</h5>
          </div>
        </div>
        <div className='footer__inner'>

        </div>
        <div className='flex sub'>
          <h6>Discount</h6>
          <h6>$ {}</h6>
        </div>
        <div className='flex sub'>
          <h6>Sub Total</h6>
          <h6>$ {}</h6>
        </div>
        <div className='sub subb'>
          <button onClick={()=>setCount(count + 1)} className='continue'>Continue to Payment</button>
        </div>
      </div>
    </div>
  )
}

export default Footer