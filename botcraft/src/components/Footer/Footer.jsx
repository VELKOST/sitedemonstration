
import React from 'react';
import style from '../../styles/Footer.module.css';
import LOGO from '../../images/logolong.png'; 
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
      <div>
        <Link to={ROUTES.HOME}>
          <img className={style.logo} src={LOGO} alt="BotCraft" />
        </Link>
      </div>
        <p className={style.text}>COPYRIGHT 2024 — BOTCRAFT ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
      </div>
    </footer>
  );
};

export default Footer;
