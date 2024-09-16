import React from "react";
import style from "../../styles/BotFeatures.module.css";
import managment from "../../images/managment.png";
import analysis from "../../images/analysis.png";
import faq from "../../images/faq.png";
import feedback from "../../images/feedback.png";
import marketing from "../../images/marketing.png";
import navigation from "../../images/navigation.png";
import processing from "../../images/processing.png";
import support from "../../images/support.png";
import training from "../../images/training.png";
import chat1 from "../../images/chat1.png";
import chat2 from "../../images/chat2.png";
import chat3 from "../../images/chat3.png";
import SHAPE2 from "../../images/Lilac1.png";
import SHAPE3 from '../../images/Lilac3.png'

const BotFeatures = () => {
  return (
    <>
      <section className={style.informationSection}>
        <img src={SHAPE2} alt="shape" className={style.shape2} />
        <img src={SHAPE3} alt='shape' className={style.shape3}/>


        <h1 className={style.mainTitle}>
          Как наши чат-боты оптимизируют процессы
        </h1>

        <div className={style.groupContainer}>
          <div className={style.textColumn}>
            <p className={style.containerTitle}>
                Поддерживайте связь с клиентами 24/7
            </p>

            <div className={style.gridItem}>
              <div className={style.iconContainer}>
                <img src={support} alt="support" />
              </div>
              <h3 className={style.gridTitle}>Поддержка клиентов</h3>
              <p className={style.gridText}>
                Чат-боты отвечают на вопросы клиентов в режиме реального
                времени, обеспечивая круглосуточную поддержку.
              </p>
            </div>
            <div className={style.gridItem}>
              <div className={style.iconContainer}>
                <img src={faq} alt="faq" />
              </div>
              <h3 className={style.gridTitle}>FAQ</h3>
              <p className={style.gridText}>
                Быстрые и точные ответы на популярные вопросы, что экономит
                время клиентов и сотрудников.
              </p>
            </div>
            <div className={style.gridItem}>
              <div className={style.iconContainer}>
                <img src={navigation} alt="navigation" />
              </div>
              <h3 className={style.gridTitle}>Навигация по сайту</h3>
              <p className={style.gridText}>
                Помощь пользователям в поиске информации на сайте, что улучшает
                их опыт взаимодействия.
              </p>
            </div>
          </div>
          <div className={style.imageColumn}>
            <img src={chat1} alt="chat1" />
          </div>
        </div>

        <div className={style.groupContainer}>
          <div className={style.textColumn}>
            <p className={style.containerTitle}>
              Обучайте, планируйте, автоматизируйте
            </p>

            <div className={style.gridItem}>
              <div className={style.iconContainer}>
                <img src={training} alt="training" />
              </div>
              <h3 className={style.gridTitle}>Обучение сотрудников</h3>
              <p className={style.gridText}>
                Проведение внутренних тренингов и помощь в обучении новых
                сотрудников.
              </p>
            </div>
            <div className={style.gridItem}>
              <div className={style.iconContainer}>
                <img src={managment} alt="managment" />
              </div>
              <h3 className={style.gridTitle}>Управление расписанием</h3>
              <p className={style.gridText}>
                Помощь в планировании и бронировании встреч, мероприятий и
                других событий, упрощая организационные задачи.
              </p>
            </div>
            <div className={style.gridItem}>
              <div className={style.iconContainer}>
                <img src={processing} alt="processing" />
              </div>
              <h3 className={style.gridTitle}>Обработка заказов</h3>
              <p className={style.gridText}>
                Автоматизация процесса принятия и обработки заказов, что
                ускоряет обслуживание и снижает нагрузку на сотрудников.
              </p>
            </div>
          </div>
          <div className={style.imageColumn}>
            <img src={chat2} alt="chat2" />
          </div>
        </div>

        <div className={style.groupContainer}>
          <div className={style.textColumn}>
            <p className={style.containerTitle}>
              Управляйте маркетингом и анализом легко
            </p>

            <div className={style.gridItem}>
              <div className={style.iconContainer}>
                <img src={marketing} alt="marketing" />
              </div>
              <h3 className={style.gridTitle}>Маркетинг и реклама</h3>
              <p className={style.gridText}>
                Проведение маркетинговых кампаний, рассылка уведомлений и
                специальных предложений для повышения лояльности клиентов.
              </p>
            </div>
            <div className={style.gridItem}>
              <div className={style.iconContainer}>
                <img src={analysis} alt="analysis" />
              </div>
              <h3 className={style.gridTitle}>Сбор и анализ данных</h3>
              <p className={style.gridText}>
                Сбор данных о взаимодействии с клиентами и предоставление
                аналитики для улучшения бизнес-процессов.
              </p>
            </div>
            <div className={style.gridItem}>
              <div className={style.iconContainer}>
                <img src={feedback} alt="feedback" />
              </div>
              <h3 className={style.gridTitle}>Обработка отзывов</h3>
              <p className={style.gridText}>
                Принятие и обработка отзывов, жалоб и предложений для улучшения
                качества услуг.
              </p>
            </div>
          </div>
          <div className={style.imageColumn}>
            <img src={chat3} alt="chat3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BotFeatures;
