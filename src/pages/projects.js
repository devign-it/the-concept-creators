import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';

import Canvas from '../components/canvas/canvas';
import { graphql } from 'gatsby';


const Projects = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        A visual diary showing moods and projects.
      </Title>
      <Canvas items={data.homeJson.gallery} />

    </Box>
    {/* <Gallery items={data.homeJson.gallery} /> */}
    {/* <div style={{ height: '50vh' }} /> */}
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;

export const query = graphql`
  query ProjectsQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
