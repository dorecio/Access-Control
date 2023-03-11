import React from 'react';

const Footer = () => {
  const url5 = process.env.URL_5  || "https://buy.stripe.com/test_9AQg2f6gY9yB26k6oo"
  const url10 = process.env.URL_10 || "https://buy.stripe.com/test_bIY17lbBi4eh6mA145"
  const url15 = process.env.URL_15 || "https://buy.stripe.com/test_00gg2f7l2h13aCQ28a"

  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the Encoders team.
        </h4>
            <div className="container text-center mb-5">
            <a className="w-100 mt-auto bg-secondary p-4" style={{fontSize:"1rem",color: "black"}} href={url5} target="_blank" rel="noreferrer">
            Dona 1 Cafe
            </a>
            <a className="w-100 mt-auto bg-secondary p-4" style={{fontSize:"1rem",color: "black"}} href={url10} target="_blank" rel="noreferrer">
            Dona 2 Cafe
            </a>
            <a className="w-100 mt-auto bg-secondary p-4" style={{fontSize:"1rem",color: "black"}} href={url15} target="_blank" rel="noreferrer">
            Dona 3 Cafe
            </a>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
