import React, { useState, useEffect } from "react";
import { Item } from "./Item/Item";
import axios from "axios";
import "./../../CSS/production/Market.css";

const Market = () => {
  const [rates, setRates] = useState({});
  useEffect(() => {
    axios.get("https://cdn.cur.su/api/latest.json").then((res) => {
      if (res.status === 200 || res.status === 201) {
        setRates(res.data.rates);
      }
    });
  }, []);

  return (
    <main>
      <div className="screen-market">
        <h1>Market</h1>
        <div className="wrapper">
          {Object.keys(rates).map((item, index) => (
            <Item key={index} item={item} rates={rates}/>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Market