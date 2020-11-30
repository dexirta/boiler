import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import {Section, Container} from '@components/global'

const BG = {
  url: 'bg-waves.png',
}

const CALLOUT = [
  {
    alt: 'Icon 1',
    image: 'callout-img-1.png',
    text: 'For startups to large enterprises',
  },
  {
    alt: 'Icon 2',
    image: 'callout-img-1.png',
    text: 'For existing or future products',
  },
  {
    alt: 'Icon 3',
    image: 'callout-img-2.png',
    text: 'For remote or on-site work',
  },
  {
    alt: 'Icon 4',
    image: 'callout-img-3.png',
    text: 'For failing or passing products',
  },
]

const Services = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {sourceInstanceName: {eq: "callout"}}) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 140) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Section id="services">
        <BackgroundWhithImage>
          <Container>
            <HeaderContainer>
              <div>Freelance electronics engineer with 15+years specializing in short-range radio connections.</div>
            </HeaderContainer>
            <SectionHeading>Services</SectionHeading>
            <GridThree>
              <div>
                <h4>Consultancy</h4>
                <p>Radio link system level design and regulatory aspects for future or existing IoT products.</p>
              </div>
              <div>
                <h4>Regulatory compliance</h4>
                <p>Validating your product against the relevant RF/EMC regulatory standards.</p>
              </div>
              <div>
                <h4>Measurement & validation</h4>
                <p>Assisting clients with interpreting, implementing and automating RF measurement procedures.</p>
              </div>
              <div>
                <h4>Debugging</h4>
                <p>Helping you finding the root cause of performance issues or failing RF/EMC regulatory testing.</p>
              </div>
              <div>
                <h4>Design</h4>
                <p>Full IoT radio connectivity design from hardware to firmware with my fellow freelancer peers.</p>
              </div>
              <div>
                <h4>Documentation</h4>
                <p>Consise and tidy writing of measurement reports, technical reports or application notes.</p>
              </div>
            </GridThree>
          </Container>
        </BackgroundWhithImage>
        <Background>
          <Container>
            <GridFour>
              {CALLOUT.map(({alt, image, text}) => {
                const img = data.allFile.edges.find(({node}) => node.relativePath === image).node
                return (
                  <div key={alt}>
                    <CalloutImgWrapper>
                      <Img fluid={img.childImageSharp.fluid} alt={alt} />
                    </CalloutImgWrapper>
                    <p>{text}</p>
                  </div>
                )
              })}
            </GridFour>
          </Container>
        </Background>
      </Section>
    )}
  />
)

const BackgroundWhithImage = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  background-color: ${(props) => props.theme.color.primary};
  background-image: url(${BG.url});
`

const Background = styled.div`
  background: #282440;
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 60%);
  ${(props) => props.theme.font_size.large};
  line-height: 48px;
  padding-top: 120px;
  color: ${(props) => props.theme.color.white.primary};

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`
const SectionHeading = styled.h1`
  padding-top: 80px;

  color: ${(props) => props.theme.color.white.primary};
  ${(props) => props.theme.font_size.xlarge};
`

const GridThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  align-items: top;
  justify-items: start;
  padding: 24px 0 140px;

  h4 {
    margin-bottom: 16px;
    ${(props) => props.theme.font_size.regular};
    color: ${(props) => props.theme.color.secondary};
  }

  p {
    ${(props) => props.theme.font_size.large};
    line-height: 48px;
    color: ${(props) => props.theme.color.white.primary};
  }

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    h4 {
      height: 62px;
    }
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;

    h4 {
      height: auto;
    }

    ${(props) =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`

const GridFour = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 80px;
  align-items: top;
  justify-items: start;
  padding: 80px 0;

  p {
    ${(props) => props.theme.font_size.large};
    line-height: 48px;
    color: ${(props) => props.theme.color.white.primary};
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 2fr 2fr;
  }
`
const CalloutImgWrapper = styled.figure`
  max-width: 140px;
  width: 100%;
  margin: 20px 0 30px;
`

export default Services
