import React from "react";
import "./header.css";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Billing
        </div>
        <div className="header-button">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star
          </a>
        </div>
      </div>
    </div>
  );
};
