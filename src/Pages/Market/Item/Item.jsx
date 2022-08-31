import React from "react";

export const Item = ({ item, rates }) => {
  const images = ["/images/red.png", "/images/green.png"];

    return (
      <div className="item">
        <div className="info">
          <div className="left-side">
            <img
              src={`https://countryflagsapi.com/png/${item
                .slice(0, 2)
                .toLowerCase()}`}
              alt=""
            />
            <b>{item}</b>
          </div>
          <div className="right-side">
            <b>USD</b>
            <b>{((100 * rates.USD) / rates[item]).toFixed(2)}USD</b>
            <p>
              Volume <b>{(rates[item]).toFixed(4)}</b> {item}
            </p>
          </div>
        </div>
        <img
          src={images[Math.round(Math.random() * (images.length - 1))]}
          alt=""
        />
      </div>
    );
};
