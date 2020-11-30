import React, {Component} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import {ReactComponent as Logo} from '@images/logo.svg'
import BrandLogo from '@common/BrandLogo'

import {Container} from '@components/global'
import {Nav, NavItem, Brand, StyledContainer, NavListWrapper, MobileMenu, Mobile} from './style'

import {ReactComponent as MenuIcon} from '@static/icons/menu.svg'

const NAV_ITEMS = ['Services', 'About', 'Portfolio', 'Contact']
const LOGO = [
  {
    logo: Logo,
    link: '#',
    arialabel: 'Zoltan Papp',
  },
]

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  }

  componentDidMount() {
    this.hashHandler()
  }

  hashHandler() {
    const headings = document.querySelectorAll('section[id]')

    document.addEventListener('scroll', () => {
      headings.forEach((ha) => {
        const rect = ha.getBoundingClientRect()
        if (rect.top >= 0 && rect.top <= 150) {
          const location = window.location.toString().split('#')[0]
          history.replaceState(null, null, location + '#' + ha.id)
        }
      })
    })
  }

  toggleMobileMenu = () => {
    this.setState((prevState) => ({mobileMenuOpen: !prevState.mobileMenuOpen}))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({mobileMenuOpen: false})
    }
  }

  getNavAnchorLink = (item) => <AnchorLink href={`#${item.toLowerCase()}`}>{item}</AnchorLink>

  getNavList = ({mobile = false}) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map((item) => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}>
        {NAV_ITEMS.map((navItem) => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const {mobileMenuOpen} = this.state

    return (
      <Nav {...this.props} role={'navigation'}>
        <StyledContainer>
          <Brand>
            {LOGO.map(({logo, link, arialabel}) => (
              <BrandLogo key={link} href={link} aria-label={arialabel} title={arialabel}>
                {logo()}
              </BrandLogo>
            ))}
          </Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{color: 'white'}} aria-label="Open the menu">
              <MenuIcon aria-hidden={true} />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({mobile: true})}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    )
  }
}

export default Navbar
