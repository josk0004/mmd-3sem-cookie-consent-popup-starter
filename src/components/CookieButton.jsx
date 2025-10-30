const CookieButton = ({ isAccepted, setIsAccepted }) => {
  return (
    <button onClick={() => setIsAccepted(!isAccepted)} className="cookie-consent-popup-cta pointer">
      I like Cookies
    </button>
  );
};

export default CookieButton;
