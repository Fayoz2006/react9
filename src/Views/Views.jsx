import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Layout from "../Layout/Layout";
// import Exchange from "../Pages/Exchange/Exchange";
// import { Market } from "../Pages/Market/Market";
// import { Overview } from "../Pages/Overview/Overview";
// import { Register } from "./../Pages/Register/Register";

const Layout = lazy(() => import(`../Layout/Layout`));
const Exchange = lazy(() => import(`../Pages/Exchange/Exchange`));
const Market = lazy(() => import(`../Pages/Market/Market`));
const Overview = lazy(() => import(`../Pages/Overview/Overview`));
const Register = lazy(() => import(`./../Pages/Register/Register`));

export const Views = () => {
  return (
    <Routes>
      <Route index element={<Register />} />
      <Route
        path="/overview"
        element={
          <Layout>
            <Overview />
          </Layout>
        }
      />
      <Route
        path="/exchange"
        element={
          <Layout>
            <Exchange />
          </Layout>
        }
      />
      <Route
        path="/market"
        element={
          <Layout>
            <Market />
          </Layout>
        }
      />
      <Route
        path="/wallets"
        element={
          <Layout>
            <main></main>
          </Layout>
        }
      />
      <Route
        path="/transictions"
        element={
          <Layout>
            <main></main>
          </Layout>
        }
      />
    </Routes>
  );
};
