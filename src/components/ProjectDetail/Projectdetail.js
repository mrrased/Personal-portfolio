import React from "react";
import "./Projectdetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from "@fortawesome/free-solid-svg-icons";


const Projectdetail = ({ data }) => {
  return (
    <div className="col-md-4 px-2">
      <div className="pro-card mb-5">
        <img className="pro-img" src={data.pic} alt="" srcset="" />
        <div className="pro-detail">
          <h3 className="pro-name py-3">{data.title}</h3>
          <div className="icons d-flex pb-3">
            <div className="px-5">
              <a href={data.code} target="_blank" title="Website name">
              <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
            </div>
            <div lassName="px-5">
              <a href={data.live} target="_blank" title="Website name">
                <FontAwesomeIcon className="icon" icon={faEye} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectdetail;
