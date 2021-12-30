import { shape, string } from 'prop-types'

export const slide= shape({
  src: string.isRequired,
  msrc: string.isRequired,
  title: string,
  size: string,
  w: string,
  h: string,
})