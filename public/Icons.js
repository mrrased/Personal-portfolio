import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return (
        <div>
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
    );
};

export default Icons;