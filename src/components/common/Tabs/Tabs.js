import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'
import styled from 'styled-components'

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      activeTab: this.props.children[0].props.label,
    }
  }

  onClickTabItem = (tab) => {
    this.setState({activeTab: tab})
  }

  render() {
    const {
      onClickTabItem,
      props: {children},
      state: {activeTab},
    } = this

    return (
      <TabWrapper>
        <ol className="tab-list">
          {children.map((child) => {
            const {label} = child.props

            return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined
            return child.props.children
          })}
        </div>
      </TabWrapper>
    )
  }
}

const TabWrapper = styled.div`
  margin-bottom: 8rem;

  .tab-list {
    display: flex;
    padding: 0;
    margin: 60px 0 40px;
  }

  .tab-list-item {
    margin: 1rem 0.5rem;
    padding: 1rem 0.5rem;
    ${(props) => props.theme.font_size.regular};
    border-bottom: 4px solid #aaa9cd;
    list-style: none;
    &:first-child {
      margin-left: 0;
    }

    &:hover {
      cursor: pointer;
    }

    @media (max-width: ${(props) => props.theme.screen.md}) {
      ${(props) => props.theme.font_size.small};
      line-height: 1.4rem;
      text-align: center;
    }
  }

  .tab-list-active {
    border-color: ${(props) => props.theme.color.secondary};
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    .tab-list {
      margin: 20px 0;
    }
  }
`

export default Tabs
