import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import styled from "styled-components";

import Clock from "../../images/clock.svg";

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;

    h1 {
      margin-bottom: 20px;
    }
  }
`;

const Header = ({ data }) => (
  <div
    style={{
      background: "#607D8B",
      position: "relative",
      overflow: "hidden",
      marginBottom: "1.45rem",
      height: 400
    }}
  >
    <HeaderContainer>
      <span>
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ color: "white" }}>
            Speedrunner
          </Link>
          <img src={Clock} alt="clock svg" />
        </h1>
      </span>
      <a
        style={{ color: "white" }}
        href="https://github.com/lannonbr/speedrunner"
      >
        Github
      </a>
    </HeaderContainer>
    <Img
      sizes={data.background.sizes}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0.45
      }}
    />
  </div>
);

export default Header;
