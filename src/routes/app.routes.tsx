import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Donations } from "../pages/Donations";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donations" element={<Donations/>} />
    </Routes>
  )
}