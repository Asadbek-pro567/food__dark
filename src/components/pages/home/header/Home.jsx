import React, { useState } from 'react'
import './Home.css'
import Logo from '../../../image/Logo.png'
import { Link } from 'react-router-dom'

function Home() {
  const [id, setId] = useState(1)
  return (
    <>
    <div className='container conta'>
        <div className="header">
          <Link to='/' className='header__logo'>
            <img src={Logo} alt="" />
          </Link>
          <ul className='header__list'>
            <li onClick={(e)=>setId(e.target.id)} className={id == '0'? 'header__item active2': 'header__item'} id='0'><Link id='0'><i id='0' class="bi bi-house-door active"></i></Link></li>
            <li onClick={(e)=>setId(e.target.id)} className={id == '1'? 'header__item active2': 'header__item'} id='1'><Link id='1'><i id='1' class="bi bi-patch-plus"></i></Link></li>
            <li onClick={(e)=>setId(e.target.id)} className={id == '2'? 'header__item active2': 'header__item'} id='2'><Link id='2'><i id='2' class="bi bi-pie-chart-fill"></i></Link></li>
            <li onClick={(e)=>setId(e.target.id)} className={id == '3'? 'header__item active2': 'header__item'} id='3'><Link id='3'><i id='3' class="bi bi-envelope"></i></Link></li>
            <li onClick={(e)=>setId(e.target.id)} className={id == '4'? 'header__item active2': 'header__item'} id='4'><Link id='4'><i id='4' class="bi bi-bell"></i></Link></li>
            <li onClick={(e)=>setId(e.target.id)} className={id == '5'? 'header__item active2': 'header__item'} id='5'><Link id='5'><i id='5' class="bi bi-gear-wide"></i></Link></li>
          </ul>
          <button className='header__btn'><i class="bi bi-box-arrow-right"></i></button>
        </div>
    </div>
    </>
  )
}

export default Home


