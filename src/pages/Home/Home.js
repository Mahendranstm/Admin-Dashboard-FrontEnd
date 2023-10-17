import React from "react";
import "./Home.css";
import Appbar from "../../components/Appbar/Appbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://images.unsplash.com/photo-1529485726363-95c8d62f656f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        alt="budha"
      />
      <div className="appBar">
        <Appbar />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
