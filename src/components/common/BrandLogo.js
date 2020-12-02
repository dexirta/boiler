import React from 'react'

const BrandLogo = ({href, children, ...other}) => (
  <a href={href} {...other} rel="noreferrer noopener" className="no-underline">
    {children}
  </a>
)

export default BrandLogo
