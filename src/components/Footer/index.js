import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #eaeaea;
  color: #555;
  padding: 20px 10px;

  a {
    color: inherit;
    font-weight: bold;
  }
`;

const Footer = () => (
  <StyledFooter>
    <div
      style={{
        maxWidth: 960,
        margin: "0 auto"
      }}
    >
      &copy; Copyright Benjamin Lannon 2017 - 2018 |{" "}
      <span>
        Photo by{" "}
        <a href="https://unsplash.com/photos/u0FDwnbODKs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Linda Perez Johannessen
        </a>{" "}
        on Unsplash
      </span>
    </div>
  </StyledFooter>
);

export default Footer;
