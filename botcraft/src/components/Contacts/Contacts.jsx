import React from "react";
import style from "../../styles/Contacts.module.css";
import SHAPE1 from "../../images/Lilac5.png";
import { MAIL, VK, TG, TEL } from "../../utils/constants";

const Contacts = () => {

  const handleTelegramClick = () => {
    window.open(TG, "_blank", "noopener noreferrer");
  };

  const handleVkClick = () => {
    window.open(VK, "_blank", "noopener noreferrer");
  };

  const handleCallClick = () => {
    window.location.href = `tel:${TEL}`;
  };

  const handleMailClick = () => {
    window.location.href = `mailto:${MAIL}`;
  };

  return (
    <section className={style.contacts} id="target-section">
      <img className={style.shape1} src={SHAPE1} alt="shape" />
      <div className={style.content}>
        <div className={style.text}>
          <h1 className={style.mainTitle}>Свяжитесь с нами</h1>
        </div>
        <div className={style.buttonGrid}>
          <button className={style.button} onClick={handleTelegramClick}>
            Telegram
          </button>
          <button className={style.button} onClick={handleVkClick}>
            Vk
          </button>
          <button className={style.button} onClick={handleCallClick}>
            Позвонить
            <span className={style.subtext}>{TEL}</span>
          </button>
          <button className={style.button} onClick={handleMailClick}>
            Mail
            <span className={style.subtext}>{MAIL}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
