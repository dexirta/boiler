import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

import {Section, Container} from '@components/global'
import ExternalLink from '@common/ExternalLink'

const BG = {
  content_decor: 'content-decor.svg',
}

const LINKS = [
  {
    name: 'zoltan@zoltpapp.com',
    link: 'mailto:zoltan@zoltpapp.com',
    title: 'Drop me an email',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/zoltan-papp-404064124',
    title: 'Check out my LinkedIn profile',
  },
]

const getActualYear = new Date().getFullYear()

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        bg_footer: file(sourceInstanceName: {eq: "bg"}, name: {eq: "bg_footer"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => (
      <Section id="contact">
        <BackgroundImage Tag="section" fluid={data.bg_footer.childImageSharp.fluid} backgroundColor={`#302E63`}>
          <Container>
            <Grid>
              <div>
                <TextWithDecoration>
                  <h1>
                    Let’s start <span>thinking</span> together.
                  </h1>
                </TextWithDecoration>
                <ContactWrapper>
                  {LINKS.map(({name, link, title}) => (
                    <div key={name}>
                      <ExternalLink href={link} title={title}>
                        {name}
                      </ExternalLink>
                    </div>
                  ))}
                </ContactWrapper>
                <Copyright>{getActualYear} Zoltan Papp. All rights reserved</Copyright>
              </div>
            </Grid>
          </Container>
        </BackgroundImage>
      </Section>
    )}
  />
)

const Grid = styled.footer`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 20%);
  grid-gap: 40px;
  align-items: top;
  justify-items: start;
  padding: 40px 0 80px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding-bottom: 60px;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`

const ContactWrapper = styled.div`
  margin: 40px 0;
  ${(props) => props.theme.font_size.large};
  font-weight: 800;

  div {
    display: block;
    padding: 20px 0;
  }
`

const TextWithDecoration = styled.div`
  margin: 60px 0 80px;
  color: ${(props) => props.theme.color.white.primary};
  span {
    margin: 0 -10px;
    padding: 1rem 10px 0;
    background-position: 0 150%;
    background-image: url(${BG.content_decor});
    background-size: 100%;
    background-repeat: no-repeat;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin: 40px 0 60px;
  }
`

const Copyright = styled.div`
  margin-top: 80px;
  ${(props) => props.theme.font_size.small};
  color: ${(props) => props.theme.color.white.primary};
`

export default Footer
