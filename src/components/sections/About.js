import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import ExternalLink from '@common/ExternalLink'

import {Section, Container} from '@components/global'

const EXPERIENCE = [
  {
    title: 'Freelance Application Engineer',
    company: 'Self-employed',
    location_date: '2020 - / Hungary',
  },
  {
    title: 'Staff Application Engineer',
    company: 'Silicon Labs',
    location_date: '2011 - 2020 / Hungary',
  },
  {
    title: 'RF Evaluation Engineer',
    company: 'MediaTek',
    location_date: '2007 - 2010 / England',
  },
  {
    title: 'Test Engineer',
    company: 'Integration Associates Inc.',
    location_date: '2006 - 2007 / England',
  },
  {
    title: 'Test Engineer',
    company: 'Jabil Global Services',
    location_date: '2005 - 2006 / Hungary',
  },
]

const LINKS = [
  {
    name: 'More details',
    link: 'https://www.linkedin.com/in/zoltan-papp-404064124',
    title: 'Check out my LinkedIn profile',
  },
]

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        zoltan_papp_profile_image: file(sourceInstanceName: {eq: "profile"}, name: {eq: "zoltan_papp_profile_image"}) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <Section id="about" className="bg-white">
        <Container>
          <SectionHeading>About</SectionHeading>
          <GridTwo>
            <div>
              <p className={`mb-5`}>
                Zoltán Papp is a senior application engineer based in Budapest, Hungary. He has been working since 2005
                in various application engineer positions in Hungary and England.
                <br />
                <br />
                In the past years he was a delegate to ETSI (European Telecommunications Standards Institute) allowing
                him to be up-to-date with European radiofrequency regulations. He set his focus on various radio link
                weaknesses, performance improvements, achieving certain performance criteria - both hardware or radio
                configuration related.
                <br />
                <br />
                He went freelancing in 2020 to embrace involvement in new technologies.
              </p>
              <ProfileImage>
                <Img
                  fluid={data.zoltan_papp_profile_image.childImageSharp.fluid}
                  alt={`Zoltan Papp Freelance senior application engineer`}
                />
              </ProfileImage>
            </div>
            <div className={`align-self-end`}>
              {EXPERIENCE.map(({title, company, location_date}) => {
                return (
                  <div key={company}>
                    <h2>{title}</h2>
                    <p className={`mb-1`}>{company}</p>
                    <p className={`small mb-2 color-custom`}>{location_date}</p>
                    <hr className={`mb-2`} />
                  </div>
                )
              })}
              {LINKS.map(({name, link, title}) => (
                <div key={name}>
                  <ExternalLink href={link} title={title} className={`link`}>
                    {name}
                  </ExternalLink>
                </div>
              ))}
            </div>
          </GridTwo>
        </Container>
      </Section>
    )}
  />
)

const GridTwo = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-gap: 140px;
  align-items: top;
  justify-items: start;
  padding: 40px 0 0;

  .align-self-end {
    padding-bottom: 0.5rem;
    align-self: end;

    div:nth-last-child(2) {
      margin-bottom: 4rem;
      hr {
        display: none;
      }
    }
  }

  h2 {
    margin: 0.5rem 0;
    ${(props) => props.theme.font_size.regular};
    color: ${(props) => props.theme.color.secondary};
  }

  p {
    ${(props) => props.theme.font_size.regular};
    line-height: 120%;
    color: ${(props) => props.theme.color.primary};
  }

  .color-custom {
    color: #aaa9cd;
  }

  .small {
    ${(props) => props.theme.font_size.small};
  }

  .mb-1 {
    margin-bottom: 1rem;
  }

  .mb-2 {
    margin-bottom: 2rem;
  }

  .mb-5 {
    margin-bottom: 5rem;
  }

  .link {
    color: ${(props) => props.theme.color.primary};

    ${(props) => props.theme.font_size.regular};
    &:after {
      content: '';
      background: ${(props) => props.theme.color.secondary};
    }
    &:hover {
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
    grid-gap: 60px;

    .align-self-end {
      align-self: auto;
    }

    h2 {
      height: auto;
      margin: 0 0 1rem;
    }
  }
`

const SectionHeading = styled.h1`
  margin-top: 100px;
  margin-bottom: 2rem;

  color: ${(props) => props.theme.color.primary};
  ${(props) => props.theme.font_size.xlarge};

  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-top: 80px;
  }
`

const ProfileImage = styled.figure`
  margin: 0;
  max-width: 720px;
  width: 100%;
`

export default About
