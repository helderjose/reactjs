'use strict'

import React from 'react'

const Page = ({ page, pageLink, onClick }) => {
  const Component = page === '...' ? 'span' : 'a'
  const href = page === '...' ? null : pageLink

  // executa o onClick só se ele for passado.
  const handleClick = !onClick ? null : (e) => {
    e.preventDefault()
    onClick(page)
  }

  return (
    <Component href={href} onClick={handleClick}>
      {page}
    </Component>
  )
}

export default Page
