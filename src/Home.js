import React from "react";
import shadowBoys from "./assets/shadow-boys.jpg";
import "./assets/reset.css";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <div className="font-sans">
      <div className="w100vw h100vh flex p4 p7-md p20-lg relative z2">
        <h2 className="m-auto fz10vw fz5vw-lg">
          Hello, I am{" "}
          <a className="black" href="mailto:kilian@susu.computer">
            Kilian
          </a>
          . And I am{" "}
          <a className="black" href="mailto:nathan@susu.computer">
            Nathan
          </a>
          . We&nbsp;are&nbsp;SuSu.
        </h2>
      </div>
      <div
        className="fixed t2 r2 b2 l2 t4-lg r4-lg b4-lg l4-lg bg-cover"
        style={{
          backgroundPosition: "50% 70%",
          backgroundImage: `url(${shadowBoys})`,
        }}
      />
      <div className="absolute o0p white">
        <Link to="/archive" />
        <Link to="/snackalong" />
        <Link to="/phil" />
        <Link to="/sundays" />
      </div>
    </div>
  );
};

export default Home;
