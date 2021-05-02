import React from "react";
import sumu from "../../images/sumu.jpg";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Typical from 'react-typical';
import {
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="img-div">
        <img className="sumu-img mt-5 pt-5" src={sumu} alt="" srcset="" />
        <div className="hello m-5 p-5">
          <h4 className="lorem">
            Hey!! This is <span className="name-color">Sumaiya</span> a {' '}
            <Typical
             loop = {1000}
             wrapper = "p"
            steps = {[
              'Frontend Web Developer 😅 ',
              1000,
              'React Developer',
              1000,
            ]}
            />
            <br/>
            I'm passionate to work with new technologies. I wanna build my career with web development. And i am optimistic about my bright developing career. I do many projects with react, reactJs, NodeJs with Firebase. Some of my projects are shown here. 

          </h4>
          <h4 className="lorem mt-5">
            If you love a chat feel free to drop me a line ___
          </h4>
          <h4 className="lorem mt-5 name-color">
            sumaiya.tr96@gmail.com
          </h4>
          <h4 className="lorem mt-5">
            Or
          </h4>
          <h4 className="lorem mt-5">
            Leave a <span className="link-color"><Link className="link-color"  to="/contact">message</Link></span> ___
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
