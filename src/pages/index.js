import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import AlexaLogo from "../images/alexa.png";
import Speedrun from "../images/speedrun.png";

const AlexaSaying = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.725rem;
  margin-top: ${props => (props.Top ? "0rem" : "1.45rem")};
`;

const AlexaSayingsContainer = styled.div`
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.35);
  padding: 10px;
  border-radius: 10px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const IndexPage = () => (
  <div>
    <h2>An Alexa skill using the Speedrun.com API</h2>
    <p>
      Speedrunner is one of the easiest ways to get verfied data on video game
      speedrun records. Using the{" "}
      <a href="https://www.speedrun.com/">speedrun.com</a> RESTful API, you can
      get information on any of the 12,000 submitted games and various runs for
      any of them on any Alexa-Enabled device.
    </p>
    <AlexaSayingsContainer>
      <img
        src={AlexaLogo}
        style={{ objectFit: "contain", maxWidth: 200 }}
        alt="Alexa Logo"
      />
      <div>
        <AlexaSaying Top>
          "Alexa, ask speedrunner to search for Super Mario Odyssey"
        </AlexaSaying>
        <AlexaSaying>
          "Alexa, ask speedrunner for 100% runs of Celeste"
        </AlexaSaying>
      </div>
    </AlexaSayingsContainer>
    <h2>Features</h2>
    <ul>
      <li>
        Get speedruns for any game based on various categories (Any%, 100%,
        etc.)
      </li>
      <li>Get information on Speedrunners</li>
      <li>Get a briefing on the most recent verified runs</li>
    </ul>
    <h2>Getting Started</h2>
    <p>To begin, All you need to say is: "Alexa, Open Speedrunner"</p>
    <h2>Credits</h2>
    Credits to Speedrun.com for their API
    <img src={Speedrun} alt="speedrun.com logo" />
  </div>
);

export default IndexPage;
