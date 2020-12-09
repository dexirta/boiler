import React, {Component} from 'react'
import styled from 'styled-components'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        Freelance electronics engineer with 15+years specializing in short-range radio connections.
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.header`
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

export default Header
