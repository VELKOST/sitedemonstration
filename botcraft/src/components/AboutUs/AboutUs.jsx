import React from 'react'
import style from '../../styles/AboutUs.module.css'

const AboutUs = () => {
  return (
    <>
    <section className={style.aboutUs}>
       <div className={style.column}>
            <h1>О нас</h1>
            <div className={style.textblock}> 
            <p>Команда IT-специалистов, создающая чат-ботов для различных отраслей. Опыт в искусственном интеллекте и обработке языка позволяет разрабатывать эффективные и инновационные решения для автоматизации взаимодействия с клиентами. </p>
            </div>
        </div>
       <div className={style.column}>
            <h1>Наши услуги</h1>
            <div className={style.textblock}> 
            <p>Полный цикл разработки чат-ботов: от анализа потребностей до внедрения и поддержки. Решения помогают с поддержкой клиентов, обработкой заказов, маркетингом и интеграцией с бизнес-системами </p>
            </div>
        </div>
       <div className={style.column}>
            <h1>Наши технологии</h1>
            <div className={style.textblock}> 
            <p>Применение широкого спектра передовых технологий, творческий подход и инновационное мышление.  </p>
            </div>
            </div>

   </section>
   </>
  )
}

export default AboutUs