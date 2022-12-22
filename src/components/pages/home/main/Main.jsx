import React, { useState } from 'react'
import { data } from '../../../data/data'
import './Main.css'

function Main() {
  const Time = new Date
  const Hafta = Time.getDay()
  const sortt = Hafta == '1'? 'Dushanba':Hafta == '2'? 'Seshanba':Hafta == '3'? 'Chorshanba':Hafta == '5'? 'Juma': Hafta == '4'? 'Payshanba':Hafta == '6'? 'Shanba': 'Yakshanba'
  const Day = Time.getDate()
  const Month = Time.getMonth()
  const sortMonth = Month == '0'? 'Yan':Month == '1'? 'Feb':Month == '2'? 'Mar':Month == '3'? 'Apr':Month == '4'? 'May':Month == '5'? 'Iyun':Month == '6'? 'Iyul':Month == '7'? 'Avg':Month == '8'? 'Sen':Month == '9'? 'Okt':Month == '10'? 'Noy': 'Dek'
  const Year = Time.getFullYear()


  const [id, setId] = useState(0)
  return (
    <div className='container cont'>
        <div className="main">
          <div className="main__inner">
            <div className="flex">
              <div>
                <h1>Jaegar Resto</h1>
                <h4>{sortt}, {Day} {sortMonth} {Year}</h4>
              </div>
              <input className='search' type="text" placeholder='Search'/>
            </div>
            <ul className='main__list'>
              
              <li className={id == '1'? 'main__item act': 'main__item'} onClick={(e)=>(setId(e.target.id))} id='1'>Ichimliklar</li>
              <li className={id == '2'? 'main__item act': 'main__item'} onClick={(e)=>setId(e.target.id)} id='2'>Jahon Taomlar</li>
              <li className={id == '3'? 'main__item act': 'main__item'} onClick={(e)=>setId(e.target.id)} id='3'>Desert</li>
              <li className={id == '4'? 'main__item act': 'main__item'} onClick={(e)=>setId(e.target.id)} id='4'>Milliy</li>
            </ul>
            <hr />
            <div className='flex main__choose'>
              <label htmlFor="dish">Choose Dishes</label>
              <select className='main__select' name="choose" id="dish" onChange={(q)=> console.log(q.target.value)}>
                <option value=""></option>
                <option value="dinein">Dine In</option>
                <option value="todo">To Do</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>
            <ul className='lillar'>
              {
                
                data?.filter((e)=> e.type == 'Ichimlik').map((item, i)=>(
                  <li className='cardd'>
                    <img src={item.img} alt="" />
                    <h5>{item.title}</h5>
                    <p>$ {item.price}</p>
                    <h6>{item.have}</h6>
                  </li>
                  ))
              }

            </ul>
            
            
          </div>
        </div>
    </div>
  )
}

export default Main