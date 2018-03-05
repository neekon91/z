import React from 'react';
import bmw from '.././assets/bmw.jpg';
import tesla from '.././assets/tesla-model-p-pickup-truck.jpg';

const Autos = () => (
  <div className="page-container">
    <div className="dual-container">
      <div className="left-container">
        <h1>Big Auto Sale</h1>
        <div className="single-story-container">
          <div>
            <h2>Bmw 3.0 CSL</h2>
            <p>Despite the slump alfter the 2008 housing crash, prices in London have rebounded to their highest levels ever. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <figure className="house-figure">
            <img className="container__image" alt="react logo" src={bmw} />
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
        <h1>Buy Electric</h1>
        <div className="single-story-container">
          <figure className="house-figure">
            <img className="container__image" alt="react logo" src={tesla} />
          </figure>
          <div>
            <h2>Longer Range and More Pulling Power</h2>
            <p>Despite the slump alfter the 2008 housing crash, prices in London have rebounded to their highest levels ever. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

      </div>
      <div>
        <h2>More Models</h2>
        <ul>
          <li><a href="">Sedan : Model 3</a></li>
          <li><a href="">Luxury Sedan : Model S</a></li>
          <li><a href="">Suv : Model X</a></li>
          <li><a href="">Truck : Model P</a></li>
          <li><a href="">Post an Ad</a></li>
          <li><a href="">Coupe</a></li>
        </ul>
      </div>
    </div>
    <div className="footer">
      <a href="">Place an Auto Ad >> </a>
    </div>
  </div>

);

export default Autos;