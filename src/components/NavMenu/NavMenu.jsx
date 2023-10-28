import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./NavMenu.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

function YourComponent() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    // Update the DOM elements when the active step changes
    const worksSection = document.querySelector(".works__content");
    const progressbar = worksSection.querySelector(".form_progressbar");
    const progressbarSteps = progressbar.querySelectorAll(".progressbar__step");
    const firstStep = worksSection.querySelector(".first_step");

    // Add event listener to the progressbarSteps
    const handleClick = (event) => {
      if (event.target && event.target.nodeName === "LI") {
        const dataStep = event.target.getAttribute("data-step");
        setActiveStep(parseInt(dataStep)); // Update active step

        // Update class names for progressbar steps
        progressbarSteps.forEach((step, index) => {
          if (index < dataStep - 1) {
            step.classList.remove("active");
          } else if (index >= dataStep - 1) {
            step.classList.add("active");
          }
        });

        // Update marginLeft for firstStep
        firstStep.style.marginLeft = `-${(parseInt(dataStep) - 1) * 100}%`;
      }
    };

    progressbar.addEventListener("click", handleClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      progressbar.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array to run this effect only once

  return null; // This component doesn't render anything directly
}

export function NavMenu() {
  const { user, loginWithRedirect, isAuthenticated, logout, isLoading } =
    useAuth0();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const LogoImage = styled.img`
    width: 150px;
    height: auto;
  `;

  return (
    <HelmetProvider>
      {/* ... (your Helmet code) */}
      <div className="container">
        <header>
          <nav className={`header__nav w-120 ${menuOpen ? "open" : ""}`}>
            <div className="header__logo">
              <LogoImage src="Logo_Transparent.png" alt="Logo" />
            </div>
            <div
              className={`header__nav__content ${
                menuOpen ? "open" : ""
              } flex lg:flex-row lg:space-x-4`}
            >
              {isAuthenticated && (
                <div>
                  <h2 className="user">{user.email}</h2>
                </div>
              )}
              <Link to="/Home" className="nav-link">
                <h2>Home</h2>
              </Link>
              <Link to="/Auction" className="nav-link">
                <h2>Auction</h2>
              </Link>
              <Link to="/Storage" className="nav-link">
                <h2>Storage</h2>
              </Link>

              {isAuthenticated ? (
                <button
                  className="middle none center hidden rounded-lg bg-green-500 hover:bg-green-400 py-3 px-4 font-sans text-lg font-bold uppercase text-white transform scale-100 transition-transform duration-300 ease-in-out shadow-md hover:scale-110 active:opacity-80 disabled:pointer-events-none disabled:opacity-50 lg:inline-block"
                  type="button"
                  data-ripple-light="true"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  LogOut
                </button>
              ) : (
                <button
                  className="middle none center hidden rounded-lg bg-green-500 hover:bg-green-400 py-3 px-4 font-sans text-lg font-bold uppercase text-white transform scale-100 transition-transform duration-300 ease-in-out shadow-md hover:scale-110 active:opacity-80 disabled:pointer-events-none disabled:opacity-50 lg:inline-block"
                  type="button"
                  data-ripple-light="true"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </button>
              )}
            </div>
          </nav>
        </header>
        <section className="hero w-120">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                A New Way to Invest in Agriculture
              </h1>
              <p className="hero__description">
                TAAS offers a Dynamic Auction System that empowers farmers to
                sell their produce directly to vendors, fostering growth for
                both parties while ensuring vendors achieve profitable outcomes.
              </p>
            </div>
            <div className="hero__img">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/hero.png"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="opportunities">
          <div className="opportunities__img">
            <img
              src="https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/leaf.png"
              alt=""
            />
          </div>
          <div className="opportunities__content w-105">
            <div className="opportunities__head">
              <h2 className="opportunities__title">New Opportunities</h2>
              <p className="opportunities__description">
                We are the first and the only crowdfunding platform enabling you
                to help finance our farmers.
              </p>
            </div>
            <div className="opportunities__body">
              <div className="opportunity">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/opportunites/opportunity-1.svg"
                  alt="Icon"
                  className="opportunity__icon"
                />
                <h4 className="opportunity__title">Connect with our farmers</h4>
                <p className="opportunity__description">
                  You can connect with our farmers using our website and through
                  our website, farmers can sell their products.
                </p>
              </div>

              <div className="opportunity active">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/opportunites/opportunity-2.svg"
                  alt="Icon"
                  className="opportunity__icon"
                />
                <h4 className="opportunity__title">Grow your business</h4>
                <p className="opportunity__description">
                  Vendors can grow their business
                </p>
              </div>
              <div className="opportunity">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/opportunites/opportunity-3.svg"
                  alt="Icon"
                  className="opportunity__icon"
                />
                <h4 className="opportunity__title">Social Impact Investment</h4>
                <p className="opportunity__description">
                  Here farmes can connect socially with all the vendors
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Invest Section */}
        <section className="invest  w-105">
          <div className="invest__content">
            <div className="invest__head">
              <h2 className="invest__title">Invest on your convenience</h2>
              <p className="invest__description">
                Vendors can invest their money on their convernience.
              </p>
            </div>
            <div className="invest__body">
              <div className="invest__item">
                <div className="invest__item__head">
                  <h5 className="invest__item__subtitle">NEW FARM TODAY</h5>
                </div>
                <div className="invest__item__body">
                  <h4 className="invest__item__title">
                    Short terms investment
                  </h4>
                  <p className="invest__item_description">
                    Invest in farms that will be ready for harvest in 3-18
                    months
                  </p>
                </div>
                <div className="invest__item__footer">
                  <a href="#" className="btn btn__invest">
                    Browse Farm
                  </a>
                </div>
              </div>
              <div className="invest__item">
                <div className="invest__item__head">
                  <h5 className="invest__item__subtitle">FULLY FUNDED</h5>
                </div>
                <div className="invest__item__body">
                  <h4 className="invest__item__title">Long terms investment</h4>
                  <p className="invest__item_description">
                    Consider farms that have long term investment program.
                  </p>
                </div>
                <div className="invest__item__footer">
                  <a href="#" className="btn btn__invest">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how-is-works w-120">
          <div className="works__content">
            <div className="works__head">
              <h2 className="works__title">How it works</h2>
              <p className="works__description">
                Take your pick from the supply chain and participate in
                agribusiness projects that are backed up not only by TAAS, but
                also by the best land, family heritage, innovation and overall
                superior expertise.
              </p>
            </div>
            <div className="works__body">
              <ul className="form_progressbar">
                <li className="progressbar__step active" data-step="1">
                  01
                </li>
                <li className="progressbar__step" data-step="2">
                  02
                </li>
                <li className="progressbar__step" data-step="3">
                  03
                </li>
                <li className="progressbar__step" data-step="4">
                  04
                </li>
              </ul>
            </div>
            <div className="works__footer">
              <div className="works__step__content first_step">
                <h3 className="works__step_title">
                  {" "}
                  Select your farmshare and complete reservation form.
                </h3>
                <p className="works__step_description">
                  This project helps the farmers to connnect them all over the
                  world through TAAS.
                </p>
              </div>
              <div className="works__step__content">
                <h3 className="works__step_title"> Register</h3>
                <p className="works__step_description">
                  It's art! A statement on modern society, 'Oh Ain't Modern
                  Society Awful?'! I am the Doctor, and you are the Daleks! Stop
                  talking, brain thinking. Hush. You've swallowed a planet!
                  Sorry, checking all the water in this area; there's an escaped
                  fish.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
}
