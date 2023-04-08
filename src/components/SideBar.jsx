import React from "react";
import "../styles/side-bar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
        <div>
            <button>
                <h1>Home</h1>
            </button>
            <button>
                <h2>Services</h2>
            </button>
            <button>
                <h2>News</h2>
            </button>
            <button>
                <h2>Blog</h2>
            </button>
            <button>
                <h2>Contact</h2>
            </button>
        </div>
      
    </div>
  );
};

export default SideBar;
