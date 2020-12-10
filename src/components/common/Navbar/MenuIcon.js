import React from 'react'
import styled from 'styled-components'

const MenuIcon = ({toggleOpenClose}) => {
  return (
    <MenuWrapper className={toggleOpenClose ? `is-active` : ``}>
      <span className={`line`}></span>
      <span className={`line`}></span>
      <span className={`line`}></span>
    </MenuWrapper>
  )
}

export default MenuIcon

const MenuWrapper = styled.span`
  display: block;

  &:hover {
    cursor: pointer;
  }

  .line {
    width: 30px;
    height: 3px;
    background-color: #ecf0f1;
    display: block;
    margin: 6px auto;
    transition: all 0.3s ease-in-out;
  }

  &.is-active {
    transition: all 0.3s ease-in-out;
    transition-delay: 0.5s;
    transform: rotate(45deg);

    .line:nth-child(2) {
      width: 0px;
    }

    .line:nth-child(1),
    .line:nth-child(3) {
      transition-delay: 0.3s;
    }

    .line:nth-child(1) {
      transform: translateY(9px);
    }

    .line:nth-child(3) {
      transform: translateY(-9px) rotate(90deg);
    }
  }
`
