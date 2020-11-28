import React from 'react'

const BrandLogo = ({href, children, ...other}) => (
  <a href={href} {...other} rel="noreferrer noopener">
    {children}
  </a>
)

export default BrandLogo
