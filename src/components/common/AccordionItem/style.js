import styled from 'styled-components'

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  &:last-child {
    .accordion {
      margin-bottom: 1rem;
      border-bottom: none;
    }
  }

  .accordion {
    border-bottom: 2px solid ${(props) => props.theme.color.black.lighter};
  }

  .accordion-title {
    border: none;
    background: none;
    padding: 0;
    outline: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    color: ${(props) => props.theme.color.primary};
    font-family: ${(props) => props.theme.font.primary};
    ${(props) => props.theme.font_size.regular};
    padding: 24px 0;
    padding-right: 72px;
    position: relative;

    &:hover {
      color: ${(props) => props.theme.color.secondary};
    }

    &::after {
      content: '+';
      display: block;
      width: 40px;
      height: 0px;
      position: absolute;
      top: 26px;
      right: 0px;
      font-weight: 500;
      ${(props) => props.theme.font_size.large};
      transition: transform 0.3s ease-in-out;
    }

    &.active {
      &::after {
        content: '-';
      }
    }
  }

  .accordion-content {
    padding: 0 72px 32px 0;
    line-height: 26px;
    ${(props) => props.theme.font_size.small};
    color: ${(props) => props.theme.color.primary};
  }
`
