import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./layout/sidebar/Sidebar";
import Content from "./layout/content/Content";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="app">
          <Sidebar />
          <Content />
        </div>
      )}
    </>
  );
}

export default App;
