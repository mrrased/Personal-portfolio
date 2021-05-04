import React from "react";
import pro1 from "../../images/pro1.PNG";
import pro2 from "../../images/pro2.PNG";
import pro3 from "../../images/pro3.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./ProOne.css";


const ProOne = () => {
  return (
    <div className="container home pt-5 mt-5">
      <div className="justify-content-center selected-works mb-5 pb-5">
        <h1 className="sel-work">Selected_Works</h1>
      </div>
      <div>
      <div className="row">
        <div className="col-md-5 lorem">
          <div className="mb-5">
            <h1 className="project-name"> PEACE OF LIFE</h1>
            <h3 className="project-des px-5">
              A Wedding <br></br>Photography Website
            </h3>
          </div>
        </div>
        <div className="col-md-7 mb-5 pro-div box" data-aos="zoom-in">
         <img className="project-img" src={pro1} alt="" srcset="" />
         <div className="overlay">
           <div className="p-3">
             <h4 className="content">Key features</h4>
              <p className="">- Has admin panel and admin can add or remove another admin</p>
              <p>- Users can book services & share experiences</p>
              <p>- Everyone have to go through google authentication and can pay with stripe</p>
              <h4 className="content">Technologies: </h4>
              <p>- HTML, CSS, Bootstrap, ReactJs, NodeJs, MongoDB, ExpressJs, Firebase, Heroku</p>
           </div>
         </div>
        </div>
      </div>
      {/* #icons */}
      <div className="icons d-flex pb-3">
            <div className="px-5">
              <a href="https://github.com/Sumaiya176/Peace-of-Life-Client-Side" target="_blank" title="Github">
              <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
            </div>
            <div lassName="px-5">
              <a href="https://interior-illusions-31e95.web.app/" target="_blank" title="Live site">
                <FontAwesomeIcon className="icon" icon={faEye} />
              </a>
            </div>
          </div>
         {/* #icons */}
      </div>
      <div>
      <div className="row mt-5 pt-5">
        <div className="col-md-7 mb-5 pro-div" data-aos="zoom-in">
          <img className="project-img" src={pro2} alt="" srcset="" />
          <div className="overlay">
           <div className="p-3">
             <h4 className="content">Key features</h4>
              <p className="">- Users can place order for products and add any products</p>
              <p>- Have to go through google authentication</p>
              <p>- Has admin panel and admin can delete any product from database</p>
              <h4 className="content">Technologies: </h4>
              <p>- HTML, CSS, ReactJs, Bootstrap, NodeJs, MongoDB, Express, Firebase, Heroku</p>
           </div>
         </div>
        </div>
        <div className="col-md-5 lorem">
          <div className="mb-5 mi-3 pl-5">
            <h1 className="project-name"> GROCERY LAND</h1>
            <h3 className="project-des px-5">
              An Online <br></br>Shopping Site
            </h3>
          </div>
        </div>
      </div>
      <div className="icons d-flex pb-3">
            <div className="px-5">
              <a href="https://github.com/Sumaiya176/Grocery-land-client-side" target="_blank" title="Github">
              <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
            </div>
            <div lassName="px-5">
              <a href="https://grocery-land-6de4c.web.app/" target="_blank" title="Live site">
                <FontAwesomeIcon className="icon" icon={faEye} />
              </a>
            </div>
          </div>
      </div>
      <div>
      <div className="row mt-5 pt-5">
        <div className="col-md-5 lorem">
          <div className="mb-5">
            <h1 className="project-name"> City Travels</h1>
            <h3 className="project-des px-5">
              An Online <br></br>Rideshare site
            </h3>
          </div>
        </div>
        <div className="col-md-7 mb-5 pro-div" data-aos="zoom-in">
          <img className="project-img" src={pro3} alt="" srcset="" />
          <div className="overlay">
           <div className="p-3">
             <h4 className="content">Key features</h4>
              <p className="">- There has google login system and google map</p>
              <p>- Users can book their necessary one</p>
              <p>- Has a option to write starting point and end point of location</p>
              <h4 className="content">Technologies: </h4>
              <p>- HTML, CSS, Js, ReactJs, Bootstrap, Firebase, Netlify</p>
           </div>
         </div>
        </div>
      </div>
      <div className="icons d-flex mb-5 pb-3">
            <div className="px-5">
              <a href="https://github.com/Sumaiya176/City-Travels-react" target="_blank" title="Github">
              <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
            </div>
            <div lassName="px-5">
              <a href="https://city-travels-e9873.web.app/" target="_blank" title="Live site">
                <FontAwesomeIcon className="icon" icon={faEye} />
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProOne;
