"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import CookieButton from "./CookieButton";

const CookieConsentPopup = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  return (
    !isAccepted &&
    !isClosed && (
      <section className="cookie-consent-popup">
        <header className="cookie-consent-popup-header">
          <LiaCookieBiteSolid size={50} />
          <IoIosClose className="pointer" size={25} onClick={() => setIsClosed(true)} />
        </header>
        <footer className="cookie-consent-popup-footer">
          <p className="cookie-consent-popup-paragraph">
            We use cookies to improve your user experience!
          </p>
          <CookieButton isAccepted={isAccepted} setIsAccepted={setIsAccepted} />
        </footer>
      </section>
    )
  );
};

export default CookieConsentPopup;
