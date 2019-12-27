'use strict'

const pagination = ({ total, activePage }) => {
  // ecs 5
  // return Array.apply(null, { length: total }).map((_, i) => i + 1)

  // ecs 6
  return Array.from({ length: total }, (_, i) => i + 1)
}

export default pagination