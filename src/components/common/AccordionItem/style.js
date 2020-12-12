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
    ${(props) => props.theme.font_size.large};
    padding: 24px 1rem;
    padding-right: 72px;
    position: relative;

    &:hover {
      color: ${(props) => props.theme.color.secondary};
    }

    &::after {
      content: '+';
      display: block;
      position: absolute;
      top: 50%;
      right: 1rem;
      font-weight: 5;
      font-weight: 500;
      ${(props) => props.theme.font_size.large};
      transition: transform 0.3s ease-in-out;
      transform: translate(0, -50%);
    }

    &.active {
      &::after {
        content: '-';
      }
    }
  }

  .accordion-content {
    padding: 0 72px 32px 1rem;
    ${(props) => props.theme.font_size.regular};
    color: ${(props) => props.theme.color.primary};
    line-height: 44px;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    .accordion-title {
      ${(props) => props.theme.font_size.regular};
    }

    .accordion-content {
      ${(props) => props.theme.font_size.small};
    }
  }
`
