import React from "react";
import LOGO from "../../images/logolong.png";
import style from "../../styles/Header.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { TG } from "../../utils/constants";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="BotCraft" />
        </Link>
      </div>

      {/* <div className={style.rightHeader}> */}
        <div className={style.blocks}>
          <div>
            <a
              href={TG}
              target="_blank"
              rel="noopener noreferrer"
              className={style.hrefs}
            >
              Портфолио
            </a>
          </div>
        </div>

        <div className={style.contacts}>
          <div>
            <a href="tel:+79851234545" className={style.number}>
              +7 985 123 45 45
            </a>
          </div>

          <div className={style.socials}>
            <a href={TG} target="_blank" rel="noopener noreferrer">
              <svg className="icon">
                <use
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#telegram`}
                />
              </svg>
            </a>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
