import React from 'react'
import {OutboundLink} from 'gatsby-plugin-google-analytics'

const ExternalLink = ({href, children, ...other}) => (
  <OutboundLink href={href} {...other} rel="noreferrer noopener" target="_blank">
    {children}
  </OutboundLink>
)

export default ExternalLink
