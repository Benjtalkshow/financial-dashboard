import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
        <Toaster />
      {/* <div className="bg-[#F4F3F9] h-screen">
        <Sidebar />

      </div> */}
      <Layout />
    </BrowserRouter>
  );
}

export default App;
