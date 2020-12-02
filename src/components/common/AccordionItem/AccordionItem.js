import React from 'react'
import Collapsible from 'react-collapsible'

import {Wrapper} from './style'

const AccordionItem = ({title, children}) => (
  <Wrapper>
    <Collapsible
      className="accordion"
      openedClassName="accordion active"
      triggerClassName="accordion-title"
      triggerOpenedClassName="accordion-title active"
      triggerTagName="button"
      contentInnerClassName="accordion-content"
      trigger={title}
      transitionTime={300}
      easing="ease-out">
      {children}
    </Collapsible>
  </Wrapper>
)

export default AccordionItem
