import React from "react";
import style from "../../styles/Team.module.css";
// import VLAD from "../../images/vlad.jpg"
import VLAD from "../../images/vlad.png"
import ALEX from "../../images/alex.png"
import ELYA from "../../images/elya.png"
import SHAPE4 from '../../images/Lilac4.png'

const Team = () => {
  return (
    <>
      <section className={style.team}>

      <img src={SHAPE4} alt='shape' className={style.shape4}/>

      <h1 className={style.mainTitle}>
          Наша команда
        </h1>

        <div className={style.container}>
      <div className={style.profile}>
        <img src={ALEX} alt="Фотография 1" className={style.profileImage} />
        <div className={style.caption}>
          <p className={style.name}>Александр Быков</p>
          <p className={style.position}>Мастер <span className={style.highlight}>Проект</span>ан<br/>Владыка Путей Разработки</p>
        </div>
      </div>
      <div className={style.profile}>
        <img src={VLAD} alt="Фотография 2" className={style.profileImage} />
        <div className={style.caption}>
          <p className={style.name}>Владислав Подъячев</p>
          <p className={style.position}>Лорд <span className={style.highlight}>Фронт</span>ор<br/>Маг Визуальных Элементов</p>
        </div>
      </div>
      <div className={style.profile}>
        <img src={ELYA} alt="Фотография 3" className={style.profileImage} />
        <div className={style.caption}>
          <p className={style.name}>Эльвира Аббясова</p>
          <p className={style.position}>Леди <span className={style.highlight}>Бэк</span>виль<br/>Хранительница Серверных Врат</p>
        </div>
      </div>
    </div>
        

      </section>
    </>
  );
};

export default Team;
