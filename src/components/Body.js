import React from "react";
import Card2 from "./Card";
import weather from "../images/weatherpred.JPG";
import advice from "../images/Advice.JPG";
import machin from "../images/machin.JPG";
import restaurant from "../images/restaurant.JPG";
import { Jumbotron } from "react-bootstrap";
const Body = () => {
  return (
    <Jumbotron>
      <div id='cards' className="cards">
        <h1>Some of Projects</h1>
        <div className="cards-container">
          <a
            href="https://onlinepizza.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Card2
              source={restaurant}
              title="Pizza Restaurant"
              text="This is a simple responsive online pizza store which is created by
          styled components"
            />
          </a>
          <a
            href="https://weatherstate.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Card2
              source={weather}
              title="Weather Predictor"
              text="This app is a PWA app and fully responsive which uses openweathermap api "
            />
          </a>
          <a
            href="https://great-advices.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Card2
              source={advice}
              title="Famous sentences"
              text="This is a PWA and fully responsive app and uses api"
            />
          </a>
          <a
            href="https://machin-galary.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Card2
              source={machin}
              title="Machin Galary"
              text="This is a simple, bilingual and fully responsive app which uses i18index library in react"
            />
          </a>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Body;
