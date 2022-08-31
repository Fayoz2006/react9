import { Route, Routes } from "react-router-dom";
import Exchange from "../Pages/Exchange/Exchange";
import { Market } from "../Pages/Market/Market";
import { Overview } from "../Pages/Overview/Overview";
import { Register } from "./../Pages/Register/Register";

export const Views = () => {
  return (
    <Routes>
      <Route index element={<Register />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/market" element={<Market/>} />
    </Routes>
  );
};
