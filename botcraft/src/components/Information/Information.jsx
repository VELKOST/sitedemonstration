import React from 'react'
import style from '../../styles/Information.module.css'
import BOT from '../../images/bot2.png'
import SHAPE1 from '../../images/Lilac2.png'

const Information = () => {
  const smoothScroll = () => {
    document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={style.information}>
      <div className={style.infoblock}>
        <div className={style.titletext}>
          <h1>Чат-боты<br />ваш ключ к успеху</h1>
        </div>
        <div className={style.text}>
          <p>Увеличьте эффективность и клиентскую лояльность</p>
        </div>
        <button className={style.button} onClick={smoothScroll}>Обсудить проект</button>
      </div>
      <img className={style.bot} src={BOT} alt='bot' />
      <img className={style.shape1} src={SHAPE1} alt='shape' />
    </section>
  );
};

export default Information