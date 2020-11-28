import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import {Container} from '@components/global'
import ExternalLink from '@common/ExternalLink'

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(sourceInstanceName: {eq: "art"}, name: {eq: "build"}) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Text>Freelance electronics engineer with 15+years specializing in short-range radio connections.</Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
)

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.color.primary};

  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
`

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      width: 100%;
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;
  margin-top: 2rem;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: start;
  }
`

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.color.black.regular};
  }
`

export default Header
