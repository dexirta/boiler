import React, {Component} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import {ReactComponent as Logo} from '@static/logo.svg'
import BrandLogo from '@common/BrandLogo'

import {Container} from '@components/global'
import {Nav, NavItem, Brand, StyledContainer, NavListWrapper, MobileMenu, Mobile} from './style'

import {ReactComponent as MenuIcon} from '@static/icons/menu.svg'

const NAV_ITEMS = ['Services', 'About', 'Projects', 'Contact']
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
    isScrolled: false,
  }

  componentDidMount() {
    this.hashHandler()
  }

  hashHandler() {
    const sections = document.querySelectorAll('section[id]')
    let counter = null

    const arrayLoop = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top >= 0 && rect.top <= 250) {
          const location = window.location.toString().split('#')[0]
          history.replaceState(null, null, location + '#' + section.id)
          counter++
        }
      })
    }

    document.addEventListener('scroll', () => {
      setTimeout(() => {
        arrayLoop()
        if (counter === 1) {
          this.setState(() => ({isScrolled: true}))
        }
      }, 100)
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

  getNavAnchorLink = (item) => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  )

  getNavList = ({mobile = false}) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map((item) => item.toLowerCase())}
        currentClassName={this.state.isScrolled ? 'active' : ''}
        offset={-150}>
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
            <button
              onClick={this.toggleMobileMenu}
              style={{color: 'white', touchAction: 'manipulation'}}
              aria-label="Open the menu">
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
