import React from 'react'
import style from '../../styles/Home.module.css'

import Information from '../Information/Information';
import AboutUs from '../AboutUs/AboutUs';
import BotFeatures from '../BotFeatures/BotFeatures';
import Team from '../Team/Team';
import Contacts from '../Contacts/Contacts';

const Home = () => (
    <>
    <div className={style.home}>
    
     <Information/>
     <AboutUs/>
    <BotFeatures/>
    <Team/>
    <Contacts/> 
   
    </div>
  </>
  
)

export default Home