import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${(props) => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${(props) => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 1250px;
  }

  @media (min-width: ${(props) => props.theme.screen.xl}) {
    max-width: 1300px;
  }

  ${(props) =>
    props.fluid &&
    `
    max-width: 1300px !important;
  `};
`

export const Section = styled.section`
  overflow: hidden;

  ${(props) =>
    props.accent &&
    `background-color: ${props.accent === 'secondary' ? props.theme.color.white.dark : props.theme.color.primary}`};
`
