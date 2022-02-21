import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main"

const Routers = () => {
  return(
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
  )
}

export default Routers;