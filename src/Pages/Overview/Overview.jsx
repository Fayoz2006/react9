import React, { useState, useEffect } from "react";
import { Widget } from "./Widget/Widget";
import axios from "axios";
import "./../../CSS/production/Overview.css";
import { BalanceChart } from "./Charts/BalanceChart";
import { SpendinChart } from "./Charts/SpendingChart";
import { MarketChart } from "./Charts/MarketChart";

const Overview = () => {
  const [rates, setRates] = useState({});
  useEffect(() => {
    axios.get("https://cdn.cur.su/api/latest.json").then((res) => {
      if (res.status === 200 || res.status === 201) {
        setRates(res.data.rates);
      }
    });
  }, []);

  let arr = [
    {
      title: "BitCoin",
      img: "/images/BTC.png",
      background: "linear-gradient(237.07deg, #604392 -8.06%, #0F0B38 96.63%)",
      amount: {
        from: "600 BTC",
        to: `$${+Math.round((600 * rates.USD) / rates.BTC)}`,
      },
      smallItem: [
        {
          img: "/images/increase.png",
          amount: {
            a: `$1200 = ${+((1200 * rates.BTC) / rates.USD).toFixed(3)}btc`,
            b: `1btc = $${+Math.round((1 * rates.USD) / rates.BTC)}`,
          },
        },
        {
          img: "/images/decrease.png",
          amount: {
            a: `$1200 = ${+((1200 * rates.BTC) / rates.USD).toFixed(3)}btc`,
            b: `1btc = $${+Math.round((1 * rates.USD) / rates.BTC)}`,
          },
        },
        {
          img: "/images/decrease.png",
          amount: {
            a: `$1200 = ${+((1200 * rates.BTC) / rates.USD).toFixed(3)}btc`,
            b: `1btc = $${+Math.round((1 * rates.USD) / rates.BTC)}`,
          },
        },
      ],
    },
    {
      title: "American USD",
      img: `https://countryflagsapi.com/png/us`,
      background: "linear-gradient(237.07deg, #D66168 -8.06%, #0F0B38 96.63%)",
      amount: {
        from: "100 USD",
        to: `${+Math.round((100 * rates.UZS) / rates.USD)} UZS`,
      },
      smallItem: [
        {
          img: "/images/increase.png",
          amount: {
            a: `$200 = ${+((200 * rates.UZS) / rates.USD).toFixed(0)}uzs`,
            b: `1 uzs = ${+((1 * rates.USD) / rates.UZS).toFixed(6)}$`,
          },
        },
        {
          img: "/images/decrease.png",
          amount: {
            a: `$200 = ${+((200 * rates.UZS) / rates.USD).toFixed(0)}uzs`,
            b: `1 uzs = ${+((1 * rates.USD) / rates.UZS).toFixed(6)}$`,
          },
        },
        {
          img: "/images/decrease.png",
          amount: {
            a: `$200 = ${+((200 * rates.UZS) / rates.USD).toFixed(0)}uzs`,
            b: `1 uzs = ${+((1 * rates.USD) / rates.UZS).toFixed(6)}$`,
          },
        },
      ],
    },
    {
      title: "Ethereum",
      img: "/images/BTC.png",
      background: "linear-gradient(237.07deg, #6162D6 -8.06%, #0F0B38 96.63%)",
      amount: {
        from: "600 ETH",
        to: `$${+Math.round((600 * rates.USD) / rates.ETH)}`,
      },
      smallItem: [
        {
          img: "/images/increase.png",
          amount: {
            a: `$1200 = ${+((1200 * rates.ETH) / rates.USD).toFixed(3)}eth`,
            b: `1eth = $${+Math.round((1 * rates.USD) / rates.ETH)}`,
          },
        },
        {
          img: "/images/decrease.png",
          amount: {
            a: `$1200 = ${+((1200 * rates.ETH) / rates.USD).toFixed(3)}eth`,
            b: `1eth = $${+Math.round((1 * rates.USD) / rates.ETH)}`,
          },
        },
        {
          img: "/images/decrease.png",
          amount: {
            a: `$1200 = ${+((1200 * rates.ETH) / rates.USD).toFixed(3)}eth`,
            b: `1eth = $${+Math.round((1 * rates.USD) / rates.ETH)}`,
          },
        },
      ],
    },
    {
      title: "Russian RUB",
      img: `https://countryflagsapi.com/png/ru`,
      background: "linear-gradient(237.07deg, #EB8338 -8.06%, #0F0B38 96.63%)",
      amount: {
        from: "100 RUB",
        to: `${+Math.round((100 * rates.UZS) / rates.RUB)} UZS`,
      },
      smallItem: [
        {
          img: "/images/increase.png",
          amount: {
            a: `200rub = ${+((200 * rates.UZS) / rates.RUB).toFixed(0)}uzs`,
            b: `1 uzs = ${+((1 * rates.RUB) / rates.UZS).toFixed(6)}rub`,
          },
        },
        {
          img: "/images/decrease.png",
          amount: {
            a: `200rub = ${+((200 * rates.UZS) / rates.RUB).toFixed(0)}uzs`,
            b: `1 uzs = ${+((1 * rates.RUB) / rates.UZS).toFixed(6)}rub`,
          },
        },
        {
          img: "/images/decrease.png",
          amount: {
            a: `200rub = ${+((200 * rates.UZS) / rates.RUB).toFixed(0)}uzs`,
            b: `1 uzs = ${+((1 * rates.RUB) / rates.UZS).toFixed(6)}rub`,
          },
        },
      ],
    },
  ];

  return (
    <main>
      <div className="screen-overview">
        <div className="header">
          <div>
            <h1>Overview</h1>
            <span>26 August, Friday</span>
          </div>
          <button>Add Widget</button>
        </div>
        <div className="wrapper">
          <div className="left-side">
            <div className="balance">
              <b>Balance</b>
              <div className="balanceChart">
                <BalanceChart />
              </div>
            </div>
            <div className="spending">
              <div className="top-side">
                <b>Spending</b>
                <span>January</span>
              </div>
              <div className="spendingChart">
                <div className="totalSpending">
                  <b>$ 5,743.35</b>
                  <p>total spending</p>
                </div>
                <SpendinChart />
              </div>
            </div>
          </div>
          <div className="right-side">
            {arr.map((item, index) => (
              <Widget key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="bottom-side">
          <div className="market">
            <b>Market</b>
            <div className="marketChart">
              <MarketChart />
            </div>
          </div>
          <div className="news">
            <b>Recent News</b>
            <div className="wrapper"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Overview