import React from "react";
import { AiFillGithub ,AiFillAppstore} from 'react-icons/ai';
import "./header.css";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          <AiFillAppstore style={{paddingRight:'5px'}} size={30} />
          Billing-App
        </div>
        <div className="header-button">
          <a
            href="https://github.com/Pankajkumarbasuri78/React-billing-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={25}/>
          </a>
        </div>
      </div>
    </div>
  );
};
