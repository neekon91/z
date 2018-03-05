import React from 'react';
import zillow from '.././assets/zillow-logo.jpg';
import japan3 from '.././assets/japan-3.jpg';

const Jobs = () => (
  <div className="page-container">
    <div className="dual-container">
      <div className="left-container">
        <h1>Zillow Group Company hiring Engineers</h1>
        <div className="single-story-container">
          <div>
            <h2>House Hunting In london</h2>
            <p>Despite the slump alfter the 2008 housing crash, prices in London have rebounded to their highest levels ever. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <figure className="house-figure">
            <img className="container__image" alt="react logo" src={zillow} />
          </figure>
        </div>

      </div>
      <div>
        <h2>Roles</h2>
        <ul>
          <li><a href="">Full Stack</a></li>
          <li><a href="">Front End UI</a></li>
          <li><a href="">Back End Java</a></li>
          <li><a href="">Director</a></li>
          <li><a href="">Project Manager</a></li>
          <li><a href="">Data Engineer</a></li>
          <li><a href="">UI/UX Front End</a></li>
        </ul>
      </div>
    </div>

    <div className="dual-container">
      <div className="left-container">
        <h1>Open Market Manager Roles</h1>
        <div className="single-story-container">
          <figure className="house-figure">
            <img className="container__image" alt="react logo" src={japan3} />
          </figure>
          <div>
            <h2>Advertisement Agency In london</h2>
            <p>Despite the slump alfter the 2008 housing crash, prices in London have rebounded to their highest levels ever. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

      </div>
      <div>
        <h2>More Locations</h2>
        <ul>
          <li><a href="">Tokyo, Japan</a></li>
          <li><a href="">San Francisco</a></li>
          <li><a href="">NY, USA</a></li>
          <li><a href="">London, England</a></li>
          <li><a href="">Paris, France</a></li>
          <li><a href="">Others</a></li>
        </ul>
      </div>
    </div>
    <div className="footer">
      <a href="">Place a Job Ad >> </a>
    </div>
  </div>
);

export default Jobs;
