import React from 'react';
import skydive from '.././assets/skydive.jpg';
import housing2 from '.././assets/japan-2.jpg';

const AllClassifieds = () => (
  <div className="page-container">
    <div className="dual-container">
      <div className="left-container">
        <h1>All Classifieds From New York</h1>
        <div className="single-story-container">
          <div>
            <h2>Fall From the Sky</h2>
            <p>Despite the slump alfter the 2008 housing crash, prices in London have rebounded to their highest levels ever. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <figure className="house-figure">
            <img className="container__image" alt="react logo" src={skydive} />
          </figure>
        </div>

      </div>
      <div>
        <h2>Find Properties</h2>
        <ul>
          <li><a href="">Go to Real Estate Section</a></li>
          <li><a href="">Search For Properties</a></li>
          <li><a href="">Download the Real Estate App</a></li>
          <li><a href="">Comercial Real Estate</a></li>
          <li><a href="">Video Showcase: Real Estate</a></li>
          <li><a href="">Post an Ad</a></li>
        </ul>
      </div>
    </div>

    <div className="dual-container">
      <div className="left-container">
        <h1>Time To Buy</h1>
        <div className="single-story-container">
          <figure className="house-figure">
            <img className="container__image" alt="react logo" src={housing2} />
          </figure>
          <div>
            <h2>House Hunting In london</h2>
            <p>Despite the slump alfter the 2008 housing crash, prices in London have rebounded to their highest levels ever. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

      </div>
      <div>
        <h2>More Looks</h2>
        <ul>
          <li><a href="">Comercial Real Estate</a></li>
          <li><a href="">Search For Properties</a></li>
          <li><a href="">Video Showcase: Real Estate</a></li>
          <li><a href="">Go to Real Estate Section</a></li>
          <li><a href="">Post an Ad</a></li>
          <li><a href="">Download the Real Estate App</a></li>
        </ul>
      </div>
    </div>
    <div className="footer">
      <a href="">Place a Classified Ad >> </a>
    </div>
  </div>
);

export default AllClassifieds;