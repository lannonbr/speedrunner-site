import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Speedrunner"
      meta={[
        {
          name: "description",
          content: "An alexa skill to view video game speedruns"
        },
        { name: "keywords", content: "alexa, speedruns, speedrun.com" }
      ]}
    />
    <Header data={data} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export const query = graphql`
  query LayoutQuery {
    background: imageSharp(id: { regex: "/linda.jpg/" }) {
      sizes(maxWidth: 2560) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default TemplateWrapper;
