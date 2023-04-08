import React from "react";
import "../styles/main-page.css";
import logo from "../assets/logoncc.png";
import image1 from "../assets/logohtml.png";
import image2 from "../assets/logocss.png";
import image3 from "../assets/logourl.png";

const MainPage = () => {
  return (
    <div className="mainPage">
      <img src={logo} alt="" />
      <div className="firstContent">
        <h3>Lorem ipsum dolor sit amet?</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </h4>
      </div>
      <div className="content">
        <div className="section">
          <h5>Lorem ipsum dolor sit amet</h5>
          <div className="top">
            <img src={image2} alt="" />
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at
            </h6>
          </div>
          <p>
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </p>
        </div>
        <div className="section">
          <h5>Lorem ipsum dolor sit amet</h5>
          <div className="top">
            <img src={image1} alt="" />
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at
            </h6>
          </div>
          <p>
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </p>
        </div>
        <div className="section">
          <h5>Lorem ipsum dolor sit amet</h5>
          <div className="top">
            <img src={image3} alt="" />
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at
            </h6>
          </div>
          <p>
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
