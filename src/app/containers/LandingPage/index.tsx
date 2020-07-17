import React from 'react';
import { Helmet } from 'react-helmet-async';
import { websiteLogoText } from 'settings';
import './index.css';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import {
  FaTshirt,
  FaBasketballBall,
  FaLaptop,
  FaBookOpen,
  FaMapSigns,
  FaHome,
} from 'react-icons/fa';
import { MdDoneAll } from 'react-icons/md';
import { FiLink, FiClock } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const PageDivider = ({ title, subtitle }) => (
  <div className="page-divider">
    <small>{subtitle}</small>
    <h2>{title}</h2>
  </div>
);

const Card = ({ name, Icon, iconColor = 'var(--text)' }) => (
  <div className="category-thumb">
    <Icon size={48} color={iconColor} />
    <h3>{name}</h3>
  </div>
);
const ImgCard = ({ name, source }) => (
  <div className="category-thumb">
    <img src={source} alt="Card" />
    <h3>{name}</h3>
  </div>
);
// const CardLandscape = ({ name, Icon, count }) => (
//   <div className="category-thumb">
//     <Icon size={64} />
//     <h2>{count}</h2>
//     <h3>{name}</h3>
//   </div>
// );
export function LandingPage() {
  const { t } = useTranslation();
  const categories = [
    { id: 1, name: 'homeDecor', Icon: FaHome },
    { id: 5, name: 'clothes', Icon: FaTshirt },
    { id: 4, name: 'tech', Icon: FaLaptop },
    { id: 3, name: 'travel', Icon: FaMapSigns },
    { id: 2, name: 'books', Icon: FaBookOpen },
    { id: 6, name: 'sport', Icon: FaBasketballBall },
  ];
  const stores = [
    { id: 1, name: 'Tehnomanija', source: '/images/stores/tehnomanija.png' },
    { id: 5, name: 'ComTrade', source: '/images/stores/comtrade.png' },
    { id: 4, name: 'Gigatron', source: '/images/stores/gigatron.png' },
    { id: 3, name: 'WinWin', source: '/images/stores/winwin.png' },
  ];
  // const statisticCards = [
  //   // { id: 1, count: '42 503', name: 'fulfilledWishes', Icon: GoTelescope },
  //   { id: 5, count: '1 200 094', name: 'activeWishes', Icon: GoTelescope },
  //   { id: 4, count: '5 020', name: 'activeUsers', Icon: FaUserFriends },
  // ];
  const stepsToUse = [
    { id: 1, name: 'wishStep1', Icon: FiLink },
    { id: 2, name: 'wishStep2', Icon: FiClock },
    { id: 3, name: 'wishStep3', Icon: MdDoneAll },
  ];
  return (
    <>
      <Helmet>
        <title>LandingPage</title>
        <meta name="description" content="LandingPage" />
      </Helmet>
      <div>
        <div className="section">
          <h1 className="paragraph-main">
            {t(translations.landingPage.paragraphMain())}
          </h1>
          <h2 className="paragraph-secondary">
            <strong className="logo-font">{websiteLogoText}</strong>
            {t(translations.landingPage.paragraphSecondary())}
          </h2>
          <h2 className="paragraph-teritary">
            <NavLink to="/sign-in" className="text-button-primary">
              {t(translations.landingPage.buttonText())}
            </NavLink>
          </h2>
        </div>

        <PageDivider
          title={t(translations.landingPage.categorySectionTitle())}
          subtitle={t(translations.landingPage.categorySectionSubtitle())}
        />

        <h2 className="section-description">
          {t(translations.landingPage.categorySectionDescription())}
        </h2>

        <div className="category-thumbnails-wrapper">
          {categories.map(x => (
            <Card
              key={x.id}
              {...x}
              name={t(translations.landingPage[x.name]())}
            />
          ))}
        </div>

        <PageDivider
          title={t(translations.landingPage.storesTitle())}
          subtitle={t(translations.landingPage.storesSubtitle())}
        />

        <h2 className="section-description">
          {t(translations.landingPage.storesDescription())}
        </h2>
        <div className="category-thumbnails-wrapper">
          {stores.map(x => (
            <ImgCard key={x.id} {...x} />
          ))}
        </div>

        <PageDivider
          title={t(translations.landingPage.howToUseTitle())}
          subtitle={t(translations.landingPage.howToUseSubtitle())}
        />
        <h2 className="section-description">
          {t(translations.landingPage.howToUseDescription())}
        </h2>
        <div className="category-thumbnails-wrapper three-items">
          {stepsToUse.map(x => (
            <Card
              key={x.id}
              {...x}
              name={t(translations.landingPage[x.name]())}
            />
          ))}
        </div>
        {/* <h2 className="paragraph-secondary">
          {t(translations.landingPage.howToUseTitle())}
          <br />
          {t(translations.landingPage.howToUseSubtitle())}
        </h2> */}
        {/* <h2 className="section-description">
          <strong>{websiteLogoText}</strong>
          {t(translations.landingPage.statisticCardsTitle())}
        </h2>
        <div className="category-thumbnails-wrapper statistic-cards-wrapper">
          {statisticCards.map(x => (
            <CardLandscape
              key={x.id}
              {...x}
              name={t(translations.landingPage[x.name]())}
            />
          ))}
        </div> */}
      </div>
    </>
  );
}
