import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Header from '@sections/Header'

import {Section, Container} from '@components/global'
import BackgroundImage from 'gatsby-background-image'

import ExternalLink from '@common/ExternalLink'

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
        bg_header: file(sourceInstanceName: {eq: "bg"}, name: {eq: "bg_header"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <BackgroundImage Tag="section" fluid={data.bg_header.childImageSharp.fluid} backgroundColor={`#302E63`}>
          <Container>
            <Header />
          </Container>

          <Section id="services">
            <Container>
              <SectionHeading>Services</SectionHeading>
              <GridThree>
                <div>
                  <h2>Consultancy</h2>
                  <p>Radio link system level design and regulatory aspects for future or existing IoT products.</p>
                </div>
                <div>
                  <h2>Regulatory compliance</h2>
                  <p>Validating your product against the relevant RF/EMC regulatory standards.</p>
                </div>
                <div>
                  <h2>Measurement & validation</h2>
                  <p>Assisting clients with interpreting, implementing and automating RF measurement procedures.</p>
                </div>
                <div>
                  <h2>Debugging</h2>
                  <p>Helping you finding the root cause of performance issues or failing RF/EMC regulatory testing.</p>
                </div>
                <div>
                  <h2>Design</h2>
                  <p>
                    Full IoT radio connectivity design from hardware to firmware with
                    <span>
                      <ExternalLink className={`link`}> my fellow freelancer peers.</ExternalLink>
                    </span>
                  </p>
                </div>
                <div>
                  <h2>Documentation</h2>
                  <p>Consise and tidy writing of measurement reports, technical reports or application notes.</p>
                </div>
              </GridThree>
            </Container>
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
        </BackgroundImage>
      </div>
    )}
  />
)

const Background = styled.div`
  background: #282440;
`

const SectionHeading = styled.h1`
  margin-top: 100px;

  color: ${(props) => props.theme.color.white.primary};
  ${(props) => props.theme.font_size.xlarge};

  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-top: 80px;
  }
`

const GridThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  align-items: top;
  justify-items: start;
  padding: 40px 0 140px;

  h2 {
    margin: 2rem 0;
    ${(props) => props.theme.font_size.regular};
    color: ${(props) => props.theme.color.secondary};
  }

  p {
    ${(props) => props.theme.font_size.large};
    line-height: 48px;
    color: ${(props) => props.theme.color.white.primary};
  }

  .link {
    transition: none;
    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.color.secondary};
    }
    &:after {
      display: none;
    }
  }

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    h2 {
      height: 62px;
    }
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding-bottom: 60px;
    grid-template-columns: 1fr;
    text-align: left;

    h2 {
      height: auto;
      margin: 0 0 1rem;
    }
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
    padding-top: 60px;
    padding-bottom: 60px;
    grid-template-columns: 2fr 2fr;

    p {
      ${(props) => props.theme.font_size.large};
      line-height: 48px;
    }

    figure {
      max-width: 80px;
    }
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 2fr 2fr;

    figure {
      max-width: 80px;
    }
  }
`
const CalloutImgWrapper = styled.figure`
  max-width: 140px;
  width: 100%;
  margin: 20px 0 30px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    max-width: 80px;
  }
`

export default Services
